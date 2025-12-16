import { useMutation } from "@tanstack/react-query";

export function useVerify() {
  return useMutation({
    mutationFn: async (token: string) => {
      const response = await fetch("http://localhost:3000/auth/verify", {
        method: "POST", 
        headers: {
          "Authorization": `Bearer ${token}`,
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
