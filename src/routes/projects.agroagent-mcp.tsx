import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { generateSoftwareAppSchema, generateBreadcrumbSchema } from "@/lib/schema";
import agroagentImg from "../assets/project-agroagent-mcp.jpg";
import { Terminal, Cpu, Database, ShieldCheck, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projects/agroagent-mcp")({
  head: () => ({
    meta: [
      { title: "AgroAgent MCP Server — Model Context Protocol · Roedy Rustam" },
      {
        name: "description",
        content:
          "AgroAgent MCP Server: Implementasi standar Model Context Protocol (MCP v1.x) untuk menghubungkan agen AI otonom dengan telemetri kebun kopi dan rantai pasok agro di Sulawesi.",
      },
      { property: "og:title", content: "AgroAgent MCP Server — Model Context Protocol for Agro Data" },
      {
        property: "og:description",
        content:
          "Server MCP yang menghubungkan LLM agents (Claude Desktop, Cursor, Gemini Live) langsung dengan database panen kopi dan koperasi tani.",
      },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:type", content: "article" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          generateSoftwareAppSchema({
            name: "AgroAgent MCP Server",
            description:
              "Model Context Protocol (MCP v1.x) server connecting autonomous AI agents to agricultural telemetry, coffee cupping, and supply chain ERP data.",
            url: "https://roedyrustam.pages.dev/projects/agroagent-mcp",
          })
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          generateBreadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Projects", item: "/#projects" },
            { name: "AgroAgent MCP", item: "/projects/agroagent-mcp" },
          ])
        ),
      },
    ],
  }),
  component: AgroAgentMcpPage,
});

