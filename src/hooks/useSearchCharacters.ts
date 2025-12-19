import { useQuery } from "@tanstack/react-query";
import { searchCharacters } from "../api/character.api";
import { useAuth } from "./useAuth";

export function useSearchCharacters(name: string) {
  const { token, logout } = useAuth();
  return useQuery({
    queryKey: ["searchCharacters", name],
    queryFn: () => searchCharacters(token ?? "", name, logout),
    enabled: name.length >= 2,
    staleTime: 0,
    retry: false,
  });
}
