import { ThumbsDown, ThumbsUp } from "lucide-react";
import type { CharacterResponse } from "../../api/character.api";

interface  SearchCharacterCardProps {
  character: CharacterResponse;
}

export default function SearchCharacterCard({ character }: SearchCharacterCardProps) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-xl border border-gray-100 bg-white shadow-lg hover:bg-gray-100 transition">
      <img
        src={character.image}
        alt={character.name}
        className="w-12 h-12 rounded-xl object-cover"
      />
      <div className="flex-1">
        <p className="font-medium">{character.name}</p>
        <div className="flex gap-4 mt-1 items-center">
          <div className="flex items-center gap-1  px-2 py-1">
            <ThumbsUp size={20} className="text-green-500" />
            <span className="text-black font-semibold">{character.likes}</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-1">
            <ThumbsDown size={20} className="text-red-500" />
            <span className="text-black font-semibold">{character.dislikes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
