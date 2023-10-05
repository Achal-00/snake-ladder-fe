import { useDispatch } from "react-redux";
import { LOGOUT } from "../redux/reducers/authUser";
import { persistor } from "../redux/store";
import { useRouter } from "next/navigation";
import { SET_WIN_COUNT } from "../redux/reducers/winCount";
import { SET_PLAYER_ONE_SCORE } from "../redux/reducers/playerOneLogged";
import { SET_PLAYER_TWO_SCORE } from "../redux/reducers/playerTwoLogged";

export const useLogout = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const logout = () => {
    router.push("/");
    persistor.purge();
    dispatch(LOGOUT(null));
    dispatch(SET_WIN_COUNT(0));
    dispatch(SET_PLAYER_ONE_SCORE(1));
    dispatch(SET_PLAYER_TWO_SCORE(1));
  };

  return logout;
};
