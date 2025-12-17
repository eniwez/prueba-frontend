import { ThumbsDown, ThumbsUpIcon, History } from "lucide-react";

interface ActionButtonsProps {
  onLike: () => void;
  onDislike: () => void;
  onHistory: () => void;
}

export default function ActionButtons({ onLike, onDislike, onHistory }: ActionButtonsProps) {
  return (
    <div className="mt-6 flex justify-center gap-6">
      <button
        onClick={onDislike}
        className="w-20 h-20 rounded-full bg-red-500 shadow-lg flex items-center justify-center
           hover:scale-110 transition"
      >
        <ThumbsDown size={32} className="text-white fill-white" />
      </button>

      <button
        onClick={onHistory}
        className="w-16 h-16 rounded-full bg-[#40b5cc] shadow-lg flex items-center justify-center
           hover:scale-110 transition translate-y-6"
      >
        <History size={28} className="text-white" />
      </button>

      <button
        onClick={onLike}
        className="w-20 h-20 rounded-full bg-green-500 shadow-lg flex items-center justify-center
           hover:scale-110 transition"
      >
        <ThumbsUpIcon size={32} className="text-white fill-white" />
      </button>
    </div>
  );
}
