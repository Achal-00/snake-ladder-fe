"use client";
import Link from "next/link";
import { useLogout } from "../Hooks/useLogout";
import { useStorage } from "../Hooks/useStorage";
import { useSelector } from "react-redux";

export default function page() {
  const userVer = useStorage();
  const logout = useLogout();
  userVer();
  const isLogged = useSelector((state) => state.authUser.user);

  return (
    <main>
      {isLogged ? (
        <div>
          <h1>Dashboard</h1>
          <button onClick={() => logout()}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Authorization required</h1>
          <Link href="/">Home</Link>
        </div>
      )}
    </main>
  );
}
