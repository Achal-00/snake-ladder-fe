"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

export default function ContentSection() {
  const isLogged = useSelector((state) => state.authUser.user);

  return (
    <div className="landscape:self-center flex flex-col gap-4">
      <h1 className="text-white text-4xl font-bold text-center landscape:text-left">
        Snake & Ladder
      </h1>
      <p className="text-slate-200 text-center landscape:text-left landscape:lg:mr-28">
        Enjoy the classic board game of luck and strategy online. Roll the dice,
        climb ladders, and avoid snakes to reach the top first!
      </p>
      <div className="flex gap-4 justify-evenly landscape:lg:justify-start">
        <Link
          href="/quick-match"
          className="border-2 w-36 py-2 text-center rounded-md font-medium text-sm text-white hover:bg-white hover:text-purple-400"
        >
          Quick Match
        </Link>
        {isLogged ? (
          <Link
            href="/dashboard"
            className="border-2 w-36 py-2 text-center rounded-md font-medium text-sm text-white hover:bg-white hover:text-purple-400"
          >
            Dashboard
          </Link>
        ) : (
          <Link
            href="/signup"
            className="border-2 w-36 py-2 text-center rounded-md font-medium text-sm text-white hover:bg-white hover:text-purple-400"
          >
            SignUp
          </Link>
        )}
      </div>
    </div>
  );
}
