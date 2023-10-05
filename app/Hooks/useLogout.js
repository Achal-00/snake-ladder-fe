import { useDispatch } from "react-redux";
import { LOGOUT } from "../redux/reducers/authUser";
import { persistor } from "../redux/store";
import { useRouter } from "next/navigation";
import { SET_WIN_COUNT } from "../redux/reducers/winCount";

export const useLogout = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const logout = () => {
    router.push("/");
    persistor.purge();
    dispatch(LOGOUT(null));
    dispatch(SET_WIN_COUNT(0));
  };

  return logout;
};
