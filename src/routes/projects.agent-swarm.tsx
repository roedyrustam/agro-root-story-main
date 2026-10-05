import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { generateSoftwareAppSchema, generateBreadcrumbSchema } from "@/lib/schema";
import swarmImg from "../assets/project-agent-swarm.jpg";
import { Bot, Network, Workflow, CheckCircle2, ArrowLeft, ArrowRight, Gauge, Cpu } from "lucide-react";

export const Route = createFileRoute("/projects/agent-swarm")({
  head: () => ({
    meta: [
      { title: "Multi-Agent Swarm Orchestrator — Autonomous AI · Roedy Rustam" },
      {
        name: "description",
        content:
          "Multi-Agent Swarm Orchestrator: Sistem orkestrasi agen otonom untuk inspeksi mutu biji kopi, rute logistik dataran tinggi, dan pelaporan terpadu koperasi tani di Sulawesi.",
      },
      { property: "og:title", content: "Multi-Agent Swarm Orchestrator — Autonomous AI for Agro" },
      {
        property: "og:description",
        content:
          "Kolaborasi 4 sub-agen otonom berbasis grafik keputusan untuk transparansi dan otomasi rantai pasok kopi dari kebun ke roastery.",
      },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:type", content: "article" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          generateSoftwareAppSchema({
            name: "Multi-Agent Swarm Orchestrator",
            description:
              "Autonomous multi-agent orchestration pipeline coordinating coffee quality inspection, SCA cupping evaluation, and highland logistics routing.",
            url: "https://roedyrustam.pages.dev/projects/agent-swarm",
          })
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          generateBreadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Projects", item: "/#projects" },
            { name: "Agent Swarm", item: "/projects/agent-swarm" },
          ])
        ),
      },
    ],
  }),
  component: AgentSwarmPage,
});

