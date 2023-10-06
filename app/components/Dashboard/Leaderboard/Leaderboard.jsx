"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Leaderboard() {
  const token = useSelector((state) => state.authUser.user).token;
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER}/getleaderboard`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => setLeaderboard(data.data));
  }, []);

  return (
    <main className="min-h-[100dvh] bg-purple-400">
      <div className=" flex flex-col px-8 py-12 gap-12 landscape:lg:w-1/2 landscape:lg:mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-4xl font-bold">LeaderBoard</h1>
          <Link href="/dashboard">
            <img src="/dashboard-white.svg" alt="home" className="w-12" />
          </Link>
        </div>
        <div className="grid">
          <div className="grid grid-cols-[0.2fr_0.6fr_0.2fr] items-center gap-4 px-2 landscape:lg:px-8 py-2 border-b-2">
            <img src="/leaderboard.svg" alt="" className="w-12" />
            <p className="text-white font-bold text-lg italic">Username</p>
            <p className="text-right text-white italic font-bold">Score</p>
          </div>
          {leaderboard &&
            leaderboard.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[0.2fr_0.6fr_0.2fr] items-center gap-4 px-2 landscape:lg:px-8 py-4"
              >
                <p className="text-white font-medium">{index}</p>
                <p className="text-white font-medium text-lg italic">
                  {item.username}
                </p>
                <p className="text-right text-white font-medium">{item.wins}</p>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
