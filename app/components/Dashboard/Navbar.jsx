import { useLogout } from "@/app/Hooks/useLogout";
import Link from "next/link";

export default function Navbar() {
  const logout = useLogout();

  return (
    <nav className="bg-[#323232] flex items-center text-white py-4 landscape:justify-between landscape:px-12">
      <p className="hidden landscape:block italic font-bold">Snake & Ladder</p>
      <div className="flex w-full landscape:w-auto justify-evenly landscape:justify-normal landscape:gap-8">
        <div>
          <Link href="/" className="flex items-center gap-2 font-medium">
            <img src="/leaderboard.svg" alt="" className="w-5" />
            <p>Ranking</p>
          </Link>
        </div>
        <div>
          <Link href="/" className="flex items-center gap-2 font-medium">
            <img src="/homepage-white.svg" alt="" className="w-5" />
            <p>Home</p>
          </Link>
        </div>
        <div>
          <button
            className="flex items-center gap-2 font-medium"
            onClick={() => logout()}
          >
            <img src="/logout.svg" alt="" className="w-5" />
            <p>Log Out</p>
          </button>
        </div>
      </div>
    </nav>
  );
}
