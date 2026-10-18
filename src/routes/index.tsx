import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import {
  generateProfessionalServiceSchema,
  generatePersonSchema,
  generateProfilePageSchema,
  generateFaqSchema,
} from "@/lib/schema";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Partners } from "@/components/Partners";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { McpConsolePreview } from "@/components/McpConsolePreview";
import { UmkmAiDiagnosticTool } from "@/components/UmkmAiDiagnosticTool";
import { InteractiveScopeEstimator } from "@/components/InteractiveScopeEstimator";
import { Insights } from "@/components/Insights";
import { FaqSection, faqsData } from "@/components/FaqSection";
import { TrainingGallery } from "@/components/TrainingGallery";
import { VideoDivider } from "@/components/VideoDivider";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { RoedyAgentWidget } from "@/components/RoedyAgentWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roedy Rustam — Konsultan IT, Praktisi AI, Trainer & Konsultan UMKM Indonesia" },
      {
        name: "description",
        content:
          "Roedy Rustam adalah Konsultan IT, Praktisi AI, Trainer IT/UMKM bersertifikasi BNSP, dan Konsultan UMKM Indonesia. Terbukti melalui repositori open-source GitHub @roedyrustam (vibes-plug 77★, Centaury Engine, sinapsai, doku-gemini-mcp, API-Wilayah-2024) serta implementasi beanhub.online dan Kafeya POS.",
      },
      {
        name: "keywords",
        content:
          "Konsultan IT Indonesia, Praktisi AI Indonesia, Trainer IT, Trainer UMKM, Konsultan UMKM Indonesia, Pelatih Kewirausahaan BNSP, Roedy Rustam, vibes-plug GitHub, Centaury Engine, Model Context Protocol, MCP Server, Konsultan IT Makassar, Digitalisasi UMKM, beanhub, Kafeya POS",
      },
      {
        property: "og:title",
        content: "Roedy Rustam — Konsultan IT, Praktisi AI, Trainer & Konsultan UMKM Indonesia",
      },
      {
        property: "og:description",
        content:
          "Profil resmi Roedy Rustam: Konsultan IT, Praktisi AI, Trainer & Konsultan UMKM Indonesia. Dibuktikan dengan karya open-source GitHub (vibes-plug 77★, Centaury Engine), sertifikasi resmi BNSP, dan transformasi digital agro-kopi Sulawesi.",
      },
      { property: "og:image", content: "/roedy-rustam.jpg" },
      { property: "og:image:width", content: "800" },
      { property: "og:image:height", content: "1000" },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Roedy Rustam — Konsultan IT, Praktisi AI, Trainer & Konsultan UMKM Indonesia",
      },
      {
        name: "twitter:description",
        content:
          "Konsultan IT, Praktisi AI, Trainer & Konsultan UMKM Indonesia. Bukti karya GitHub: vibes-plug (77★), Centaury Engine, sinapsai, API-Wilayah-2024, & Sertifikasi BNSP.",
      },
      { name: "twitter:image", content: "/roedy-rustam.jpg" },
      { name: "geo.region", content: "ID-SN" },
      { name: "geo.placename", content: "Makassar, Sulawesi Selatan, Indonesia" },
      { name: "geo.position", content: "-5.1477;119.4327" },
      { name: "ICBM", content: "-5.1477, 119.4327" },
      { name: "geo.country", content: "ID" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(generatePersonSchema()),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(generateProfilePageSchema()),
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
      <section id="mcp-console" className="border-t border-white/10 bg-[#090807] py-20 md:py-28">
        <div className="content-container">
          <SectionLabel number="03" label="Protokol & Agen Otonom" />
          <div className="mt-6 max-w-3xl">
            <h2 className="font-display text-[clamp(2rem,5vw,3.8rem)] leading-[1.08] text-white">
              Interaksi nyata dengan{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                Model Context Protocol
              </span>
            </h2>
            <p className="mt-4 text-base text-stone-400 leading-relaxed">
              Uji coba simulasi pemanggilan tool standar industri (MCP v1.x) yang menghubungkan agen
              AI otonom langsung ke telemetri kebun, catatan cupping SCA, dan rute logistik kopi.
            </p>
          </div>

          <McpConsolePreview />
        </div>
      </section>

      <Reveal>
        <UmkmAiDiagnosticTool />
      </Reveal>

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

      {/* Knowledge Hub & Field Notes (Articles) */}
      <Reveal>
        <Insights />
      </Reveal>

      {/* GEO & AI Search FAQ Section */}
      <Reveal>
        <FaqSection />
      </Reveal>

      <Footer />

      {/* Interactive AI Persona Assistant (Roedy-Agent AI v2.6) */}
      <RoedyAgentWidget />
    </main>
  );
}
