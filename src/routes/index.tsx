import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Impact } from "@/components/Impact";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roedy Rustam — Industrial Engineering × Agro × Digital" },
      {
        name: "description",
        content:
          "Portfolio Roedy Rustam — praktisi Teknik Industri yang membangun ekosistem kopi Sulawesi (Barru, Toraja, Sinjai) dan perangkat digital untuk UMKM agro.",
      },
      { property: "og:title", content: "Roedy Rustam — Agro × Digital Practitioner" },
      {
        property: "og:description",
        content:
          "Mengelola operasional kopi hulu-hilir & membangun beanhub.online dan Kafeya POS untuk UMKM agro Sulawesi Selatan.",
      },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Timeline />
      <Experience />
      <Projects />
      <Impact />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
