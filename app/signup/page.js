import ContentSection from "../components/signUpSection/ContentSection";
import HeroImage from "../components/signUpSection/HeroImage";

export default function page() {
  return (
    <main className="min-h-[100dvh] bg-purple-400 relative grid grid-rows-[0.5fr_0.5fr] gap-4 landscape:grid-rows-1 landscape:grid-cols-2 px-8 py-4">
      <HeroImage />
      <ContentSection />
    </main>
  );
}
