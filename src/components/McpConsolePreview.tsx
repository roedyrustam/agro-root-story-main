import { useState } from "react";
import { Terminal, Play, Check, Copy, Bot, Cpu, Sparkles, Database } from "lucide-react";

interface ToolScenario {
  id: string;
  name: string;
  title: string;
  desc: string;
  requestPayload: object;
  responsePayload: object;
  latencyMs: number;
}

const scenarios: ToolScenario[] = [
  {
    id: "batch_telemetry",
    name: "get_batch_telemetry",
    title: "1. Agro Telemetry & Batch Trace",
    desc: "Mengambil data panen, kadar air, elevasi kebun, dan profil petani dari node Barru & Toraja via MCP Resource.",
    requestPayload: {
      jsonrpc: "2.0",
      id: "call_agro_902",
      method: "tools/call",
      params: {
        name: "get_batch_telemetry",
        arguments: {
          batch_id: "BRU-TYP-2026-08A",
          origin: "Barru, Sulawesi Selatan",
          elevation_masl: 1250,
          varieties: ["Typica", "Lini S"]
        }
      }
    },
    responsePayload: {
      status: "success",
      timestamp: "2026-10-06T02:40:00Z",
      batch: {
        id: "BRU-TYP-2026-08A",
        farmer_coop: "Koperasi Tani Harapan Sehati",
        process: "Natural Anaerobic",
        moisture_content_pct: 10.8,
        water_activity: 0.58,
        storage_temp_c: 21.4,
        certification: "BNSP Agro Verified"
      },
      audit_proof: "sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069"
    },
    latencyMs: 38
  },
  {
    id: "cupping_eval",
    name: "evaluate_cupping_sca",
    title: "2. SCA Cupping & Flavor Intelligence",
    desc: "Mengevaluasi skor mutu sensorik SCA menggunakan agen analisis multimodal untuk ekstraksi deskriptor rasa.",
    requestPayload: {
      jsonrpc: "2.0",
      id: "call_cupping_411",
      method: "tools/call",
      params: {
        name: "evaluate_cupping_sca",
        arguments: {
          sample_id: "SMP-TRJ-G1-99",
          scores: {
            fragrance_aroma: 8.5,
            flavor: 8.75,
            aftertaste: 8.25,
            acidity: 8.5,
            body: 8.25,
            balance: 8.5,
            overall: 8.75
          }
        }
      }
    },
    responsePayload: {
      status: "success",
      total_score: 87.5,
      grade: "Specialty Grade 1",
      sensory_profile: ["Bergamot", "Brown Sugar", "Dark Plum", "Jasmine Finish"],
      recommendation: "Optimized for Light-Medium Filter Roast & Geisha-style showcase",
      agent_confidence: 0.984
    },
    latencyMs: 54
  },
  {
    id: "dispatch_swarm",
    name: "dispatch_supply_agent",
    title: "3. Autonomous Logistics Swarm",
    desc: "Mendelegasikan instruksi rute distribusi otomatis dari stasiun olah basah ke roastery mitra dengan verifikasi inventori.",
    requestPayload: {
      jsonrpc: "2.0",
      id: "call_dispatch_104",
      method: "tools/call",
      params: {
        name: "dispatch_supply_agent",
        arguments: {
          destination_roastery: "Makassar Artisan Roasters",
          volume_kg: 600,
          max_transit_hours: 48,
          temperature_controlled: true
        }
      }
    },
    responsePayload: {
      status: "dispatched",
      dispatch_id: "SWARM-DISP-8812",
      assigned_agents: ["Agent-Logistics-Router", "Agent-Quality-Check", "Agent-BUMDes-Ledger"],
      estimated_transit_time: "14h 30m",
      carbon_offset_kg: 18.2,
      consignment_status: "LOCKED_IN_ESCROW"
    },
    latencyMs: 62
  }
];

