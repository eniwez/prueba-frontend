import { ThumbsDown, ThumbsUpIcon, History, Star } from "lucide-react";
import { ActionButton } from "../ActionButton";

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
        <ActionButton onClick={onDislike} bgColor="bg-red-500">
          <ThumbsDown size={32} className="text-white fill-white" />
        </ActionButton>

        <ActionButton onClick={onLike} bgColor="bg-green-500">
          <ThumbsUpIcon size={32} className="text-white fill-white" />
        </ActionButton>
      </div>

      <div className="flex justify-center gap-6">
        <ActionButton onClick={onHistory} bgColor="bg-[#40b5cc]" size="sm">
          <History size={28} className="text-white" />
        </ActionButton>

        <ActionButton onClick={onTop} bgColor="bg-[#dedb05]" size="sm">
          <Star size={28} className="text-white" />
        </ActionButton>
      </div>
    </div>
  );
}
