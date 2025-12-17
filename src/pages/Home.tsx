import { useState } from "react";
import "animate.css";
import Loading from "../components/Loading";
import { useAuthGuard } from "../hooks/useAuthGuard";
import { useRandomCharacter } from "../hooks/useRandomCharacter";
import CharacterCard from "../components/CharacterCard";
import ActionButtons from "../components/ActionButtons";
import { useVoteCharacter } from "../hooks/useVoteCharacter";
import { useNavigate } from "react-router";
import logoImage from "../assets/logo.png";
import backgroundHome from "../assets/background-home.jpg";
import ErrorPage from "./Error";

export default function HomePage() {
  useAuthGuard();

  const { data, isLoading, error, refetch } = useRandomCharacter();
  const { mutate: vote } = useVoteCharacter();
  const navigate = useNavigate();

  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage />;

  const handleVote = (type: "like" | "dislike") => {
    if (isAnimating || !data) return;

    setIsAnimating(true);
    const animation =
      type === "like"
        ? "animate__animated animate__fadeOutRight"
        : "animate__animated animate__fadeOutLeft";

    setAnimationClass(animation);

    vote({ id: data._id, type });
  };

  const handleHistory = () => {
    navigate("/history");
  };

  return (
    <div className="min-h-screen relative overflow-hidden ">
      <div
        className="absolute inset-0 bg-cover bg-center blur-md z-[-1]"
        style={{
          backgroundImage: `url(${backgroundHome})`,
        }}
      ></div>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex justify-center items-center mt-10 mb-20">
          <img
            src={logoImage}
            alt="Rick and Morty"
            className="w-full h-20 sm:h-40 drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 transition duration-300 ease-in-out"
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
    </div>
  );
}
