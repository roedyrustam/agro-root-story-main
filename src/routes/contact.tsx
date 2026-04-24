import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak — Roedy Rustam" },
      { name: "description", content: "Hubungi Roedy Rustam untuk diskusi kolaborasi." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <Nav />
      <div className="reveal">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
