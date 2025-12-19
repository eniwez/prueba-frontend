import { useQuery } from "@tanstack/react-query";
import { getTopCharacter } from "../api/character.api";
import { useAuth } from "./useAuth";

export function useTopCharacter() {
  const { token,logout } = useAuth();
  return useQuery({
    queryKey: ["topCharacter"],
    staleTime: 0,
    refetchOnMount: "always",
    queryFn: () => getTopCharacter(token!,logout),
  });
}
