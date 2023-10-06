require("dotenv").config();

import { useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN } from "../redux/reducers/authUser";
import { useRouter } from "next/navigation";

export const useSignup = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const signup = async (username, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.BE_LINK}/signup`, {
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
        setIsLoading(false);
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Network Error");
      setIsLoading(false);
    }
  };

  return { signup, error, isLoading };
};
