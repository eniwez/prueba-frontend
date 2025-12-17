import { fetchClient } from "../utils/fetchClient";
import { API } from "../config/api";
import z from "zod";

export const loginSchema = z.object({
  email: z.email({ message: "Debes ingresar un correo válido" }),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export interface LoginResponse {
  loginToken: string;
  expiresIn: string;
}

export function loginRequest(body: LoginFormData) {
  return fetchClient<LoginResponse>(API.LOGIN, {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export interface VerifyResponse {
  accessToken: string;
  expiresIn: string;
}

export function verifyToken(token: string) {
  return fetchClient<VerifyResponse>(`${API.VERIFY}`, {
    method: "POST",
    token,
  });
}
