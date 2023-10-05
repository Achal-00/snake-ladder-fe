"use client";

import { useSelector } from "react-redux";
import Link from "next/link";

export default function page() {
  const isLogged = useSelector((state) => state.authUser.user);

  return isLogged ? (
    <div className="min-h-[100dvh] grid place-content-center">
      <div className="text-center">
        <h1>Under maintenance</h1>
        <Link href="/" className="underline">
          Home
        </Link>
      </div>
    </div>
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