function AgentSwarmPage() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 border-b border-white/10 bg-[#090807]">
        <div className="grain absolute inset-0 opacity-40" />
        <div className="content-container relative">
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-stone-400 hover:text-amber-400 transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Kembali ke Karya Digital
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 font-mono text-xs uppercase tracking-widest text-amber-400 font-semibold">
              Multi-Agent AI
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-widest text-stone-400">
              LangGraph & Telemetry
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-widest text-stone-400">
              Tahun: 2026
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.5rem,6vw,4.8rem)] leading-[1.08] text-white max-w-4xl font-bold">
            Multi-Agent Swarm Orchestrator: <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">Otomasi Cerdas Rantai Pasok Pegunungan.</span>
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-stone-300 max-w-3xl">
            Arsitektur kolaborasi multi-agen terdistribusi yang membagi tugas rantai pasok ke dalam 4 spesialis otonom: verifikasi telemetri panen, evaluasi sensori kopi standar SCA, kalkulasi rute logistik dataran tinggi, dan rekonsiliasi kas BUMDes.
          </p>

          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src={swarmImg}
              alt="Visualisasi Multi-Agent Swarm Orchestrator"
              className="w-full h-auto object-cover max-h-[520px]"
            />
          </div>
        </div>
      </section>

      {/* Swarm Architecture Deep Dive */}
      <section className="py-24 bg-background">
        <div className="content-container">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-mustard">
              01 · Arsitektur Topologi Swarm
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-coffee leading-tight">
              4 Sub-Agen Kolaboratif dengan Siklus Verifikasi Mandiri
            </h2>
            <p className="mt-4 text-base leading-relaxed text-coffee/70">
              Bukan sekadar satu prompt monolitik, melainkan jaringan agen spesialis dengan *state graph* bersama yang memastikan tidak ada pesanan kopi yang dikirim sebelum lolos uji mutu dan kesiapan rute cuaca.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                id: "Agent-01",
                name: "Harvest Telemetry Scout",
                role: "Pengawas Mutu Kebun",
                tasks: [
                  "Memonitor data sensor kelembaban tanah dan kadar air biji di stasiun penjemuran.",
                  "Mendeteksi anomali fermentasi anaerobik di dataran tinggi Barru & Toraja.",
                  "Membuat paspor digital (*provenance record*) untuk setiap karung gabah.",
                ],
                badge: "Data Ingestion",
                accent: "border-terracotta/30 bg-terracotta/5",
              },
              {
                id: "Agent-02",
                name: "SCA Sensory Analyst",
                role: "Penilai Skor Rasa Digital",
                tasks: [
                  "Mengonversi catatan cupping manual q-grader menjadi parameter digital SCA CVA.",
                  "Menganalisis profil rasa dominan (notes, aftertaste, keasaman, clean cup).",
                  "Menyocokkan spesifikasi lot dengan preferensi roastery pemesan.",
                ],
                badge: "Quality Engine",
                accent: "border-mustard/30 bg-mustard/5",
              },
              {
                id: "Agent-03",
                name: "Highland Logistics Router",
                role: "Perute Logistik Dataran Tinggi",
                tasks: [
                  "Menghitung estimasi waktu tempuh dari pegunungan ke pelabuhan/bandara Makassar.",
                  "Memitigasi risiko cuaca hujan lebat dan longsor jalur poros Toraja-Enrekang.",
                  "Mengatur jadwal penjemputan armada dengan pendingin kelembaban stabil.",
                ],
                badge: "Routing & Fleet",
                accent: "border-sage/30 bg-sage/5",
              },
              {
                id: "Agent-04",
                name: "Coop Escrow & Ledger Guard",
                role: "Rekonsiliasi Kas BUMDes",
                tasks: [
                  "Memvalidasi bukti transfer pembayaran dari pembeli ke kas rekening koperasi.",
                  "Menghitung otomatis bagi hasil petani secara transparan sesuai berat bersih.",
                  "Mengirimkan notifikasi ringkasan WhatsApp ke pengurus desa dan petani.",
                ],
                badge: "Settlement",
                accent: "border-coffee/20 bg-coffee/5",
              },
            ].map((ag) => (
              <div key={ag.id} className={`rounded-3xl border ${ag.accent} p-8 shadow-sm transition-all hover:shadow-xl`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-coffee/60 font-semibold">
                    {ag.id}
                  </span>
                  <span className="rounded-full bg-cream border border-coffee/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-coffee font-medium">
                    {ag.badge}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-coffee mb-1">{ag.name}</h3>
                <p className="font-mono text-xs text-terracotta mb-6 font-semibold">{ag.role}</p>
                <ul className="space-y-3 text-sm leading-relaxed text-coffee/75">
                  {ag.tasks.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-sage shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real World Impact */}
      <section className="py-20 bg-[#0c0a08] text-stone-200 border-t border-white/10">
        <div className="content-container">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
                02 · Dampak Operasional
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-white font-bold leading-tight">
                Efisiensi Koordinasi Tanpa Kehilangan Sentuhan Manusia
              </h2>
              <p className="text-base leading-relaxed text-stone-300">
                Swarm ini bukan untuk menggantikan peran petani atau q-grader, melainkan memangkas 70% waktu birokrasi penyiapan dokumen ekspor dan koordinasi armada dari pelosok pegunungan ke kota besar.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-amber-400 pl-4">
                  <div className="font-display text-3xl text-amber-400 font-bold">3.4x</div>
                  <div className="font-mono text-xs text-stone-400 mt-1 uppercase tracking-wider">Percepatan Dispatch</div>
                </div>
                <div className="border-l-2 border-emerald-400 pl-4">
                  <div className="font-display text-3xl text-emerald-400 font-bold">100%</div>
                  <div className="font-mono text-xs text-stone-400 mt-1 uppercase tracking-wider">Audit Traceability</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-white/10 bg-[#14110e]/90 p-8 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-3 mb-4 font-mono text-xs text-amber-400 font-semibold">
                  <Workflow className="h-4 w-4" />
                  <span>State Transition Graph</span>
                </div>
                <div className="space-y-4 font-mono text-xs text-stone-200">
                  <div className="rounded-xl bg-black/40 border border-white/5 p-3 flex items-center justify-between">
                    <span>1. HARVEST_LOGGED</span>
                    <span className="text-emerald-400 font-bold">Passed</span>
                  </div>
                  <div className="rounded-xl bg-black/40 border border-white/5 p-3 flex items-center justify-between">
                    <span>2. SENSORY_SCORED (≥84 SCA)</span>
                    <span className="text-emerald-400 font-bold">Grade 1 Verified</span>
                  </div>
                  <div className="rounded-xl bg-black/40 border border-white/5 p-3 flex items-center justify-between">
                    <span>3. LOGISTICS_DISPATCHED</span>
                    <span className="text-amber-400 font-bold">In Transit</span>
                  </div>
                  <div className="rounded-xl bg-black/40 border border-white/5 p-3 flex items-center justify-between">
                    <span>4. BUMDES_SETTLEMENT</span>
                    <span className="text-stone-400">Auto-Reconcile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Next Navigation */}
          <div className="mt-20 flex flex-wrap items-center justify-between border-t border-cream/10 pt-10">
            <Link
              to="/projects/agroagent-mcp"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cream/60 hover:text-mustard transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> AgroAgent MCP Server
            </Link>

            <Link
              to="/projects/cuppingnotes"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-mustard hover:underline font-bold"
            >
              Proyek Berikutnya: CuppingNotes.online <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