function AgroAgentMcpPage() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 border-b border-border bg-cream-soft">
        <div className="grain absolute inset-0 opacity-40" />
        <div className="content-container relative">
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-coffee/60 hover:text-terracotta transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Kembali ke Karya Digital
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="rounded-full border border-terracotta/30 bg-terracotta/10 px-4 py-1 font-mono text-xs uppercase tracking-widest text-terracotta font-semibold">
              MCP Protocol v1.x
            </span>
            <span className="rounded-full border border-coffee/10 bg-coffee/5 px-3 py-1 font-mono text-xs uppercase tracking-widest text-coffee/60">
              Edge Runtime Ready
            </span>
            <span className="rounded-full border border-coffee/10 bg-coffee/5 px-3 py-1 font-mono text-xs uppercase tracking-widest text-coffee/60">
              Tahun: 2026
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.5rem,6vw,4.8rem)] leading-[1.08] text-coffee max-w-4xl">
            AgroAgent MCP Server: <br />
            <span className="italic text-terracotta">Menghubungkan Agen AI dengan Data Kebun Riil.</span>
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-coffee/75 max-w-3xl">
            Implementasi server berstandar open <strong>Model Context Protocol (MCP)</strong> yang memungkinkan asisten AI masa depan melakukan *tool discovery*, membaca telemetri panen kopi, dan memvalidasi lot biji secara terenkripsi langsung dari edge server di Sulawesi.
          </p>

          <div className="mt-12 overflow-hidden rounded-3xl border border-coffee/15 shadow-2xl">
            <img
              src={agroagentImg}
              alt="Diagram arsitektur AgroAgent MCP Server"
              className="w-full h-auto object-cover max-h-[520px]"
            />
          </div>
        </div>
      </section>

      {/* Deep Dive Architecture */}
      <section className="py-24 bg-background">
        <div className="content-container">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-mustard">
                01 · Latar Belakang & Masalah
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-coffee leading-tight">
                Mengapa Ekosistem Pertanian Membutuhkan MCP Server?
              </h2>
              <p className="text-base leading-relaxed text-coffee/75">
                Model Bahasa Besar (LLM) umumnya terisolasi dari database riil di perkebunan rakyat. Petani, konsultan desa, dan roaster membutuhkan asisten AI yang tidak sekadar berhalusinasi, melainkan memiliki akses langsung ke data telemetri, kelembaban biji kopi (*moisture*), elevasi GPS, dan histori transaksi koperasi.
              </p>
              <p className="text-base leading-relaxed text-coffee/75">
                Dengan mengadopsi spesifikasi **Model Context Protocol (MCP v1.x)**, AgroAgent menyediakan lapisan interoperabilitas standar yang kompatibel dengan Claude Desktop, Cursor AI, maupun sub-agent swarms otonom.
              </p>

              <div className="rounded-2xl border border-coffee/10 bg-cream-soft p-6 space-y-3">
                <h3 className="font-mono text-xs uppercase tracking-wider text-terracotta font-bold">
                  Standar Protokol
                </h3>
                <ul className="space-y-2 text-sm text-coffee/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sage" /> JSON-RPC 2.0 Transport (Stdio & SSE/HTTP)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sage" /> Dynamic Tool Registration & Strict Type-Safety
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sage" /> Read-Only Resource Endpoints (`agro://batches/`)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sage" /> Prompts Templates untuk Analisis Mutu Panen
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-coffee/15 bg-coffee p-8 text-cream shadow-xl">
                <div className="flex items-center justify-between border-b border-cream/10 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-mustard" />
                    <span className="font-mono text-xs text-cream/80">agroagent-mcp-schema.json</span>
                  </div>
                  <span className="font-mono text-[10px] text-sage bg-sage/10 px-2.5 py-1 rounded-full border border-sage/20">
                    Active Specification
                  </span>
                </div>

                <div className="space-y-6 font-mono text-xs">
                  <div>
                    <div className="text-mustard mb-2">// Definisi Tool Schema Terdaftar</div>
                    <pre className="max-h-72 overflow-x-auto rounded-xl bg-black/40 p-4 leading-relaxed text-cream/90">
{`{
  "name": "get_coffee_lot_telemetry",
  "description": "Mengambil parameter fisika & sensorik lot kopi berdasarkan ID batch.",
  "parameters": {
    "type": "object",
    "properties": {
      "batch_id": {
        "type": "string",
        "description": "Kode lot unik, contoh: BRU-TYP-2026-08A"
      },
      "include_cupping_notes": {
        "type": "boolean",
        "default": true
      }
    },
    "required": ["batch_id"]
  }
}`}
                    </pre>
                  </div>

                  <div>
                    <div className="text-sage mb-2">// Contoh Output Eksekusi ke Context AI</div>
                    <pre className="max-h-64 overflow-x-auto rounded-xl bg-black/40 p-4 leading-relaxed text-sage/90">
{`{
  "lot_id": "BRU-TYP-2026-08A",
  "origin": "Dusun Bulo-Bulo, Barru",
  "elevation": "1250 masl",
  "producer": "Koperasi Tani Harapan Sehati",
  "moisture_content": 10.8,
  "sca_score": 87.5,
  "flavor_notes": ["Bergamot", "Brown Sugar", "Dark Plum"],
  "digital_signature": "0x4a9b...7c1e",
  "status": "READY_FOR_DISPATCH"
}`}
                    </pre>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-cream/10 pt-4 text-[11px] font-mono text-cream/50">
                  <span>Latency: ~35ms via Cloudflare Edge</span>
                  <span>Zero-Data Leakage Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Specifications Grid */}
      <section className="py-20 bg-cream-soft border-t border-border">
        <div className="content-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
              02 · Kapabilitas Kunci
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-coffee">
              Kedaulatan Data & Kecepatan Edge
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Database className="h-6 w-6 text-terracotta" />,
                title: "Interoperabilitas Universal",
                desc: "Dapat dihubungkan dengan berbagai runtime LLM modern: Claude Desktop, Cursor AI, Ollama lokal, maupun agen cloud.",
              },
              {
                icon: <Cpu className="h-6 w-6 text-mustard" />,
                title: "Optimasi Token & Cache",
                desc: "Skema output diformat secara deterministik untuk memaksimalkan KV-cache prefix hit rates hingga di atas 85%.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-sage" />,
                title: "Kedaulatan Data Petani",
                desc: "Data sensitif harga dasar dan identitas petani dilindungi enkripsi berbasis izin, mencegah eksploitasi oleh perantara.",
              },
            ].map((f, i) => (
              <div key={i} className="rounded-3xl border border-coffee/10 bg-cream p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream-soft mb-6">
                  {f.icon}
                </div>
                <h3 className="font-display text-xl text-coffee mb-3">{f.title}</h3>
                <p className="text-sm leading-relaxed text-coffee/70">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Next Navigation */}
          <div className="mt-20 flex flex-wrap items-center justify-between border-t border-coffee/10 pt-10">
            <Link
              to="/projects/beanhub"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-coffee/60 hover:text-terracotta transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Beanhub.online
            </Link>

            <Link
              to="/projects/agent-swarm"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-terracotta hover:underline font-bold"
            >
              Proyek Berikutnya: Multi-Agent Swarm <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
