import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roedy Rustam — Socialpreneurship × Agro × Digital" },
      {
        name: "description",
        content:
          "Portfolio Roedy Rustam — praktisi Socialpreneurship yang membangun ekosistem kopi Sulawesi (Barru, Toraja, Sinjai) dan perangkat digital untuk UMKM agro.",
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
      <div className="reveal">
        <Projects />
      </div>
      <div className="reveal">
        <Skills />
      </div>
      <Footer />
    </main>
  );
}
