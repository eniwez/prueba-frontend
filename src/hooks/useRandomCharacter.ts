import { useQuery } from "@tanstack/react-query";
import { API } from "../config/api";
import { useAuth } from "../context/AuthContext";

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
      const response = await fetch(`${API.CHARACTERS}/random`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        logout();
        throw new Error("Sesión expirada.");
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Error al obtener un personaje.");
      }

      return response.json();
    },
  });
}
