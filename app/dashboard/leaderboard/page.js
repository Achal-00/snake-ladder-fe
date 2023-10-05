"use client";

import Leaderboard from "@/app/components/Dashboard/Leaderboard/Leaderboard";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function page() {
  const isLogged = useSelector((state) => state.authUser.user);
  

  return isLogged ? (
    <Leaderboard />
  ) : (
    <div className="min-h-[100dvh] grid place-content-center">
      <div className="text-center">
        <h1>Authorization required</h1>
        <Link href="/" className="underline">
          Home
        </Link>
      </div>
    </div>
  );
}
