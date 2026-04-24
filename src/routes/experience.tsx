import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Experience } from "@/components/Experience";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Pengalaman — Roedy Rustam" },
      { name: "description", content: "Pengalaman profesional Roedy Rustam di bidang agro operations, pemberdayaan komunitas, dan pengembangan digital." },
      { property: "og:title", content: "Pengalaman Profesional — Roedy Rustam" },
      { property: "og:description", content: "Sehati Kopi Indonesia · Pandu Talenta Digital · JURnal Celebes · Aliansi Masyarakat Adat" },
      { property: "og:image", content: "/og-experience.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-experience.jpg" },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <Nav />
      <div className="reveal">
        <Experience />
      </div>
      <Footer />
    </main>
  );
}
