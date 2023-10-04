"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import UserDashboard from "../components/Dashboard/UserDashboard";

export default function page() {
  const isLogged = useSelector((state) => state.authUser.user);

  return (
    <main>
      {isLogged ? (
        <UserDashboard />
      ) : (
        <div className="min-h-[100dvh] grid place-content-center">
          <div className="text-center">
            <h1>Authorization required</h1>
            <Link href="/" className="underline">
              Home
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
