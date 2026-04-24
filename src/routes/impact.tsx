import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Impact } from "@/components/Impact";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Dampak — Roedy Rustam" },
      { name: "description", content: "Dampak nyata di 5 wilayah Sulawesi Selatan: Barru, Toraja, Enrekang, Sinjai, dan Makassar." },
      { property: "og:title", content: "Dampak Nyata di Lapangan — Roedy Rustam" },
      { property: "og:description", content: "5 wilayah dampingan di Sulawesi Selatan — transparansi di hulu, kualitas di hilir." },
      { property: "og:image", content: "/og-impact.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-impact.jpg" },
    ],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <Nav />
      <div className="reveal">
        <Impact />
      </div>
      <Footer />
    </main>
  );
}
