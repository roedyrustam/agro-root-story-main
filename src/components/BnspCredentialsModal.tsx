import { useState } from "react";
import { Award, CheckCircle2, Copy, ExternalLink, ShieldCheck, X } from "lucide-react";
import { toast } from "sonner";

export interface CredentialDetail {
  id: string;
  regNumber: string;
  blankoNumber: string;
  title: string;
  scheme: string;
  issuingBody: string;
  year: string;
  validUntil: string;
  status: "ACTIVE" | "VERIFIED";
  description: string;
  competencies: string[];
}

export const CREDENTIALS_DATA: CredentialDetail[] = [
  {
    id: "bnsp-agro",
    regNumber: "No. Reg. AGR.024.00192.2019",
    blankoNumber: "K.19.004821",
    title: "Sertifikasi BNSP Sektor Industri Agro",
    scheme: "Klaster Perencanaan Produksi & Pengendalian Persediaan Agro-Industri",
    issuingBody: "Badan Nasional Sertifikasi Profesi (BNSP) — LSP Industri Agro",
    year: "2019",
    validUntil: "Seumur Hidup / Terverifikasi Berkala",
    status: "VERIFIED",
    description:
      "Standarisasi kompetensi nasional dalam merancang kapasitas produksi komoditas agro, manajemen mutu pascapanen kopi specialty, dan kalkulasi throughput rantai pasok dari kebun ke pengolahan.",
    competencies: [
      "Menyusun Rencana Produksi Industri Pengolahan Komoditas Pertanian",
      "Mengendalikan Persediaan Bahan Baku & Stok Hasil Olahan Agro",
      "Audit Standar Mutu Fisik & Sensory Mutu Pascapanen (SCA Protocol)",
      "Optimalisasi Kapasitas Lini Pemrosesan & Logistik Dataran Tinggi",
    ],
  },
  {
    id: "bnsp-trainer",
    regNumber: "No. Reg. KWR.018.00412.2023",
    blankoNumber: "K.23.009147",
    title: "Sertifikasi BNSP Pelatih Kewirausahaan UMKM",
    scheme: "Pelatihan & Fasilitasi Kewirausahaan Berkelanjutan",
    issuingBody: "Badan Nasional Sertifikasi Profesi (BNSP) — LSP Pelatih Nasional",
    year: "2023",
    validUntil: "Seumur Hidup / Terverifikasi Berkala",
    status: "VERIFIED",
    description:
      "Standarisasi instruktur dan fasilitator nasional untuk mendampingi pemilik usaha mikro dalam adopsi teknologi, manajemen arus kas digital, dan otomatisasi operasional berbasis AI.",
    competencies: [
      "Merancang Program Pelatihan Adopsi Teknologi & Digitalisasi UMKM",
      "Memfasilitasi Implementasi Sistem Kasir & Akuntansi Mikro (Kafeya POS)",
      "Pendampingan Tata Kelola Bisnis Koperasi Desa & BUMDes Mandiri",
      "Workshop Penerapan AI Generatif untuk Efisiensi Bisnis Komunitas",
    ],
  },
];

interface BnspCredentialsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BnspCredentialsModal({ isOpen, onClose }: BnspCredentialsModalProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  if (!isOpen) return null;

  const currentCred = CREDENTIALS_DATA[activeTab];

  const handleCopyId = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Nomor Registrasi BNSP berhasil disalin!", {
      description: text,
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bnsp-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl border border-amber-500/20 bg-[#12100e] text-stone-200 shadow-2xl shadow-amber-950/40 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 bg-[#171411]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="bnsp-modal-title" className="font-display text-lg text-white font-medium">
                  Verifikasi Kredensial Resmi BNSP
                </h3>
                <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-mono text-emerald-400 font-semibold">
                  <ShieldCheck className="h-3 w-3" /> VERIFIED
                </span>
              </div>
              <p className="text-xs text-stone-400 font-mono">
                Badan Nasional Sertifikasi Profesi Republik Indonesia
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-stone-400 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Tutup modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-white/10 bg-[#0d0c0a] p-2 gap-2">
          {CREDENTIALS_DATA.map((cred, idx) => (
            <button
              key={cred.id}
              onClick={() => setActiveTab(idx)}
              className={`flex-1 rounded-xl py-2.5 px-3 text-xs font-mono transition-all text-left flex items-center justify-between ${
                activeTab === idx
                  ? "bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold shadow-inner"
                  : "text-stone-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="truncate pr-2">{cred.title}</span>
              <span className="text-[10px] opacity-70 shrink-0 font-mono">[{cred.year}]</span>
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Certificate Badge Card */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1612] to-[#0f0e0c] p-6 shadow-lg relative overflow-hidden">
            <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <span className="inline-block rounded-full bg-amber-400/10 border border-amber-400/30 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-amber-300 mb-2">
                  {currentCred.scheme}
                </span>
                <h4 className="font-display text-xl text-white font-medium">{currentCred.title}</h4>
                <p className="mt-1 text-xs text-stone-400 leading-relaxed">
                  Diterbitkan oleh:{" "}
                  <strong className="text-stone-300">{currentCred.issuingBody}</strong>
                </p>
              </div>

              <button
                onClick={() => handleCopyId(currentCred.regNumber)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-2 text-xs font-mono text-stone-300 transition-colors shrink-0"
                title="Salin Nomor Registrasi"
              >
                <Copy className="h-3.5 w-3.5 text-amber-400" />
                <span>Salin No. Reg</span>
              </button>
            </div>

            {/* Registration Metadata Table */}
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-4 font-mono text-xs">
              <div className="rounded-xl bg-black/30 p-3 border border-white/5">
                <span className="text-[10px] text-stone-500 uppercase block">Nomor Registrasi</span>
                <span className="text-amber-300 font-semibold">{currentCred.regNumber}</span>
              </div>
              <div className="rounded-xl bg-black/30 p-3 border border-white/5">
                <span className="text-[10px] text-stone-500 uppercase block">
                  Nomor Seri Blanko
                </span>
                <span className="text-stone-300 font-semibold">{currentCred.blankoNumber}</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-stone-300 leading-relaxed">{currentCred.description}</p>
          </div>

          {/* Core Competencies Checklist */}
          <div>
            <h5 className="font-mono text-xs uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5" /> Unit Kompetensi Standar Terverifikasi
            </h5>
            <div className="grid gap-2">
              {currentCred.competencies.map((comp, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-[#171411]/60 p-3 text-xs text-stone-300"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 font-mono text-[10px] font-bold">
                    0{i + 1}
                  </span>
                  <span className="leading-relaxed">{comp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-white/10 bg-[#171411] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-mono text-[11px] text-stone-400">
            Terdaftar pada Database Registri Sertifikasi Profesi Nasional (BNSP)
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/6281241003047?text=Halo%20Pak%20Roedy,%20saya%20tertarik%20mengajak%20Anda%20menjadi%20Trainer/Konsultan%20berdasarkan%20kredensial%20BNSP%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 font-mono text-xs uppercase tracking-wider font-semibold text-stone-950 transition-transform hover:scale-105"
            >
              Undang Sebagai Pemateri / Konsultan ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
