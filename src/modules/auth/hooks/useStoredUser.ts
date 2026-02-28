import { getStoredUser } from "../services/session.service";

export const useStoredUser = () => {
  const user = getStoredUser();

  return { user };
};
