const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

export const API = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  VERIFY: `${API_BASE_URL}/auth/verify`,
  CHARACTERS_RANDOM: `${API_BASE_URL}/characters/random`,
  CHARACTERS_TOP: `${API_BASE_URL}/characters/top`,
  CHARACTERS_SEARCH: `${API_BASE_URL}/characters/search`,
  VOTE: `${API_BASE_URL}/votes`,
  VOTE_HISTORY: `${API_BASE_URL}/votes/history`,
};
