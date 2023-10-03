import { useDispatch } from "react-redux";
import { LOGOUT } from "../redux/reducers/authUser";

export const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(LOGOUT(null));
  };

  return logout;
};
