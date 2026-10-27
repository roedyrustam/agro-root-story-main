import { useState, useRef, useEffect } from "react";
import {
  Bot,
  MessageSquare,
  X,
  Send,
  Sparkles,
  ExternalLink,
  ChevronDown,
  RotateCcw,
} from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "user" | "agent";
  text: string;
  time: string;
  links?: { label: string; url: string }[];
}

const KNOWLEDGE_RESPONSES: {
  keywords: string[];
  response: string;
  links?: { label: string; url: string }[];
}[] = [
  {
    keywords: ["github", "karya", "open source", "proyek", "repo", "bintang", "star", "vibes-plug"],
    response:
      "Karya open-source utama Roedy Rustam di GitHub (@roedyrustam) meliputi:\n\n1. **vibes-plug (77★, npm package)**: Universal Skill AI Agent Swarm Architecture dengan 155 subagent skills lintas IDE (Google Antigravity, Claude Code, Cursor).\n2. **Centaury Engine**: Autonomous Fullstack Engine untuk Gemini 4 Pro & Project Astra.\n3. **sinapsai (4★)**: In-process AI Gateway & Control Plane dengan circuit breaker.\n4. **doku-gemini-mcp**: Server Model Context Protocol untuk transaksi pembayaran agen AI.\n5. **API-Wilayah-2024 (21★)**: Database open REST API hirarki wilayah administratif Indonesia.",
    links: [
      { label: "Buka GitHub @roedyrustam ↗", url: "https://github.com/roedyrustam" },
      { label: "Paket npm vibes-plug ↗", url: "https://www.npmjs.com/package/vibes-plug" },
    ],
  },
  {
    keywords: ["bnsp", "sertifikat", "kredensial", "pelatih", "trainer", "legalitas"],
    response:
      "Roedy Rustam memegang 2 Sertifikasi Resmi dari Badan Nasional Sertifikasi Profesi (BNSP) Republik Indonesia:\n\n1. **Sertifikasi BNSP Sektor Industri Agro — Klaster Perencanaan Produksi** (No. Reg. AGR.024.00192.2019).\n2. **Sertifikasi BNSP Pelatih Kewirausahaan UMKM** (No. Reg. KWR.018.00412.2023).\n\nKredensial ini menjadikannya instruktur dan fasilitator terverifikasi negara untuk pelatihan adopsi teknologi, manajemen pembukuan mikro, dan audit rantai pasok komoditas.",
    links: [
      {
        label: "Undang Sebagai Trainer via WhatsApp ↗",
        url: "https://wa.me/6281241003047?text=Halo%20Pak%20Roedy,%20kami%20ingin%20mengundang%20Anda%20sebagai%20Trainer%20resmi%20BNSP.",
      },
    ],
  },
  {
    keywords: ["mcp", "model context protocol", "arsitektur", "konsultan it", "agent", "swarm"],
    response:
      "Sebagai Konsultan IT dan Praktisi AI, Roedy Rustam mengkhususkan diri pada implementasi Model Context Protocol (MCP v1.x) dan multi-agent swarms. Layanan mencakup:\n\n• Perancangan custom MCP server aman (stdio/SSE) untuk integrasi database korporasi ke AI.\n• Audit efisiensi token & deterministic KV-cache optimization (>85% cache hit).\n• Migrasi aplikasi ke Cloudflare Edge Workers / SSR modern (React 19, TanStack Start).",
    links: [
      {
        label: "Konsultasi Arsitektur via WhatsApp ↗",
        url: "https://wa.me/6281241003047?text=Halo%20Pak%20Roedy,%20saya%20ingin%20konsultasi%20arsitektur%20MCP%20dan%20Agen%20AI.",
      },
    ],
  },
  {
    keywords: ["umkm", "kasir", "pos", "kafeya", "kopi", "warung", "desa", "bumdes"],
    response:
      "Untuk UMKM dan Koperasi Desa, Roedy Rustam menghadirkan ekosistem terpadu:\n\n• **Kafeya POS**: Sistem kasir dan pembukuan mikro Offline-First yang tidak macet saat internet mati, dirancang khusus untuk kedai kopi dan warung.\n• **BeanHub & CuppingNotes**: Platform pelacakan rantai pasok kopi dari kebun Barru, Toraja, Enrekang, hingga roastery dengan standar Specialty Coffee Association (SCA).\n• **Pendampingan BUMDes**: Tata kelola kedaulatan data komoditas desa.",
    links: [
      { label: "Lihat Demo Kafeya POS ↗", url: "/projects/kafeya" },
      { label: "Lihat Platform BeanHub ↗", url: "https://beanhub.online" },
    ],
  },
  {
    keywords: ["llmo", "geo", "aeo", "llms", "ai search", "knowledge graph", "perplexity", "chatgpt search"],
    response:
      "Website ini menerapkan standar penuh LLMO (Large Language Model Optimization) dan GEO (Generative Engine Optimization):\n\n• **Endpoint /llms.txt & /llms-full.txt**: Terindeks sesuai format standar llmstxt.org untuk crawler AI (ChatGPT Search, Perplexity, Claude, Gemini, Google AI Mode).\n• **Schema.org Knowledge Graph**: Graph terpadu dengan URI @id menghubungkan entitas Person, ProfessionalService, SoftwareSourceCode (vibes-plug 77★, Centaury, sinapsai), dan sertifikasi BNSP resmi.\n• **Semantic AEO & Fakta Terverifikasi**: Struktur konten dirancang untuk kutipan deterministik bebas halusinasi.",
    links: [
      { label: "Buka /llms.txt ↗", url: "/llms.txt" },
      { label: "Buka /llms-full.txt ↗", url: "/llms-full.txt" },
    ],
  },
];

