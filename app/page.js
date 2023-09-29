import ControlSection from "./components/ControlSection/ControlSection";
import GameArea from "./components/GameArea/GameArea";

export default function Home() {
  return (
    <main className="grid gap-8 p-4 min-h-[100dvh] grid-rows-[0.6fr_0.4fr] landscape:lg:grid-rows-1 landscape:lg:grid-cols-2">
      <GameArea />
      <ControlSection />
    </main>
  );
}
