import { ChevronLeftIcon } from "lucide-react";
import VoteItemCard from "../components/VoteItemCard";
import { useVoteHistory, type VoteHistoryItem } from "../hooks/useVoteHistory";
import { useNavigate } from "react-router";
import Loading from "../components/Loading";

export default function HistoryPage() {
  const { data, isLoading, error } = useVoteHistory();
  const navigate = useNavigate();

  if (isLoading) return <Loading />;
  if (error) return <p>Error</p>;

  const likesCount =
    data?.filter((vote: VoteHistoryItem) => vote.type === "like").length ?? 0;
  const dislikesCount =
    data?.filter((vote: VoteHistoryItem) => vote.type === "dislike").length ??
    0;

  return (
    <>
      <div className="flex items-center bg-white p-4 shadow-lg">
        <button onClick={() => navigate(-1)} className="p-2 mr-4 rounded-full ">
          <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
        </button>
        <h2 className="text-xl font-bold">Historial de votos</h2>
      </div>
      <div className="max-w-md mx-auto mt-6 px-2">
        <p className="text-sm text-gray-500 mb-4 flex items-center gap-4">
          <span>
            Likes:{" "}
            <span className="text-green-500 font-medium">{likesCount}</span>
          </span>
          <span>
            Dislikes:{" "}
            <span className="text-red-500 font-medium">{dislikesCount}</span>
          </span>
        </p>

        <div className="flex flex-col gap-3">
          {data?.map((vote: VoteHistoryItem) => (
            <VoteItemCard key={vote._id} vote={vote} />
          ))}
        </div>
      </div>
    </>
  );
}
