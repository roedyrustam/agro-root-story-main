# Product Requirements Document (PRD) — Agro Root Story 2026 Overhaul

## 1. Executive Summary & Vision
* **Product Name:** Agro Root Story (Personal Digital Portfolio of Roedy Rustam)
* **Author / Owner:** Roedy Rustam
* **Domain:** `roedyrustam.pages.dev` / `roedyrustam.com`
* **Version:** 2.0.0 (Dual-Engine AI & Agro Overhaul)
* **Vision:** Menghadirkan portofolio digital kelas dunia yang memposisikan Roedy Rustam sebagai **AI Systems & Agentic Developer** terkemuka yang memadukan rekayasa agen otonom dan protokol modern (MCP) dengan dampak nyata pada transformasi rantai pasok agro, komoditas kopi, dan kedaulatan ekonomi perdesaan.

---

## 2. User Personas & Target Audience
1. **Tech Recruiters & Engineering Leads:** Mencari fullstack/AI developer dengan pemahaman mendalam tentang Model Context Protocol (MCP), Multi-Agent Orchestration, React 19, TypeScript, dan arsitektur edge.
2. **Startups & Enterprise AI Founders:** Mencari konsultan teknis yang mampu menjembatani AI tingkat lanjut dengan operasi bisnis dunia nyata.
3. **Agro & Coffee Industry Partners:** Mencari pakar rantai pasok dan kontrol mutu digital yang memahami bahasa petani hingga meja barista.
4. **AI Search Agents (LLM Web Crawlers):** Agen pencari seperti Perplexity, GPT-4 Search, dan Gemini yang mengonsumsi metadata dan `/llms.txt`.

---

## 3. Core Functional Requirements (FR)

### FR-1: Dual-Engine Positioning & Hero Narrative
* **Status Bar:** Menyajikan node indikator agen aktif *(System: Autonomous Agent Node Active, Protocol: MCP v1.x, Location: Sulawesi, ID)*.
* **Headline:** *"Membangun jembatan antara agen otonom, kode modern, dan kedaulatan agro."*
* **Dynamic Tagline:** Ringkasan kapabilitas sebagai AI Systems Architect & Agro-Tech Consultant.

### FR-2: Interactive MCP Console Preview
* Menyajikan konsol interaktif di antarmuka web yang mensimulasikan tool call Model Context Protocol:
  - `get_coffee_batch_details(batch_id: string)`
  - `run_cupping_analysis(cupping_data: SCAInput)`
  - `dispatch_logistics_agent(origin: string, destination: string)`
* Menampilkan JSON payload request & response secara dinamis tanpa external backend.

### FR-3: Updated Featured Digital Works (6 Projects)
1. **AgroAgent MCP Server (2026):** Server standar Model Context Protocol untuk inventori dan audit rantai pasok kopi.
2. **Multi-Agent Swarm Orchestrator (2026):** Orkestrasi multi-agen otonom untuk inspeksi mutu, verifikasi cupping, dan perutean logistik.
3. **beanhub.online (2025):** Platform pencatatan rantai pasok kopi hulu-hilir di Sulawesi Selatan.
4. **CuppingNotes.online (2026):** Platform digital evaluasi mutu kopi standar SCA untuk Q-Graders & Roasters.
5. **Kafeya POS (2025):** Alat bantu kasir & pelaporan keuangan untuk café dan UMKM kopi.
6. **Pandu Desa 4.0 (2018):** Tata kelola informasi desa dan pemetaan potensi ekonomi berbasis digital.

### FR-4: Dedicated Case Study Detail Pages
* Menyediakan rute detail untuk `projects.agroagent-mcp.tsx` dan `projects.agent-swarm.tsx` dengan arsitektur sistem, diagram alur agen, dan spesifikasi teknologi.

### FR-5: 3 Integrated Pillars of Expertise
* **Pilar 1:** *Agentic AI & Protocol Engineering* (MCP Server, Agent Swarms, LangGraph/Vercel AI, Context Engineering).
* **Pilar 2:** *Modern Fullstack Architecture* (TanStack Start, React 19, TypeScript, Cloudflare Edge, Tailored DB).
* **Pilar 3:** *Agro-Tech & Rural Empowerment* (BNSP Certified Planning, Supply Chain Tracing, BUMDes Advisory).

### FR-6: AI Engine Optimization (AEO) & Structured Data
* Pembaruan `public/llms.txt` dengan dokumentasi persona AI, tautan rute, dan kapabilitas teknis.
* Pembaruan `src/lib/schema.ts` (JSON-LD `Person` & `ProfessionalService`).

---

## 4. Non-Functional Requirements (NFR)
* **Performance:** Skor Core Web Vitals (LCP < 1.2s, CLS < 0.05, INP < 100ms).
* **Accessibility:** Standar WCAG 2.2 AA (kontras warna yang ramah mata, keyboard navigation, semantik HTML5).
* **Maintainability & Type Safety:** 100% strict TypeScript tanpa kompilasi error.
* **Aesthetics:** Cyber-Organic Harmony (Earth-tone warmth + clean tech precision).

---

## 5. Success Metrics
* Pengunjung memahami dalam kurun waktu 10 detik bahwa Roedy Rustam adalah praktisi AI Agentic teruji dengan rekam jejak industri nyata.
* Validasi pengindeksan AI crawler membaca kapabilitas AI & Agro dari `/llms.txt` dan skema JSON-LD.
* Zero build errors pada deployment Cloudflare Pages.
