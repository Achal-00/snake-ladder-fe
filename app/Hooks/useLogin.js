import { useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN } from "../redux/reducers/authUser";
import { useRouter } from "next/navigation";
import { SET_WIN_COUNT } from "../redux/reducers/winCount";

export const useLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
        setIsLoading(false);
      }

      if (response.ok) {
        dispatch(LOGIN(data));
        dispatch(SET_WIN_COUNT(data.wins));
        setIsLoading(false);
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Network Error");
      setIsLoading(false);
    }
  };

  return { login, error, isLoading };
};
