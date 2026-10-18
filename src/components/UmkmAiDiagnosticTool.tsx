import { useState } from "react";
import { CheckCircle2, ChevronRight, RotateCcw, Send, Sparkles, Zap } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

interface QuestionStep {
  title: string;
  subtitle: string;
  options: {
    label: string;
    desc: string;
    score: number;
    tag: string;
  }[];
}

const STEPS: QuestionStep[] = [
  {
    title: "1. Tipe Entitas / Skala Bisnis Anda",
    subtitle: "Pilih kategori yang paling menggambarkan operasional Anda saat ini.",
    options: [
      {
        label: "Kedai Kopi / Warung Kuliner (F&B)",
        desc: "Bisnis ritel mikro yang melayani transaksi harian langsung ke konsumen.",
        score: 15,
        tag: "F&B / Kafe",
      },
      {
        label: "Koperasi Tani / BUMDes Desa",
        desc: "Badan usaha komunal yang mengelola hasil bumi dan anggota petani.",
        score: 20,
        tag: "BUMDes / Koperasi",
      },
      {
        label: "Produsen Agro / Roastery Kopi Komersial",
        desc: "Pengolahan bahan mentah pascapanen, green bean, hingga distribusi grosir.",
        score: 25,
        tag: "Agro / Roastery",
      },
      {
        label: "Startup / Korporasi / Institusi Publik",
        desc: "Organisasi dengan sistem terdistribusi yang memerlukan integrasi data cerdas.",
        score: 30,
        tag: "Enterprise / IT",
      },
    ],
  },
  {
    title: "2. Titik Bottleneck / Masalah Terbesar",
    subtitle: "Di mana kebocoran biaya atau waktu paling sering terjadi?",
    options: [
      {
        label: "Kasir & Pembukuan Sering Selisih",
        desc: "Uang kas tidak cocok dengan stok barang, laporan laba-rugi tidak jelas.",
        score: 10,
        tag: "Kasir Bocor",
      },
      {
        label: "Rantai Pasok & Mutu Tidak Terlacak",
        desc: "Sulit memverifikasi asal-usul komoditas, stok gudang sering terlambat dipantau.",
        score: 20,
        tag: "Traceability Lemah",
      },
      {
        label: "SDM & Karyawan Gagap Adopsi Teknologi",
        desc: "Perlu bimbingan terstruktur dan pelatihan bersertifikasi resmi BNSP.",
        score: 15,
        tag: "Kebutuhan Pelatihan",
      },
      {
        label: "Data Terisolasi & Belum Terkoneksi ke AI",
        desc: "Memerlukan jembatan Model Context Protocol (MCP) untuk otomatisasi cerdas.",
        score: 25,
        tag: "Integrasi AI & MCP",
      },
    ],
  },
  {
    title: "3. Status Infrastruktur Teknologi Saat Ini",
    subtitle: "Bagaimana tim Anda mencatat dan memproses data setiap hari?",
    options: [
      {
        label: "Masih Manual di Kertas / Buku Kasir",
        desc: "Bergantung penuh pada catatan fisik atau ingatan pengelola.",
        score: 5,
        tag: "Manual Murni",
      },
      {
        label: "Aplikasi Terpisah Tanpa Integrasi",
        desc: "Menggunakan spreadsheet atau aplikasi gratisan yang tidak saling bicara.",
        score: 15,
        tag: "Silo Terpisah",
      },
      {
        label: "Server On-Premise / Web Sederhana",
        desc: "Sudah memiliki sistem web namun lambat dan rawan offline.",
        score: 25,
        tag: "Legacy Web",
      },
      {
        label: "Cloud & REST API Modern",
        desc: "Infrastruktur siap disambungkan dengan agen AI otonom.",
        score: 30,
        tag: "Cloud Native",
      },
    ],
  },
];

