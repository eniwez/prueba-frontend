import { ThumbsDown, ThumbsUpIcon, History, Star, Search } from "lucide-react";
import { ActionButton } from "../ActionButton";

interface ActionButtonsProps {
  onLike: () => void;
  onDislike: () => void;
  onHistory: () => void;
  onTop?: () => void;
  onSearch?: () => void;
}

export default function ActionButtons({
  onLike,
  onDislike,
  onHistory,
  onTop,
  onSearch
}: ActionButtonsProps) {
  return (
    <div className="mt-6 flex flex-col items-center gap-2">
      <div className="flex justify-center gap-24">
        <ActionButton onClick={onDislike} bgColor="bg-red-500">
          <ThumbsDown size={32} className="text-white fill-white" />
        </ActionButton>

        <ActionButton onClick={onLike} bgColor="bg-green-500">
          <ThumbsUpIcon size={32} className="text-white fill-white" />
        </ActionButton>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={onHistory}
          className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-100 shadow-lg hover:scale-110 transition bg-white"
        >
          <History size={22} className="text-blue-500 " />
          Historial
        </button>

        <button
          onClick={onSearch}
          className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-100 shadow-lg hover:scale-110 transition bg-white"
        >
          <Search size={22} />
          Buscar
        </button>

        <button
          onClick={onTop}
          className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-100 shadow-lg hover:scale-110 transition bg-white"
        >
          <Star size={22} className="text-yellow-500 fill-yellow-400" />
          Top
        </button>
      </div>
    </div>
  );
}
