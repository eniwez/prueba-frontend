import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/AuthContext";
import { API } from "../config/api";

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
    queryFn: async () => {
      const response = await fetch(`${API.VOTE}/history`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error al obtener el historial de votos");
      }

      const data = await response.json();
      return data;
    },
  });
}
