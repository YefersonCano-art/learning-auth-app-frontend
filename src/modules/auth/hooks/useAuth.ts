import { getStoredToken } from "../services/session.service";

export const useAuth = () => {
  const token = getStoredToken();

  return {
    isAuthenticated: !!token,
  };
};