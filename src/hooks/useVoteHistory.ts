import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { getVoteHistory } from "../api/vote.api";

export function useVoteHistory() {
  const { token } = useAuth();

  return useQuery({
    queryKey: ["voteHistory"],
    staleTime: 0,
    retry: false,
    queryFn: () => getVoteHistory(token!),
  });
}
