import { useState } from "react";
import "animate.css";
import Loading from "../components/Loading";
import { useAuthGuard } from "../hooks/useAuthGuard";
import { useRandomCharacter } from "../hooks/useRandomCharacter";
import CharacterCard from "../components/CharacterCard";
import ActionButtons from "../components/ActionButtons";
import { useVoteCharacter } from "../hooks/useVoteCharacter";

export default function HomePage() {
  useAuthGuard();

  const { data, isLoading, error, refetch } = useRandomCharacter();
  const { mutate: vote } = useVoteCharacter();

  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  if (isLoading) return <Loading />;
  if (error) return <p>Error</p>;

  const handleLike = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationClass("animate__animated animate__fadeOutRight");
    vote({ id: data!._id, type: "like" });
  };

  const handleDislike = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationClass("animate__animated animate__fadeOutLeft");
    vote({ id: data!._id, type: "dislike" });
  };

  const handleHistory = () => {
    alert("ir al historial del usuario");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <CharacterCard
        character={data}
        animationClass={animationClass}
        onAnimationEnd={() => {
          setAnimationClass("");
          refetch().finally(() => setIsAnimating(false));
        }}
      />
      <ActionButtons
        onLike={handleLike}
        onDislike={handleDislike}
        onHistory={handleHistory}
      />
    </div>
  );
}
