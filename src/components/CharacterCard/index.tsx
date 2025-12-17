import { useState } from "react";

interface CharacterCardProps {
  image?: string;
  name?: string;
  animationClass?: string;
  onAnimationEnd?: () => void;
}

export default function CharacterCard({
  image,
  name,
  animationClass = "",
  onAnimationEnd,
}: CharacterCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);

  return (
    <div
      className={`relative w-70 h-90 md:w-80 md:h-100 rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 mb-5 ${animationClass}`}
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

      {!showSkeleton && image && (
        <img
          key={image}
          src={image}
          alt={name}
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

      {imageLoaded && !showSkeleton && name && (
        <h2 className="absolute bottom-2 left-2 right-2 text-white text-lg font-bold drop-shadow">
          {name}
        </h2>
      )}
    </div>
  );
}
