import Link from "next/link";
import { useSelector } from "react-redux";

export default function GameMenu() {
  const user = useSelector((state) => state.authUser.user);

  return (
    <div className="bg-gray-100 w-11/12 landscape:w-1/2 mx-auto self-start landscape:self-center shadow-[4px_4px_#323232] grid gap-4 p-4 py-8 rounded-md">
      {user && (
        <h1 className="text-right italic font-medium text-gray-500">
          {user.Username}
        </h1>
      )}
      <Link
        href="/dashboard/ai"
        className="flex items-center shadow-[4px_4px_#323232] border-2 border-[#323232] p-2 gap-2 active:shadow-[0px_0px_#323232] active:translate-x-1 active:translate-y-1"
      >
        <img src="/bot.svg" alt="" className="w-10" />
        <p className="text-[#323232] font-bold">VS AI</p>
      </Link>
      <Link
        href="/dashboard/people"
        className="flex items-center shadow-[4px_4px_#323232] border-2 border-[#323232] p-2 gap-2 active:shadow-[0px_0px_#323232] active:translate-x-1 active:translate-y-1"
      >
        <img src="/people.svg" alt="" className="w-10" />
        <p className="text-[#323232] font-bold">VS Friend</p>
      </Link>
    </div>
  );
}
