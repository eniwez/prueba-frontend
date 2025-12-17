import type { VoteHistoryItem } from "../../hooks/useVoteHistory";

export default function VoteItemCard({ vote }: { vote: VoteHistoryItem }) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-xl bg-white shadow-lg hover:bg-gray-100 transition">
      <img
        src={vote.character.image}
        alt={vote.character.name}
        className="w-12 h-12 rounded-xl object-cover"
      />
      <div className="flex-1">
        <p className="font-medium">{vote.character.name}</p>
        <p className="text-sm font-semibold   uppercase">
          <span
            className={vote.type === "like" ? "text-green-500" : "text-red-500"}
          >
            {vote.type}
          </span>
        </p>
        <p className="text-xs text-gray-400">
          {new Date(vote.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
