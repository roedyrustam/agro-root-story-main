import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Experience } from "@/components/Experience";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Pengalaman — Roedy Rustam" },
      { name: "description", content: "Pengalaman profesional Roedy Rustam." },
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
