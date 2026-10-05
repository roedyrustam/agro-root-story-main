# Agro Root Story — Design & Skill Orchestration Document (BLUEPRINT.md)

## 1. Understanding Summary
* **Core Goal:** Mereposisi portofolio personal Roedy Rustam menjadi profil **Dual-Engine / Hybrid**: *AI Systems & Agentic Developer × Agro-Tech Sociopreneur*, menampilkan keahlian dalam rekayasa agen otonom, Model Context Protocol (MCP), dan pengembangan fullstack modern yang terhubung langsung dengan dampak industri riil (rantai pasok kopi & pemberdayaan ekonomi desa).
* **Target Audience:** Tech recruiters, venture/startup partners, klien AI/software architecture, pemangku kepentingan agro/koperasi desa, dan komunitas teknologi.
* **Key User Flows:**
  1. Visitor masuk ke beranda -> Melihat Hero dengan status terminal aktif agen AI dan headline dual-engine.
  2. Visitor mengeksplorasi preview interaktif konsol MCP Tool-Call -> Mengamati protokol data JSON-RPC kopi.
  3. Visitor menjelajahi grid 6 karya digital: 2 proyek AI/Agentic unggulan baru (*AgroAgent MCP Server*, *Multi-Agent Swarm Orchestrator*) dan 4 proyek agro-tech (*Beanhub*, *CuppingNotes*, *Kafeya POS*, *Pandu Desa*).
  4. Visitor membaca 3 pilar layanan terpadu (*Agentic AI*, *Modern Fullstack*, *Agro Empowerment*).
  5. AI crawler (Perplexity, ChatGPT, Claude) membaca `/llms.txt` dan Schema JSON-LD yang terstruktur rapi.
* **Non-Goals:**
  - Tidak merombak fondasi framework (tetap mempertahankan TanStack Start SSR + Cloudflare Pages).
  - Tidak menghapus riwayat sejarah komunitas (Jirak Celebes, JRKI, Sehati Kopi Indonesia tetap diabadikan di halaman Journey).

---

## 2. Technical Architecture & Skill Delegation

### 2.1 Rendering & Frontend Framework (`senior-frontend`, `tailwind-expert`)
* **Stack:** TanStack Start v1.167+, React 19.2+, Tailwind CSS v4.2+.
* **Runtime Target:** Cloudflare Pages Workers SSR (`_worker.js`).
* **Routing:** `@tanstack/react-router` dengan type-safe route generation.
* **Aesthetics:** *Cyber-Organic Harmony* — perpaduan palet earth-tone (Coffee, Terracotta, Sage, Mustard, Cream) dengan aksen terminal tech (mono badges, live node pulse, glow borders).

### 2.2 AI & Intelligent Systems (`mcp-server-architect`, `ai-llm-integration-expert`)
* **Protokol:** Model Context Protocol (MCP v1.x) standard specification.
* **Flagship Proyek AI:**
  1. **AgroAgent / CoffeeSupply MCP Server:** JSON-RPC tool schema & resource endpoints untuk inventori kebun kopi, batching, dan grading.
  2. **Multi-Agent Swarm Orchestrator:** Sistem kolaboratif multi-agen (Scout, Cupping Analyst, Logistics Router, Reporting Agent).
* **Komponen Interaktif:** `McpConsolePreview.tsx` untuk simulasi panggilan tool di antarmuka web.

### 2.3 SEO, GEO & AI Engine Optimization (`seo`)
* **JSON-LD Structured Data:** Schema `Person` dan `ProfessionalService` yang diperluas dengan keahlian AI dan komputasi agen.
* **LLM Engine Discovery:** Pembaruan menyeluruh file `public/llms.txt`, `robots.txt`, dan `sitemap.xml`.

---

## 3. Component & UI Architecture

### 3.1 Komponen Beranda (`src/components/`)
* `Hero.tsx`: Headline dual-engine, live agent status pill, magnetic CTA button.
* `McpConsolePreview.tsx`: *(Komponen Baru)* Konsol simulasi pemanggilan tool MCP interaktif.
* `Projects.tsx`: 6 kartu proyek modular dengan hover blur liquid, badge kategori, dan stack chip mono.
* `Services.tsx`: 3 pilar layanan terpadu (Agentic AI, Modern Web, Agro Impact).
* `Skills.tsx`: Klasifikasi keahlian teknis (AI/LLM/MCP, Frontend/Fullstack, Agro Engineering).
* `Nav.tsx` & `Footer.tsx`: Navigasi responsif dan footer terpadu.

