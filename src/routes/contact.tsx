import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak — Roedy Rustam" },
      { name: "description", content: "Hubungi Roedy Rustam untuk diskusi kolaborasi di bidang agro, komunitas, atau pengembangan digital." },
      { property: "og:title", content: "Kontak — Roedy Rustam" },
      { property: "og:description", content: "Terbuka untuk kolaborasi di bidang agro, pemberdayaan komunitas, atau pengembangan digital." },
      { property: "og:image", content: "/og-contact.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-contact.jpg" },
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
