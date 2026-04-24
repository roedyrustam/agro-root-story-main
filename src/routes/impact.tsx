import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Impact } from "@/components/Impact";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Dampak — Roedy Rustam" },
      { name: "description", content: "Dampak nyata di lapangan oleh Roedy Rustam." },
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
