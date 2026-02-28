import type { User } from "../models";

export const clearSession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getStoredToken = (): string | null => {
  return localStorage.getItem("token");
};

export const getStoredUser = (): User | null => {
  const user = localStorage.getItem("user");

  if (!user) return null;

  try {
    return JSON.parse(user) as User;
  } catch {
    localStorage.removeItem("user");
    return null;
  }
};