import { fetchClient } from "../utils/fetchClient";
import { API } from "../config/api";

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
  return fetchClient(`${API.VOTE}/history`, {
    method: "GET",
    token,
  });
}
