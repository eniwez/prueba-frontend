import { fetchClient } from "../utils/fetchClient";
import { API } from "../config/api";

export interface Character {
  _id: string;
  name: string;
  externalId: number;
  image: string;
  likes: number;
  dislikes: number;
}

export function getRandomCharacter(token: string | undefined) {
  return fetchClient<Character>(`${API.CHARACTERS}/random`, {
    method: "GET",
    token,
  });
}
