import { useMutation } from "@tanstack/react-query";
import { loginRequest, type LoginFormData } from "../api/auth.api";

export function useLogin() {
  return useMutation({
    mutationFn: (body: LoginFormData) => loginRequest(body),
  });
}
