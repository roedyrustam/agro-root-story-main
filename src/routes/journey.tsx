import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Timeline } from "@/components/Timeline";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Perjalanan — Roedy Rustam" },
      { name: "description", content: "Timeline naratif perjalanan Roedy Rustam dari kampus ke kebun ke kode, 2017 — sekarang." },
      { property: "og:title", content: "Timeline Perjalanan — Roedy Rustam" },
      { property: "og:description", content: "2017 — Sekarang · Dari kampus ke kebun ke kode." },
      { property: "og:image", content: "/og-journey.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-journey.jpg" },
    ],
  }),
  component: JourneyPage,
});

function JourneyPage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <Nav />
      <div className="reveal">
        <Timeline />
      </div>
      <Footer />
    </main>
  );
}
