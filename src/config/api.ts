const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

export const API = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  VERIFY: `${API_BASE_URL}/auth/verify`,
  CHARACTERS: `${API_BASE_URL}/characters`,
};
