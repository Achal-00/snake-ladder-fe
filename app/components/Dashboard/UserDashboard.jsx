import DiceAnimation from "./DiceAnimation";
import GameMenu from "./GameMenu";
import Navbar from "./Navbar";

export default function UserDashboard() {
  return (
    <section className="min-h-[100dvh] bg-purple-400 flex flex-col">
      <Navbar />
      <div className="flex-grow grid grid-rows-2 landscape:grid-rows-1 landscape:grid-cols-2">
        <DiceAnimation />
        <GameMenu />
      </div>
    </section>
  );
}
