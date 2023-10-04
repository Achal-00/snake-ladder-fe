"use client";

import HeroImage from "./components/LandingSection/HeroImage";
import ContentSection from "./components/LandingSection/ContentSection";
import { useStorage } from "./Hooks/useStorage";

export default function Home() {
  // const userVer = useStorage();
  // userVer();

  return (
    <main className="min-h-[100dvh] bg-purple-400 relative grid gap-4 landscape:lg:gap-16 grid-rows-2 landscape:grid-rows-1 landscape:grid-cols-2 px-8 py-4">
      <HeroImage />
      <ContentSection />
    </main>
  );
}
