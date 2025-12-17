import { ChevronLeftIcon, LogOut } from "lucide-react";
import VoteItemCard from "../components/VoteItemCard";
import { useVoteHistory, type VoteHistoryItem } from "../hooks/useVoteHistory";
import { useNavigate } from "react-router";
import Loading from "../components/Loading";
import { useAuth } from "../context/AuthContext";
import ErrorPage from "./Error";

export default function HistoryPage() {
  const { data, isLoading, error } = useVoteHistory();
  const navigate = useNavigate();
  const { logout } = useAuth();

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage />;

  const likesCount =
    data?.filter((vote: VoteHistoryItem) => vote.type === "like").length ?? 0;
  const dislikesCount =
    data?.filter((vote: VoteHistoryItem) => vote.type === "dislike").length ??
    0;

  const handleLogOut = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex items-center justify-between bg-white p-4 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full mr-2"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
          </button>

          <h2 className="text-xl font-bold">Historial de votos</h2>
        </div>

        <button onClick={handleLogOut} className="p-2 rounded-full">
          <LogOut className="w-6 h-6 text-red-500 cursor-pointer hover:text-red-700" />
        </button>
      </div>
      <div className="max-w-md mx-auto mt-30 px-2">
        <p className="text-sm text-black font-bold mb-4 flex items-center gap-4">
          <span>
            Total Me gusta:{" "}
            <span className="text-green-500 font-medium">{likesCount}</span>
          </span>
          <span>
            Total No me gusta:{" "}
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
