import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { voteCharacter } from "../api/vote.api";

export function useVoteCharacter() {
  const { token , logout} = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, type }: { id: string; type: "like" | "dislike" }) =>
      voteCharacter(id, type, token!, logout),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["voteHistory"] });
    },
  });
}
