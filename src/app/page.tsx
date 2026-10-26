import { Bonus } from "@/components/Bonus";
import { Contact } from "@/components/Contact";
import { Divider } from "@/components/Divider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { MobileBar } from "@/components/MobileBar";
import { Rules } from "@/components/Rules";
import { Tariffs } from "@/components/Tariffs";

export default function HomePage() {
  return (
    <div className="root">
      <Header />
      <main id="main">
        <Hero />
        <Divider label="SECTOR 01 // PRICE" />
        <Tariffs />
        <Divider label="SECTOR 02 // BONUS" flip delay="-4s" sparkDelay="-1s" />
        <Bonus />
        <Divider label="SECTOR 03 // CODE" delay="-8s" sparkDelay="-2s" />
        <Rules />
        <Divider label="SECTOR 04 // CONNECT" flip delay="-2s" sparkDelay="-1.6s" />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
      <JsonLd />
    </div>
  );
}
