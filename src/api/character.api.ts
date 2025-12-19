import { fetchClient } from "../utils/fetchClient";
import { API } from "../config/api";
import z from "zod";

export interface CharacterResponse {
  _id: string;
  name: string;
  externalId: number;
  image: string;
  likes: number;
  dislikes: number;
}


export const searchCharacterSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Ingresa al menos 2 letras para buscar" }),
});

export type SearchCharacterFormData = z.infer<typeof searchCharacterSchema>;


export function getRandomCharacter(token: string | undefined) {
  return fetchClient<CharacterResponse>(`${API.CHARACTERS_RANDOM}`, {
    method: "GET",
    token,
  });
}


export function getTopCharacter(token: string | undefined) {
  return fetchClient<CharacterResponse>(`${API.CHARACTERS_TOP}`, {
    method: "GET",
    token,
  });
}

export function searchCharacters(token: string | undefined,name: string,  onUnauthorized?: () => void) {
  return fetchClient<CharacterResponse[]>(`${API.CHARACTERS_SEARCH}/?name=${encodeURIComponent(name)}`, {
    method: "GET",
    token,
    onUnauthorized
  });
}