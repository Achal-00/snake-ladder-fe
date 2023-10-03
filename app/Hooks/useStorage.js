import { useDispatch } from "react-redux";
import { LOGIN } from "../redux/reducers/authUser";
import { useEffect } from "react";

export const useStorage = () => {
  const dispatch = useDispatch();

  const userVer = () => {
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user) {
        dispatch(LOGIN(user));
      }
    }, []);
  };

  return userVer;
};
