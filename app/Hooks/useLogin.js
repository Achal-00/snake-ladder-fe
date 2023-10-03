import { useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN } from "../redux/reducers/authUser";

export const useLogin = () => {
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
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(LOGIN(data));
        setIsLoading(false);
      }
    } catch (err) {
      setError("Network Error");
      setIsLoading(false);
    }
  };

  return { login, error, isLoading };
};