### 3.2 Halaman & Rute Detail (`src/routes/`)
* `index.tsx`: Halaman utama portofolio.
* `projects.agroagent-mcp.tsx`: *(Rute Baru)* Studi kasus mendalam arsitektur MCP Server.
* `projects.agent-swarm.tsx`: *(Rute Baru)* Studi kasus arsitektur orkestrasi multi-agen.
* `projects.beanhub.tsx`: Studi kasus platform rantai pasok kopi.
* `projects.cuppingnotes.tsx`: Studi kasus platform evaluasi mutu kopi SCA.
* `about.tsx`, `journey.tsx`, `experience.tsx`, `impact.tsx`, `contact.tsx`: Diperbarui untuk merefleksikan profil terkini.

---

## 4. Decision Log

| # | Keputusan | Alternatif Dipertimbangkan | Rasional & Prinsip Web Modern | Skill yang Diorkestrasikan |
|---|-----------|---------------------------|-------------------------------|----------------------------|
| 1 | Dual-Engine / Hybrid Positioning | AI-First Murni / Agro-First Tradisional | Memanfaatkan keunikan pembeda langka: arsitek AI yang memiliki domain knowledge dan dampak riil di sektor riil. | `brainstorming`, `prd-architect` |
| 2 | Unified Cyber-Organic Aesthetics | Dual-Track View Switcher / Dark Dev Theme | Menyajikan satu cerita visual utuh tanpa memecah audiens atau menambah kompleksitas state UI. | `design-system-architect`, `tailwind-expert` |
| 3 | Interactive MCP Console Preview | Teks statis / Screenshot statis | Memberikan bukti teknis interaktif (*tangible interactive proof*) tentang pemahaman mendalam MCP v1.x. | `mcp-server-architect`, `senior-frontend` |
| 4 | Penambahan 2 Rute Proyek AI Baru | Hanya memperbarui deskripsi di beranda | Memastikan deep-linking, SEO teknis, dan keterbacaan mendalam untuk reviewer/recruiter tingkat lanjut. | `senior-frontend`, `seo` |
| 5 | Pembaruan Komprehensif `llms.txt` | Hanya meta tags HTML standar | Mengoptimalkan Generative Engine Optimization (GEO) untuk agen AI masa depan. | `seo` |

---

## 5. Penilaian Risiko & Mitigasi
* **Risiko 1 (Route Generation Mismatch):** Penambahan file rute baru pada TanStack Start berpotensi memerlukan regenerasi `routeTree.gen.ts`.
  * *Mitigasi:* Verifikasi kompilasi Vite dan pastikan plugin TanStack Router men-generate tree rute dengan sempurna.
* **Risiko 2 (Bundle Bloat):** Penambahan komponen interaktif baru dapat memperbesar ukuran bundel JavaScript.
  * *Mitigasi:* Zero external heavy libs; MCP Console diimplementasikan murni dengan React State lokal dan styling native Tailwind v4.
* **Risiko 3 (Inkonsistensi Tone of Voice):** Perubahan narasi ke arah AI bisa terdengar dingin jika mengikis empati kebun dan desa.
  * *Mitigasi:* Menggunakan pendekatan *Cyber-Organic* di mana teknologi agen AI diposisikan sebagai akselerator kedaulatan petani dan efisiensi rantai pasok.

---

## 6. Execution Roadmap (Fase Implementasi)
1. **Fase 1 (SEO & AI Discovery):** Update `public/llms.txt`, `src/lib/schema.ts`, dan meta tags.
2. **Fase 2 (Komponen Beranda Core):** Update `Hero.tsx`, implementasi `McpConsolePreview.tsx`, perbarui data `Projects.tsx`, `Services.tsx`, dan `Skills.tsx`.
3. **Fase 3 (Rute Studi Kasus AI):** Buat `projects.agroagent-mcp.tsx` dan `projects.agent-swarm.tsx`.
4. **Fase 4 (Sub-Halaman Update):** Perbarui `about.tsx`, `experience.tsx`, dan `journey.tsx`.
5. **Fase 5 (Testing & Build Hardening):** Lakukan typecheck (`npx tsc --noEmit`), test build (`npm run build`), dan audit visual responsif.
