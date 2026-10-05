# Agro Root Story — Design & Skill Orchestration Document (BLUEPRINT.md)
> Versi 2.1.0: Perombakan Total UI/UX — Dark Obsidian & Luminous Neural Architecture

## 1. Understanding Summary
* **Core Goal:** Merombak total seluruh desain UI dan UX situs portofolio Roedy Rustam menjadi standar **Dark Obsidian & Luminous Neural** (Linear.app / Vercel Enterprise level) yang memadukan wibawa kecerdasan buatan otonom dengan bukti dampak riil di sektor agro dan komunitas desa.
* **Target Audience:** Tech founders, engineering leads, enterprise clients, partner bisnis AI/software, dan komunitas kopi/desa global.
* **Key Visual Architecture:**
  - Background: Deep Obsidian Espresso (`#0a0807` / `oklch(0.12 0.015 50)`).
  - Cards & Glass: Frosted Dark Glassmorphism (`backdrop-blur-xl`, `border-white/10`, glow hover).
  - Accents: Luminous Amber (kejujuran api roasting/kopi) & Radiant Emerald (live node status).
* **Key Page Sections:**
  1. **Bento Grid Hero:** Live node status, headline tajam, live telemetry card, dan 3 metric counter riil.
  2. **Interactive MCP Console Preview:** Simulasi tool-call JSON-RPC 2.0 yang responsif.
  3. **Tiga Pilar Layanan:** Rekayasa Agen AI & MCP, Arsitektur Edge Web, dan Transformasi Rantai Pasok Agro.
  4. **Holographic Projects Bento:** 6 karya digital dengan tab filter interaktif.
  5. **Interactive Scope Estimator:** Kalkulator blueprint kebutuhan klien yang langsung terhubung ke WhatsApp.
  6. **GEO-Optimized FAQ Section:** Q&A terstruktur di bawah 50 kata untuk kutipan Google AI Mode & Perplexity.

---

## 2. Technical Architecture & Skill Delegation

### 2.1 Design System & Tokens (`design-system-architect`, `tailwind-expert`)
* **Tokens CSS (`src/styles.css`):**
  - `--background`: Deep Obsidian Espresso (`#0a0807`).
  - `--foreground`: Crisp off-white (`#f5f5f4`).
  - `--card`: Dark frosted glass (`rgba(20, 18, 16, 0.75)`).
  - `--border`: `rgba(255, 255, 255, 0.08)`.
  - `--terracotta`: Vibrant warm terracotta glow (`#e05d44`).
  - `--mustard`: Luminous Amber (`#f59e0b`).
  - `--sage`: Radiant Emerald (`#10b981`).
* **Typography:** Plus Jakarta Sans (Headings), Rubik (Body text), JetBrains Mono (Badges & Code).

### 2.2 Frontend Execution (`senior-frontend`, `anti-slop`)
* **Framework:** React 19 + TanStack Start (SSR) + `@tanstack/react-router`.
* **Motion & Smooth Scroll:** Lenis smooth scrolling dan CSS spring animations.
* **Performance:** Skor Core Web Vitals tinggi (LCP < 1.0s, INP < 50ms, CLS 0).

---

## 3. Decision Log

| # | Keputusan | Alternatif Dipertimbangkan | Rasional & Standar Web Modern | Skill Terkait |
|---|-----------|---------------------------|-------------------------------|---------------|
| 1 | Dark Obsidian & Luminous Neural | Light Mode Rustic / Monokrom Kaku | Memberikan wibawa teknologi tingkat tinggi bagi klien korporat tanpa menghilangkan jiwa kehangatan kopi. | `design-system-architect`, `ui-ux-pro-max` |
| 2 | Bento Grid Hero dengan Telemetri Riil | Hero Sederhana 1 Kolom | Menampilkan kredibilitas instan (20+ tahun, 6+ platform, 4700+ petani) dalam 5 detik pertama. | `senior-frontend`, `anti-slop` |
| 3 | Holographic Glow Bento Cards | Flat Grid Tradisional | Meningkatkan dwell time dan interaktivitas pengunjung melalui efek hover modern. | `design-system-architect` |
| 4 | Interactive Estimator + WhatsApp Action | Form Kontak Statis | Mengubah pengunjung pasif menjadi prospek klien aktif dengan estimasi blueprint instan. | `senior-frontend` |
| 5 | Keseragaman Seluruh Sub-halaman | Hanya Beranda yang Gelap | Memastikan konsistensi pengalaman visual 100% di setiap rute situs. | `senior-frontend` |
