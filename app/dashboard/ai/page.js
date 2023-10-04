"use client";

import ControlSection from "@/app/components/Dashboard/AI/ControlSection/ControlSection";
import GameArea from "@/app/components/GameArea/GameArea";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function page() {
  const isLogged = useSelector((state) => state.authUser.user);

  return isLogged ? (
    <main className="grid gap-8 p-4 min-h-[100dvh] grid-rows-[1fr_0.5fr] landscape:grid-rows-1 landscape:grid-cols-2">
      <GameArea />
      <ControlSection />
    </main>
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
