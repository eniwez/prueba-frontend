import { useState } from "react";
import type { Character } from "../../hooks/useRandomCharacter";



interface CharacterCardProps {
  character: Character | undefined;
  onAnimationEnd?: () => void;
  animationClass: string;
}

export default function CharacterCard({ character, onAnimationEnd, animationClass }:CharacterCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);

  return (
    <div
      className={`relative w-70 h-90 rounded-lg overflow-hidden ${animationClass}`}
      onAnimationEnd={() => {
        setShowSkeleton(true);
        setImageLoaded(false);
        onAnimationEnd?.();
        setShowSkeleton(false);
      }}
    >
      {(!imageLoaded || showSkeleton) && (
        <div className="flex items-center justify-center h-full">
          <span className="loader"></span>
        </div>
      )}

      {!showSkeleton && (
        <img
          key={character?.image}
          src={character?.image}
          alt={character?.name}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
          className={`
            w-full h-full object-cover
            ${imageLoaded ? "opacity-100" : "opacity-0"}
            transition-opacity duration-300
          `}
        />
      )}

      {imageLoaded && !showSkeleton && (
        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/80 to-transparent" />
      )}

      {imageLoaded && !showSkeleton && (
        <h2 className="absolute bottom-2 left-2 right-2 text-white text-lg font-bold drop-shadow">
          {character?.name}
        </h2>
      )}
    </div>
  );
}