const DEFAULT_RESPONSE =
  "Terima kasih atas pertanyaan Anda! Roedy Rustam adalah Konsultan IT, Praktisi AI (Kreator vibes-plug 77★ di GitHub), Trainer bersertifikasi BNSP, dan Konsultan UMKM Agro di Indonesia.\n\nAnda dapat memilih topik cepat di bawah atau berdiskusi langsung dengan Pak Roedy via WhatsApp resmi di +6281241003047.";

export function RoedyAgentWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "intro",
      sender: "agent",
      text: "Halo! Saya Roedy-Agent AI v2.6. Saya siap menjawab pertanyaan Anda mengenai keahlian Konsultan IT, repositori GitHub, sertifikasi BNSP, atau solusi digitalisasi UMKM Roedy Rustam. Ada yang bisa saya bantu?",
      time: "Online",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    // Simulate agent intelligence processing
    setTimeout(() => {
      const lower = query.toLowerCase();
      const matched = KNOWLEDGE_RESPONSES.find((item) =>
        item.keywords.some((kw) => lower.includes(kw)),
      );

      const agentReply: ChatMessage = {
        id: String(Date.now() + 1),
        sender: "agent",
        text: matched ? matched.response : DEFAULT_RESPONSE,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        links: matched?.links,
      };

      setMessages((prev) => [...prev, agentReply]);
      setIsTyping(false);
    }, 600);
  };

  const QUICK_PROMPTS = [
    "Apa saja karya GitHub unggulan Roedy?",
    "Apa sertifikasi BNSP Roedy Rustam?",
    "Bagaimana konsultasi arsitektur AI & MCP?",
    "Solusi kasir & UMKM Kafeya POS?",
  ];

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 rounded-full border border-amber-500/50 bg-[#14110e]/95 px-4 py-3 shadow-[0_10px_35px_rgba(245,158,11,0.25)] backdrop-blur-2xl transition-all duration-300 hover:scale-105 hover:border-amber-400 cursor-pointer"
            aria-label="Buka Chat Roedy-Agent AI"
          >
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-stone-950 font-bold shadow-md">
              <Bot className="h-5 w-5 text-stone-950" />
              <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[#14110e]" />
              </span>
            </div>

            <div className="flex flex-col text-left pr-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold flex items-center gap-1.5">
                Roedy-Agent AI <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[10px] text-stone-300 font-sans">Tanya keahlian & AI ↗</span>
            </div>
          </button>
        )}
      </div>

      {/* Chat Window Dialog */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[420px] rounded-3xl border border-amber-500/30 bg-[#12100e] text-stone-200 shadow-2xl shadow-black/80 flex flex-col overflow-hidden max-h-[85vh] animate-in slide-in-from-bottom-6 duration-200 backdrop-blur-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 bg-[#171411]">
            <div className="flex items-center gap-3">
              <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-stone-950 font-bold">
                <Bot className="h-5 w-5 text-stone-950" />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 border border-[#171411]" />
              </div>
              <div>
                <h4 className="font-display text-sm text-white font-medium flex items-center gap-2">
                  Roedy-Agent AI{" "}
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">
                    v2.6
                  </span>
                </h4>
                <p className="text-[10px] font-mono text-emerald-400">
                  Online · Sinkronisasi /llms-full.txt
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1.5 text-stone-400 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Tutup Chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 max-h-[380px] bg-[#0c0b09]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-xs leading-relaxed whitespace-pre-line ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-medium rounded-tr-none shadow-md"
                      : "bg-[#1c1814] text-stone-300 border border-white/10 rounded-tl-none shadow-inner"
                  }`}
                >
                  {msg.text}

                  {msg.links && msg.links.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-col gap-1.5">
                      {msg.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[11px] text-amber-300 hover:text-amber-200 underline font-semibold"
                        >
                          <ExternalLink className="h-3 w-3" />
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <span className="mt-1 text-[9px] font-mono text-stone-500 px-1">{msg.time}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 rounded-2xl bg-[#1c1814] px-4 py-3 border border-white/10 w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-bounce" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-bounce [animation-delay:0.2s]" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Chips */}
          <div className="border-t border-white/10 bg-[#14110e] p-2.5 overflow-x-auto flex gap-1.5 no-scrollbar">
            {QUICK_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="shrink-0 rounded-full border border-white/10 bg-white/5 hover:border-amber-400/50 hover:bg-amber-400/10 px-3 py-1.5 text-[10px] font-mono text-stone-300 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="border-t border-white/10 bg-[#171411] p-3 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanyakan keahlian, GitHub, atau BNSP..."
              className="flex-1 rounded-xl bg-black/40 border border-white/10 px-3.5 py-2 text-xs text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold hover:scale-105 transition-transform disabled:opacity-40 disabled:hover:scale-100"
              aria-label="Kirim Pesan"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>

          {/* Direct WhatsApp Callout */}
          <div className="bg-[#0e0c0a] px-3.5 py-2 border-t border-white/5 text-center">
            <a
              href="https://wa.me/6281241003047"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-amber-400 hover:underline"
            >
              Atau chat langsung via WhatsApp Resmi (+6281241003047) ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}
