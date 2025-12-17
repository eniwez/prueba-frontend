import VoteItemCard from "../components/VoteItemCard";
import { useVoteHistory } from "../hooks/useVoteHistory";
import { useNavigate } from "react-router";
import Loading from "../components/Loading";
import { useAuth } from "../context/AuthContext";
import ErrorPage from "./Error";
import AppBar from "../components/AppBar";
import type { VoteHistoryItem } from "../api/vote.api";

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
      <AppBar
        title="Historial de votos"
        onBack={() => navigate(-1)}
        onLogout={handleLogOut}
      />
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
