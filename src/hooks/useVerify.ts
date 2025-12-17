import { useMutation } from "@tanstack/react-query";
import { verifyToken } from "../api/auth.api";

export function useVerify() {
  return useMutation({
    mutationFn: (token: string) => verifyToken(token),
  });
}