export function UmkmAiDiagnosticTool() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (index: number) => {
    const updated = [...selectedAnswers];
    updated[currentStep] = index;
    setSelectedAnswers(updated);

    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setIsCompleted(false);
  };

  // Calculate diagnostic results
  const totalScore = selectedAnswers.reduce((acc, ansIdx, stepIdx) => {
    return acc + (STEPS[stepIdx]?.options[ansIdx]?.score || 0);
  }, 10);

  const entityTag = STEPS[0]?.options[selectedAnswers[0]]?.tag || "Bisnis";
  const problemTag = STEPS[1]?.options[selectedAnswers[1]]?.tag || "Operasional";
  const infraTag = STEPS[2]?.options[selectedAnswers[2]]?.tag || "Infrastruktur";

  let diagnosisTitle = "Akselerasi Fondasi Digital & Kasir Terpadu";
  let diagnosisSolution =
    "Implementasi Kafeya POS (Kasir Offline-First Tanpa Ketergantungan Cloud) + Workshop Manajemen Pembukuan Mikro Bersertifikat BNSP.";
  let estimatedImpact =
    "Menutup kebocoran kasir 99% dan memangkas waktu tutup buku dari 3 hari menjadi 15 menit.";

  if (selectedAnswers[0] === 1 || selectedAnswers[0] === 2) {
    diagnosisTitle = "Kedaulatan Rantai Pasok Agro & Standardisasi Koperasi";
    diagnosisSolution =
      "Deployment BeanHub Traceability Platform + Pendampingan Perencanaan Produksi Agro BNSP + Standarisasi Mutu SCA CVA.";
    estimatedImpact =
      "Peningkatan nilai tawar harga komoditas hingga 25% dan keterlacakan 100% lot panen.";
  } else if (selectedAnswers[0] === 3 || selectedAnswers[1] === 3) {
    diagnosisTitle = "Modernisasi Arsitektur Model Context Protocol (MCP) & AI Swarm";
    diagnosisSolution =
      "Perancangan custom MCP Server v1.x + Orkestrasi vibes-plug Multi-Agent Swarm + Migrasi Cloudflare Edge.";
    estimatedImpact = "Otomasi query database sub-40ms dan pemangkasan biaya token LLM hingga 60%.";
  }

  const waMessage = encodeURIComponent(
    `Halo Pak Roedy Rustam, saya telah mencoba kalkulator Diagnosa Digitalisasi & AI di portofolio Anda:\n\n` +
      `• Profil: ${entityTag}\n` +
      `• Hambatan: ${problemTag}\n` +
      `• Infrastruktur: ${infraTag}\n` +
      `• Skor Kesiapan: ${totalScore}%\n` +
      `• Rekomendasi Sistem: ${diagnosisTitle}\n\n` +
      `Saya ingin berdiskusi terkait estimasi implementasi dan penjadwalan konsultasi/pelatihan.`,
  );

  return (
    <section id="diagnostic-tool" className="border-t border-white/10 bg-[#090807] py-24 md:py-32">
      <div className="content-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel number="04" label="Alat Diagnostik Interaktif" />
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.8rem)] leading-[1.08] text-white">
              Cek Kesiapan Adopsi AI &{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                Digitalisasi Bisnis Anda.
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 font-mono text-xs text-amber-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Gratis · Evaluasi 60 Detik</span>
          </div>
        </div>

        <div className="mt-14 max-w-4xl mx-auto rounded-3xl border border-white/10 bg-[#14110e] p-6 md:p-10 shadow-2xl backdrop-blur-xl">
          {!isCompleted ? (
            <div>
              {/* Progress Tracker */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
                <span className="font-mono text-xs text-amber-400 uppercase tracking-widest">
                  Langkah 0{currentStep + 1} dari 0{STEPS.length}
                </span>
                <div className="flex gap-1.5">
                  {STEPS.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 w-8 rounded-full transition-all duration-300 ${
                        i === currentStep
                          ? "bg-amber-400"
                          : i < currentStep
                            ? "bg-emerald-500"
                            : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step Question */}
              <h3 className="font-display text-2xl md:text-3xl text-white font-medium">
                {STEPS[currentStep].title}
              </h3>
              <p className="mt-2 text-sm text-stone-400">{STEPS[currentStep].subtitle}</p>

              {/* Options Grid */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {STEPS[currentStep].options.map((opt, idx) => {
                  const isSelected = selectedAnswers[currentStep] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`rounded-2xl border p-5 text-left transition-all duration-300 flex flex-col justify-between group ${
                        isSelected
                          ? "border-amber-400 bg-amber-500/10 shadow-lg shadow-amber-500/5"
                          : "border-white/10 bg-white/5 hover:border-amber-400/50 hover:bg-white/10"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-[10px] uppercase tracking-wider rounded-md bg-white/10 px-2 py-0.5 text-stone-300">
                            Pilihan 0{idx + 1}
                          </span>
                          <span className="h-5 w-5 rounded-full border border-white/20 flex items-center justify-center text-xs text-amber-400 group-hover:border-amber-400">
                            →
                          </span>
                        </div>
                        <h4 className="font-display text-lg text-white font-medium group-hover:text-amber-300 transition-colors">
                          {opt.label}
                        </h4>
                        <p className="mt-2 text-xs text-stone-400 leading-relaxed">{opt.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-transparent p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <span className="font-mono text-[11px] text-amber-400 uppercase tracking-widest flex items-center gap-2">
                      <Zap className="h-3.5 w-3.5" /> Laporan Diagnosa Kesiapan Anda
                    </span>
                    <h3 className="mt-2 font-display text-2xl sm:text-3xl text-white">
                      {diagnosisTitle}
                    </h3>
                  </div>

                  {/* Readiness Score Radial/Pill */}
                  <div className="flex flex-col items-center sm:items-end shrink-0">
                    <span className="text-[10px] font-mono text-stone-400 uppercase">
                      Indeks Kesiapan
                    </span>
                    <div className="font-display text-4xl text-amber-400 font-bold">
                      {totalScore}
                      <span className="text-xl text-stone-500 font-normal">/100</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-black/40 p-4 border border-white/5">
                    <span className="font-mono text-[10px] uppercase text-stone-500 block mb-1">
                      Solusi Arsitektur yang Disarankan
                    </span>
                    <p className="text-sm text-stone-200 leading-relaxed font-medium">
                      {diagnosisSolution}
                    </p>
                  </div>

                  <div className="rounded-xl bg-black/40 p-4 border border-white/5">
                    <span className="font-mono text-[10px] uppercase text-emerald-400 block mb-1">
                      Estimasi Dampak Nyata
                    </span>
                    <p className="text-sm text-stone-200 leading-relaxed font-medium">
                      {estimatedImpact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-stone-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Ulangi Diagnostik
                </button>

                <a
                  href={`https://wa.me/6281241003047?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-stone-950 font-bold transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
                >
                  <Send className="h-4 w-4" />
                  Kirim Hasil ke WhatsApp Roedy Rustam ↗
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
