import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Timeline } from "@/components/Timeline";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Perjalanan — Roedy Rustam" },
      { name: "description", content: "Timeline perjalanan naratif Roedy Rustam." },
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
