import { fetchClient } from "../utils/fetchClient";
import { API } from "../config/api";

export interface CharacterResponse {
  _id: string;
  name: string;
  externalId: number;
  image: string;
  likes: number;
  dislikes: number;
}

export interface TopCharacterResponse {
  _id: string;
  name: string;
  externalId: number;
  image: string;
  likes: number;
  dislikes: number;
}

export function getRandomCharacter(token: string | undefined) {
  return fetchClient<CharacterResponse>(`${API.CHARACTERS}/random`, {
    method: "GET",
    token,
  });
}


export function getTopCharacter(token: string | undefined) {
  return fetchClient<TopCharacterResponse>(`${API.CHARACTERS}/top`, {
    method: "GET",
    token,
  });
}