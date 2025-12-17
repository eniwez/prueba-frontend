import { ThumbsDown, ThumbsUpIcon, History, Star } from "lucide-react";

interface ActionButtonsProps {
  onLike: () => void;
  onDislike: () => void;
  onHistory: () => void;
  onTop?: () => void;
}

export default function ActionButtons({
  onLike,
  onDislike,
  onHistory,
  onTop,
}: ActionButtonsProps) {
  return (
    <div className="mt-6 flex flex-col items-center gap-2">
      <div className="flex justify-center gap-24">
        <button
          onClick={onDislike}
          className="w-20 h-20 rounded-full bg-red-500 shadow-lg flex items-center justify-center
            hover:scale-110 transition"
        >
          <ThumbsDown size={32} className="text-white fill-white" />
        </button>

        <button
          onClick={onLike}
          className="w-20 h-20 rounded-full bg-green-500 shadow-lg flex items-center justify-center
            hover:scale-110 transition"
        >
          <ThumbsUpIcon size={32} className="text-white fill-white" />
        </button>
      </div>

      <div className="flex justify-center gap-6">
        <button
          onClick={onHistory}
          className="w-16 h-16 rounded-full bg-[#40b5cc] shadow-lg flex items-center justify-center
            hover:scale-110 transition"
        >
          <History size={28} className="text-white" />
        </button>

        <button
          onClick={onTop}
          className="w-16 h-16 rounded-full bg-[#dedb05] shadow-lg flex items-center justify-center
            hover:scale-110 transition"
        >
          <Star size={28} className="text-white" />
        </button>
      </div>
    </div>
  );
}
