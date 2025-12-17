import { useMutation } from "@tanstack/react-query";
import { loginRequest, type LoginFormData } from "../api/auth.api";
import { useNavigate } from "react-router";

export function useLogin() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (body: LoginFormData) => loginRequest(body),
    onSuccess: (response, variables) => {
      alert(`Simulacion de envio de magic link al correo: ${variables.email}`);
      navigate(`/verify?token=${encodeURIComponent(response.loginToken)}`);
    },
    onError: () => {
      navigate("/error");
    },
  });
}
