import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { generateProfessionalServiceSchema } from "@/lib/schema";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Partners } from "@/components/Partners";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { TrainingGallery } from "@/components/TrainingGallery";
import { VideoDivider } from "@/components/VideoDivider";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(generateProfessionalServiceSchema()),
      },
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
      
      <Reveal>
        <Partners />
      </Reveal>
      
      <Reveal>
        <Services />
      </Reveal>
      
      <VideoDivider />
      
      <Reveal>
        <Projects />
      </Reveal>
      
      <Reveal>
        <TrainingGallery />
      </Reveal>
      
      <Footer />
    </main>
  );
}
