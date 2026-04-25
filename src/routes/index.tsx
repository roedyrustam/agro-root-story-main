import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Partners } from "@/components/Partners";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Impact } from "@/components/Impact";
import { TrainingGallery } from "@/components/TrainingGallery";
import { Insights } from "@/components/Insights";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roedy Rustam — Sociopreneur × Agro × Digital" },
      {
        name: "description",
        content:
          "Portfolio Roedy Rustam — Trainer UMKM & Konsultan Desa yang membangun ekosistem kopi Sulawesi dan perangkat digital untuk pemberdayaan agro.",
      },
      { property: "og:title", content: "Roedy Rustam — Sociopreneur × Agro × Digital" },
      {
        property: "og:description",
        content:
          "Trainer UMKM, Konsultan Desa, dan pengembang beanhub.online untuk ekosistem kopi Sulawesi Selatan.",
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
        <Partners />
      </div>
      <div className="reveal">
        <About />
      </div>
      <div className="reveal">
        <Timeline />
      </div>
      <div className="reveal">
        <Experience />
      </div>
      <div className="reveal">
        <Projects />
      </div>
      <div className="reveal">
        <Services />
      </div>
      <div className="reveal">
        <Impact />
      </div>
      <div className="reveal">
        <TrainingGallery />
      </div>
      <div className="reveal">
        <Insights />
      </div>
      <div className="reveal">
        <Skills />
      </div>
      <Footer />
    </main>
  );
}
