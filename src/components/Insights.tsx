import { useState } from "react";
import { BookOpen, Clock, Sparkles, X, Check, ArrowRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

export interface ArticleDetail {
  id: string;
  category: "AI & Protocols" | "FinTech & POS" | "Agro Supply Chain";
  date: "Okt 2026" | "Sep 2026" | "Agt 2026";
  readTime: string;
  title: string;
  excerpt: string;
  content: {
    lead: string;
    sections: {
      heading: string;
      body: string;
    }[];
    takeaways: string[];
  };
}

const ARTICLES: ArticleDetail[] = [
  {
    id: "mcp-enterprise-guide",
    category: "AI & Protocols",
    date: "Okt 2026",
    readTime: "6 min baca",
    title:
      "Arsitektur Model Context Protocol (MCP v1.x) untuk Integrasi AI Enterprise di Indonesia.",
    excerpt:
      "Mengapa REST API konvensional menghambat AI agents, dan bagaimana standardisasi server Model Context Protocol (MCP) memungkinkan LLM mengakses database bisnis secara aman.",
    content: {
      lead: "Dalam era agen AI otonom seperti Google Antigravity, Claude Code, dan Cursor, protokol komunikasi antara model bahasa besar dan database operasional tidak lagi efisien jika hanya mengandalkan endpoint REST konvensional tanpa skema kontraktual.",
      sections: [
        {
          heading: "1. Batasan REST API Konvensional untuk Agen AI",
          body: "REST API dirancang untuk manusia dan aplikasi monolitik dengan payload JSON yang seringkali berubah-ubah (schema drift). Ketika agen AI melakukan tool calling pada endpoint REST tanpa metadata terstruktur, token context window terbuang sia-sia untuk mem-parsing respons yang tidak relevan, memicu halusinasi dan kegagalan eksekusi.",
        },
        {
          heading: "2. Nilai Unggul Model Context Protocol (MCP v1.x)",
          body: "MCP v1.x memperkenalkan standar JSON-RPC 2.0 terisolasi. Melalui transport stdio atau Server-Sent Events (SSE), agen AI dapat mengeksplorasi resource, menjalankan tool dengan skema tipe ketat (Zod/TypeSpec), dan menyematkan prompt template yang deterministik. Ini menjamin KV-cache prefix hit rates di atas 85% pada model seperti Gemini 4 Pro dan Claude 3.7/5.",
        },
        {
          heading: "3. Implementasi Nyata di Indonesia",
          body: "Proyek open-source seperti doku-gemini-mcp dan AgroAgent MCP membuktikan bahwa sistem pembayaran (QRIS, VA SNAP BI) dan database telemetri kebun kopi dapat dikendalikan langsung oleh AI agent tanpa risiko kebocoran kredensial atau eksekusi tak berizin.",
        },
      ],
      takeaways: [
        "MCP adalah standar masa depan interoperabilitas antara sistem korporasi dan model AI.",
        "Kunci efisiensi token terletak pada deterministic prefixing dan skema parameter yang ramping.",
        "Repositori roedyrustam/vibes-plug di GitHub menyediakan 155 subagent skill untuk merancang server MCP berstandar tinggi.",
      ],
    },
  },
  {
    id: "pos-umkm-offline-first",
    category: "FinTech & POS",
    date: "Sep 2026",
    readTime: "5 min baca",
    title: "Audit & Pencegahan Kebocoran Finansial UMKM Kopi Menggunakan Sistem POS Offline-First.",
    excerpt:
      "Studi kasus di Barru dan Toraja: mengapa aplikasi kasir cloud murni sering jebol di kedai kopi mikro, dan bagaimana arsitektur offline-first Kafeya POS menyelamatkan laba bersih.",
    content: {
      lead: "Mayoritas kegagalan warung kopi dan UMKM F&B mikro di Indonesia bukan disebabkan oleh rasa kopi yang buruk, melainkan kebocoran kas kasir dan pencatatan inventori yang tidak pernah cocok di akhir shift.",
      sections: [
        {
          heading: "1. Tiga Lubang Kebocoran Utama Kasir Mikro",
          body: "Berdasarkan audit lapangan, tiga kebocoran terbesar adalah: (a) Transaksi kas tunai yang tidak diinput ke sistem saat jam ramai, (b) Bon gantung yang dibatalkan tanpa rekam audit, dan (c) Selisih takaran gramasi biji kopi dan sirup yang tidak tercatat.",
        },
        {
          heading: "2. Jebakan Ketergantungan Internet (Cloud Trap)",
          body: "Banyak pemilik UMKM dipaksa berlangganan aplikasi POS cloud bulanan yang macet seketika koneksi 4G seluler di lokasi terputus. Kasir akhirnya kembali menulis di sobekan kertas, dan rekam audit digital runtuh seketika.",
        },
        {
          heading: "3. Solusi Desain Kafeya POS",
          body: "Kafeya POS mengusung arsitektur Offline-First murni berbasis IndexedDB/OPFS. Seluruh transaksi kasir, kalkulasi HPP, dan laporan shift diproses langsung di peramban perangkat lokal tanpa membutuhkan server eksternal, dengan kemampuan sinkronisasi aman saat jaringan tersedia.",
        },
      ],
      takeaways: [
        "Aplikasi bisnis mikro harus tangguh saat offline dan tidak boleh membebani kasir dengan lag internet.",
        "Pencatatan real-time menutup peluang manipulasi nota hingga 99%.",
        "Pemilik bisnis dapat melihat laporan laba bersih harian akurat tanpa harus menunggu berhari-hari.",
      ],
    },
  },
  {
    id: "agro-supply-chain-sovereignty",
    category: "Agro Supply Chain",
    date: "Agt 2026",
    readTime: "7 min baca",
    title: "Kedaulatan Data Rantai Pasok Agro Desa: Studi Kasus Lapangan Sulawesi Selatan.",
    excerpt:
      "Menghubungkan kelompok tani kopi dataran tinggi Barru, Toraja, dan Sinjai ke roastery modern melalui standardisasi mutu SCA dan sistem BeanHub.",
    content: {
      lead: "Petani kopi seringkali berada pada posisi terlemah dalam rantai nilai perdagangan kopi karena asimetri informasi mutu sensorik dan manipulasi timbangan di tingkat tengkulak perantara.",
      sections: [
        {
          heading: "1. Masalah Klasik Rantai Pasok Kopi Pegunungan",
          body: "Kopi specialty dari pegunungan Sulawesi memiliki profil rasa unik, namun petani sering menjualnya sebagai kopi komersial curah karena ketiadaan catatan lot panen dan hasil uji cupping terverifikasi.",
        },
        {
          heading: "2. Integrasi Standar SCA CVA & Sertifikasi BNSP",
          body: "Dengan menerapkan protokol Specialty Coffee Association (SCA) Coffee Value Assessment dan skema BNSP Perencanaan Produksi Agro, setiap karung gabah kopi diberi tanda pengenal unik yang mencakup ketinggian kebun, varietas, kadar air, dan metode fermentasi.",
        },
        {
          heading: "3. Dampak Ekonomi Melalui BeanHub & BUMDes",
          body: "Melalui platform beanhub.online dan cuppingnotes.online, roastery pembeli di kota besar dapat memverifikasi kualitas sensory secara langsung dan membayar premi harga yang adil (fair trade) ke kas desa dan petani.",
        },
      ],
      takeaways: [
        "Transparansi data mutu adalah kunci kedaulatan ekonomi petani pedesaan.",
        "Teknologi digital harus adaptif dengan kondisi geografis pegunungan dan mudah dipahami pengurus koperasi tani.",
        "Nilai tambah kopi specialty meningkat 30-40% jika memiliki rekam jejak sensory yang terverifikasi.",
      ],
    },
  },
];

export function Insights() {
  const [activeArticle, setActiveArticle] = useState<ArticleDetail | null>(null);

  return (
    <section
      id="insights"
      className="scroll-mt-28 md:scroll-mt-36 py-24 md:py-32 bg-[#090807] border-t border-white/10 relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-10 h-72 w-72 rounded-full bg-orange-600/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-10 relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel number="06" label="Knowledge Hub & Field Notes" />
            <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.08] text-white text-balance">
              Catatan Teknis & <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                Studi Kasus Lapangan.
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 font-mono text-xs text-amber-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>GEO & AI Otoritas Terverifikasi</span>
          </div>
        </div>

        {/* Articles Grid - High Contrast Dark Obsidian Glass Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {ARTICLES.map((item) => (
            <article
              key={item.id}
              onClick={() => setActiveArticle(item)}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#14110e]/90 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-amber-500/50 hover:bg-[#181410] hover:shadow-[0_25px_60px_-15px_rgba(245,158,11,0.15)] hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              {/* Subtle card glow on hover */}
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-amber-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-amber-300 font-semibold shadow-inner">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-xs text-stone-400">
                    <Clock className="h-3 w-3 text-amber-400" /> {item.readTime}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl sm:text-2xl text-white font-bold leading-snug group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-stone-300 font-normal">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-amber-400 font-bold group-hover:text-amber-300 transition-colors">
                <span className="group-hover:underline">Baca Analisis Lengkap</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reading Modal - Dark Obsidian Modal */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl border border-amber-500/30 bg-[#12100e] text-stone-200 shadow-2xl shadow-black/90 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 bg-[#171411]">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-3 font-mono text-xs text-stone-300">
                  <span className="font-semibold text-amber-300">{activeArticle.category}</span>
                  <span>•</span>
                  <span className="text-stone-400">{activeArticle.readTime}</span>
                </div>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="rounded-full p-2 text-stone-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                aria-label="Tutup artikel"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
              <h2
                id="article-modal-title"
                className="font-display text-2xl sm:text-3xl text-white leading-tight font-bold"
              >
                {activeArticle.title}
              </h2>

              <p className="font-display italic text-base text-amber-300 border-l-2 border-amber-400 pl-4 leading-relaxed bg-amber-500/5 py-2 rounded-r-xl">
                "{activeArticle.content.lead}"
              </p>

              <div className="space-y-6 pt-4 text-sm sm:text-base leading-relaxed text-stone-300">
                {activeArticle.content.sections.map((sec, idx) => (
                  <div
                    key={idx}
                    className="space-y-2 rounded-2xl bg-[#171411]/60 p-4 border border-white/5"
                  >
                    <h4 className="font-display text-lg text-white font-semibold">{sec.heading}</h4>
                    <p className="leading-relaxed text-stone-300">{sec.body}</p>
                  </div>
                ))}
              </div>

              {/* Key Takeaways */}
              <div className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6 shadow-inner">
                <h5 className="font-mono text-xs uppercase tracking-wider text-amber-400 font-bold mb-3 flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400" /> Intisari & Rekomendasi Lapangan
                </h5>
                <ul className="space-y-2.5">
                  {activeArticle.content.takeaways.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-200 leading-relaxed"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-white/10 bg-[#171411] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-mono text-stone-400">
                Ditulis oleh Roedy Rustam · AI Systems & Agro Consultant
              </span>
              <a
                href={`https://wa.me/6281241003047?text=Halo%20Pak%20Roedy,%20saya%20telah%20membaca%20artikel%20"${encodeURIComponent(activeArticle.title)}"%20dan%20ingin%20berdiskusi.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2.5 font-mono text-xs uppercase tracking-wider font-bold text-stone-950 transition-transform hover:scale-105 shadow-md"
              >
                Diskusikan Topik Ini via WhatsApp ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
