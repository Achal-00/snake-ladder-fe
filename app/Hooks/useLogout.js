import { useDispatch } from "react-redux";
import { LOGOUT } from "../redux/reducers/authUser";
import { persistor } from "../redux/store";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const logout = () => {
    router.push("/");
    persistor.purge();
    dispatch(LOGOUT(null));
  };

  return logout;
};
