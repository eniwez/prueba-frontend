import { useState } from "react";
import "animate.css";
import Loading from "../components/Loading";
import { useAuthGuard } from "../hooks/useAuthGuard";
import { useRandomCharacter } from "../hooks/useRandomCharacter";
import CharacterCard from "../components/CharacterCard";
import ActionButtons from "../components/ActionButtons";
import { useVoteCharacter } from "../hooks/useVoteCharacter";
import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

export default function HomePage() {
  useAuthGuard();

  const { data, isLoading, error, refetch } = useRandomCharacter();
  const { mutate: vote } = useVoteCharacter();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  if (isLoading) return <Loading />;
  if (error) return <p>Error</p>;

  const handleVote = (type: "like" | "dislike") => {
    if (isAnimating || !data) return;

    setIsAnimating(true);
    const animation =
      type === "like"
        ? "animate__animated animate__fadeOutRight"
        : "animate__animated animate__fadeOutLeft";

    setAnimationClass(animation);

    vote(
      { id: data._id, type },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["voteHistory"] });
        },
      }
    );
  };

  const handleHistory = () => {
    navigate("/history");
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex justify-center items-center mt-10 mb-20">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/960px-Rick_and_Morty.svg.png"
          alt="Rick and Morty"
          className="w-full h-20 sm:h-40"
        />
      </div>
      <CharacterCard
        character={data}
        animationClass={animationClass}
        onAnimationEnd={() => {
          setAnimationClass("");
          refetch().finally(() => setIsAnimating(false));
        }}
      />
      <ActionButtons
        onLike={() => handleVote("like")}
        onDislike={() => handleVote("dislike")}
        onHistory={handleHistory}
      />
    </div>
  );
}
