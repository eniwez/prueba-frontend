import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/AuthContext";
import { getVoteHistory } from "../api/vote.api";


export function useVoteHistory() {
  const { token } = useAuth();

  return useQuery({
    queryKey: ["voteHistory"],
    staleTime: 1000 * 60 * 5,
    queryFn: () => getVoteHistory(token!),
  });
}
