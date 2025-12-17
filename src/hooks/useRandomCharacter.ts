import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/AuthContext";
import { getRandomCharacter } from "../api/character.api";

export interface Character {
  _id: string;
  name: string;
  externalId: number;
  image: string;
  likes: number;
  dislikes: number;
}
export function useRandomCharacter() {
  const { token, logout } = useAuth();

  return useQuery<Character>({
    queryKey: ["random-character"],
    enabled: !!token,
    retry: false,
    staleTime: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,

    queryFn: async () => {
      try {
        return await getRandomCharacter(token!);
      } catch (error: any) {
        if (error.message === "Unauthorized") {
          logout();
          throw new Error("Sesión expirada.");
        }
        throw error;
      }
    },
  });
}
