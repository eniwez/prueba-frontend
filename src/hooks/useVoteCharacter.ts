import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../context/AuthContext";
import { voteCharacter } from "../api/vote.api";

export function useVoteCharacter() {
  const { token } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, type }: { id: string; type: "like" | "dislike" }) =>
      voteCharacter(id, type, token!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["voteHistory"] });
    },
  });
}
