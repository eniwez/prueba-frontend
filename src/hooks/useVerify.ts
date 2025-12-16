import { useMutation } from "@tanstack/react-query";
import { API } from "../config/api";

export function useVerify() {
  return useMutation({
    mutationFn: async (token: string) => {
      const response = await fetch(API.VERIFY, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al verificar el token");
      }

      return response.json();
    },
  });
}