export function McpConsolePreview() {
  const [activeScenarioId, setActiveScenarioId] = useState(scenarios[0].id);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  const handleSimulate = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 400);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      JSON.stringify(
        { request: activeScenario.requestPayload, response: activeScenario.responsePayload },
        null,
        2
      )
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl border border-coffee/15 bg-coffee text-cream shadow-2xl">
      {/* Decorative top ambient bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-cream/10 bg-coffee-dark/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-terracotta/80" />
            <span className="h-3 w-3 rounded-full bg-mustard/80" />
            <span className="h-3 w-3 rounded-full bg-sage/80" />
          </div>
          <span className="flex items-center gap-2 font-mono text-xs text-cream/70">
            <Terminal className="h-3.5 w-3.5 text-mustard" />
            <span className="text-terracotta font-semibold">roedy@agro-agent</span>: ~
            <span className="text-cream/40">/mcp-server-v1</span>
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sage/30 bg-sage/10 px-3 py-1 text-sage">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage" />
            MCP v1.x Ready
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-lg border border-cream/10 bg-cream/5 px-3 py-1 text-cream/70 transition-all hover:bg-cream/10 hover:text-cream"
            title="Salin JSON-RPC Payload"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-sage" />
                <span>Disalin</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Salin Schema</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-12">
        {/* Sidebar Tools Selector */}
        <div className="border-b border-cream/10 bg-coffee/60 p-6 lg:col-span-5 lg:border-b-0 lg:border-r">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mustard">
              Available MCP Tools
            </span>
            <span className="flex items-center gap-1 text-[10px] font-mono text-cream/50">
              <Cpu className="h-3 w-3 text-terracotta" /> Live JSON-RPC
            </span>
          </div>

          <div className="space-y-3">
            {scenarios.map((sc) => {
              const isSelected = sc.id === activeScenario.id;
              return (
                <button
                  key={sc.id}
                  onClick={() => setActiveScenarioId(sc.id)}
                  className={`w-full rounded-2xl p-4 text-left transition-all duration-300 ${
                    isSelected
                      ? "border border-terracotta/50 bg-cream/10 shadow-lg shadow-terracotta/5"
                      : "border border-cream/5 bg-cream/[0.03] hover:border-cream/20 hover:bg-cream/[0.06]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-cream">
                      {sc.title}
                    </span>
                    {isSelected && (
                      <span className="rounded bg-terracotta/20 px-2 py-0.5 font-mono text-[10px] text-terracotta font-medium">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-cream/70">
                    {sc.desc}
                  </p>
                  <div className="mt-3 flex items-center gap-2 font-mono text-[10px] text-cream/40">
                    <span className="rounded bg-cream/5 px-2 py-0.5">tool: {sc.name}()</span>
                    <span>~{sc.latencyMs}ms</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-cream/10 bg-coffee-dark/60 p-4">
            <div className="flex items-start gap-3">
              <Bot className="mt-0.5 h-4 w-4 text-mustard shrink-0" />
              <div>
                <h4 className="font-mono text-xs font-semibold text-cream">
                  Agentic Interoperability
                </h4>
                <p className="mt-1 text-[11px] leading-relaxed text-cream/60">
                  Didesain untuk beroperasi native dengan Claude Desktop, Cursor, Gemini Live, dan autonomous swarms di jaringan desa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Console Execution Display */}
        <div className="flex flex-col bg-coffee-dark/95 p-6 lg:col-span-7">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-cream/50">Request & Payload Response</span>
            </div>
            <button
              onClick={handleSimulate}
              disabled={isRunning}
              className="inline-flex items-center gap-2 rounded-xl bg-terracotta px-4 py-2 font-mono text-xs font-semibold text-cream transition-all duration-300 hover:bg-terracotta-dark hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
            >
              <Play className={`h-3 w-3 ${isRunning ? "animate-spin" : ""}`} />
              <span>{isRunning ? "Invoking Tool..." : "Run Tool Call"}</span>
            </button>
          </div>

          {/* Code Tabs */}
          <div className="flex-1 space-y-4 font-mono text-xs">
            <div>
              <div className="mb-1.5 flex items-center justify-between text-[11px] text-mustard">
                <span>// 1. JSON-RPC Request Payload</span>
                <span className="text-[10px] text-cream/40">protocol: mcp/v1.0</span>
              </div>
              <pre className="max-h-48 overflow-x-auto rounded-xl border border-cream/10 bg-black/40 p-4 text-[11px] leading-relaxed text-cream/90 selection:bg-terracotta/40">
                <code>{JSON.stringify(activeScenario.requestPayload, null, 2)}</code>
              </pre>
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between text-[11px] text-sage">
                <span>// 2. Verified Agent Response</span>
                <span className="text-[10px] text-cream/40">latency: {activeScenario.latencyMs}ms</span>
              </div>
              <pre className="max-h-56 overflow-x-auto rounded-xl border border-sage/20 bg-black/40 p-4 text-[11px] leading-relaxed text-sage/90 selection:bg-sage/30">
                <code>{JSON.stringify(activeScenario.responsePayload, null, 2)}</code>
              </pre>
            </div>
          </div>

          {/* Footer metrics */}
          <div className="mt-4 flex flex-wrap items-center justify-between border-t border-cream/10 pt-4 font-mono text-[11px] text-cream/50">
            <span className="flex items-center gap-1.5">
              <Database className="h-3 w-3 text-terracotta" /> Source: Distributed Edge SQLite & Telemetry
            </span>
            <span className="flex items-center gap-1 text-sage">
              <Sparkles className="h-3 w-3" /> Zero-Drift Type-Safe Schemas
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
