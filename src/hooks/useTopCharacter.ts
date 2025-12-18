import { useQuery } from "@tanstack/react-query";
import { getTopCharacter } from "../api/character.api";
import { useAuth } from "../context/AuthContext";

export function useTopCharacter() {
  const { token } = useAuth();
  return useQuery({
    queryKey: ["topCharacter"],
    staleTime: 0,
    refetchOnMount: "always",
    queryFn: () => getTopCharacter(token!),
  });
}
