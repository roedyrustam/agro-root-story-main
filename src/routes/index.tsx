import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import {
  generateProfessionalServiceSchema,
  generatePersonSchema,
  generateFaqSchema,
} from "@/lib/schema";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Partners } from "@/components/Partners";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { McpConsolePreview } from "@/components/McpConsolePreview";
import { InteractiveScopeEstimator } from "@/components/InteractiveScopeEstimator";
import { FaqSection, faqsData } from "@/components/FaqSection";
import { TrainingGallery } from "@/components/TrainingGallery";
import { VideoDivider } from "@/components/VideoDivider";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roedy Rustam — AI Systems & Agentic Developer × Agro-Tech Sociopreneur" },
      {
        name: "description",
        content:
          "Roedy Rustam adalah AI Systems Architect & Konsultan Agro-Industri yang merancang Model Context Protocol (MCP v1.x), orkestrasi multi-agen otonom, dan digitalisasi rantai pasok kopi hulu-hilir di Sulawesi.",
      },
      { property: "og:title", content: "Roedy Rustam — AI Systems & Agentic Developer × Agro-Tech Sociopreneur" },
      {
        property: "og:description",
        content:
          "AI Systems Architect, pengembang MCP Server & Multi-Agent Swarms terintegrasi dengan Beanhub dan ekosistem kopi Sulawesi.",
      },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.jpg" },
      { name: "geo.region", content: "ID-SN" },
      { name: "geo.placename", content: "Makassar, Sulawesi Selatan" },
      { name: "geo.position", content: "-5.1477;119.4327" },
      { name: "ICBM", content: "-5.1477, 119.4327" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(generatePersonSchema()),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(generateProfessionalServiceSchema()),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(generateFaqSchema(faqsData)),
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

      {/* Interactive MCP Tool Console Section */}
      <section id="mcp-console" className="border-t border-border bg-cream-soft py-20 md:py-28">
        <div className="content-container">
          <SectionLabel number="03" label="Protokol & Agen Otonom" />
          <div className="mt-6 max-w-3xl">
            <h2 className="font-display text-[clamp(2rem,5vw,3.8rem)] leading-[1.08] text-coffee">
              Interaksi nyata dengan <span className="italic text-terracotta">Model Context Protocol</span>
            </h2>
            <p className="mt-4 text-base text-coffee/70 leading-relaxed">
              Uji coba simulasi pemanggilan tool standar industri (MCP v1.x) yang menghubungkan agen AI otonom langsung ke telemetri kebun, catatan cupping SCA, dan rute logistik kopi.
            </p>
          </div>

          <McpConsolePreview />
        </div>
      </section>
      
      <VideoDivider />
      
      <Reveal>
        <Projects />
      </Reveal>

      {/* Interactive Client Scope & Architecture Estimator */}
      <Reveal>
        <InteractiveScopeEstimator />
      </Reveal>
      
      <Reveal>
        <TrainingGallery />
      </Reveal>

      {/* GEO & AI Search FAQ Section */}
      <Reveal>
        <FaqSection />
      </Reveal>
      
      <Footer />
    </main>
  );
}
