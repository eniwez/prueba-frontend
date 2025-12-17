import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/AuthContext";
import { getVoteHistory } from "../api/vote.api";

export interface Character {
  _id: string;
  name: string;
  image: string;
}

export interface VoteHistoryItem {
  _id: string;
  user: string;
  character: Character;
  type: "like" | "dislike";
  createdAt: string;
  updatedAt: string;
}

export function useVoteHistory() {
  const { token } = useAuth();

  return useQuery({
    queryKey: ["voteHistory"],
    staleTime: 1000 * 60 * 5,
    queryFn: () => getVoteHistory(token!),
  });
}
