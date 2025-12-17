import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/AuthContext";
import { getRandomCharacter, type CharacterResponse } from "../api/character.api";


export function useRandomCharacter() {
  const { token, logout } = useAuth();

  return useQuery<CharacterResponse>({
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
