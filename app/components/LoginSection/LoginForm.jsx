import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="landscape:lg:w-1/2 landscape:self-center landscape:justify-self-center">
      <div className="p-5 flex flex-col justify-center bg-gray-100 gap-5 rounded border-2 border-[#323232] shadow-[4px_4px_#323232]">
        <div className="my-5 text-2xl font-bold text-center text-[#323232]">
          Log In
        </div>
        <form action="" className="flex flex-col items-center gap-5">
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="w-10/12 h-10 rounded border-2 border-[#323232] bg-white shadow-[4px_4px_#323232] font-medium text-[#323232] py-1 px-3 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            name="username"
            className="w-10/12 h-10 rounded border-2 border-[#323232] bg-white shadow-[4px_4px_#323232] font-medium text-[#323232] py-1 px-3 outline-none"
          />
          <button className="my-5 w-32 h-10 rounded border-2 border-[#323232] bg-white shadow-[4px_4px_#323232] text-lg font-medium text-[#323232] active:shadow-[0px_0px_#323232] active:translate-x-1 active:translate-y-1">
            Let's go!
          </button>
        </form>
        <Link href="/signup" className="text-center font-medium underline">
          New here?
        </Link>
        <p className="text-sm text-red-400 italic font-medium text-center">
          Invalid Credentials
        </p>
      </div>
    </div>
  );
}
