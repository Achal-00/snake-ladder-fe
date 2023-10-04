import ControlSection from "@/app/components/Dashboard/AI/ControlSection/ControlSection";
import GameArea from "@/app/components/Dashboard/AI/GameArea/GameArea";

export default function page() {
  return (
    <main className="grid gap-8 p-4 min-h-[100dvh] grid-rows-[1fr_0.5fr] landscape:grid-rows-1 landscape:grid-cols-2">
      <GameArea />
      <ControlSection />
    </main>
  );
}
