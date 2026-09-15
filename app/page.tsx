import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { BrandStrip } from "@/components/BrandStrip";
import { CraftDetails } from "@/components/CraftDetails";
import { CatalogueLibrary } from "@/components/CatalogueLibrary";
import { CatalogueViewer } from "@/components/CatalogueViewer";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <BrandStrip />
        <CraftDetails />
        <CatalogueLibrary />
      </main>
      <CatalogueViewer />
      <Footer />
    </>
  );
}
