import { useNavigate } from "react-router-dom";
import { clearSession } from "../services/session.service";


export const useLogout = () => {

  const navigate = useNavigate();

  const logout = () => {
    clearSession();
    navigate("/login");
  }
  return { logout };
}