import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { API } from "../config/api";


export const loginSchema = z.object({
  email: z.email({ message: "Debes ingresar un correo válido" }),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export function useLogin() {
  return useMutation({
    mutationFn: async (data: LoginFormData) => {
      const response = await fetch(API.LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al iniciar sesión");
      }

      return response.json();
    },
  });
}
