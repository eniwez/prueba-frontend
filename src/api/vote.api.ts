import { fetchClient } from "../utils/fetchClient";
import { API } from "../config/api";

export interface Character {
  _id: string;
  name: string;
  image: string;
}

export interface VoteHistoryItem {
  _id: string;
  user: string;
  character: Character;
  type: "like" | "dislike";
  createdAt: string;
  updatedAt: string;
}

export function voteCharacter(
  id: string,
  type: "like" | "dislike",
  token: string | undefined
) {
  return fetchClient(`${API.VOTE}/${id}/${type}`, {
    method: "POST",
    token,
  });
}

export function getVoteHistory(token: string | undefined) {
  return fetchClient<VoteHistoryItem[]>(`${API.VOTE_HISTORY}`, {
    method: "GET",
    token,
  });
}
