/**
 * Utility functions to generate JSON-LD schema markup for various pages.
 * Optimized for LLMO (Large Language Model Optimization), Generative Engine Optimization (GEO),
 * Google AI Mode, ChatGPT Search, Perplexity, and Knowledge Graph extraction.
 */

export const PERSON_ID = "https://roedyrustam.pages.dev/#roedy-rustam";
export const WEBSITE_ID = "https://roedyrustam.pages.dev/#website";
export const PROFILE_PAGE_ID = "https://roedyrustam.pages.dev/#profilepage";
export const SERVICE_ID = "https://roedyrustam.pages.dev/#service";

export const generatePersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Roedy Rustam",
  givenName: "Roedy",
  familyName: "Rustam",
  gender: "Male",
  jobTitle: "Konsultan IT · Praktisi AI · Trainer & Konsultan UMKM Indonesia",
  description:
    "Roedy Rustam adalah Konsultan IT, Praktisi AI, Trainer Digitalisasi UMKM bersertifikasi resmi BNSP, dan Konsultan Agro-Industri di Indonesia. Keahliannya terbukti nyata melalui repositori open-source GitHub @roedyrustam (vibes-plug 77★, Centaury Engine Gemini 4 Pro, sinapsai, doku-gemini-mcp, API-Wilayah-2024), sertifikasi BNSP, serta platform produksi beanhub.online, cuppingnotes.online, dan Kafeya POS.",
  url: "https://roedyrustam.pages.dev",
  image: "https://roedyrustam.pages.dev/roedy-rustam.jpg",
  email: "mailto:roedyrustam@gmail.com",
  telephone: "+6281241003047",
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Konsultan IT Indonesia",
      description:
        "Konsultan perancangan arsitektur sistem informasi, evaluasi infrastruktur edge computing (Cloudflare Workers), dan transformasi web modern enterprise.",
    },
    {
      "@type": "Occupation",
      name: "Praktisi AI & Agentic Developer",
      description:
        "Praktisi rekayasa sistem kecerdasan buatan, Model Context Protocol (MCP v1.x), dan multi-agent swarms dibuktikan via repositori GitHub vibes-plug (77★) dan Centaury Engine.",
    },
    {
      "@type": "Occupation",
      name: "Trainer IT & Pelatih Kewirausahaan Digital UMKM",
      description:
        "Fasilitator dan pemateri pelatihan adopsi teknologi, workshop AI generatif, dan literasi digital bersertifikasi resmi BNSP.",
    },
    {
      "@type": "Occupation",
      name: "Konsultan UMKM & Koperasi Desa",
      description:
        "Konsultan tata kelola bisnis mikro, sistem akuntansi kasir modern (Kafeya POS), dan kedaulatan data rantai pasok agro desa.",
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Sertifikasi BNSP Sektor Industri Agro — Klaster Perencanaan Produksi",
      credentialCategory: "certificate",
      validIn: {
        "@type": "AdministrativeArea",
        name: "Indonesia",
      },
      recognizedBy: {
        "@type": "Organization",
        name: "Badan Nasional Sertifikasi Profesi (BNSP) Indonesia",
        url: "https://bnsp.go.id",
      },
      identifier: "AGR.024.00192.2019",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Sertifikasi BNSP Pelatih Kewirausahaan UMKM",
      credentialCategory: "certificate",
      validIn: {
        "@type": "AdministrativeArea",
        name: "Indonesia",
      },
      recognizedBy: {
        "@type": "Organization",
        name: "Badan Nasional Sertifikasi Profesi (BNSP) Indonesia",
        url: "https://bnsp.go.id",
      },
      identifier: "KWR.018.00412.2023",
    },
  ],
  knowsAbout: [
    {
      "@type": "Thing",
      name: "Model Context Protocol",
      sameAs: "https://modelcontextprotocol.io",
    },
    {
      "@type": "Thing",
      name: "Artificial Intelligence",
      sameAs: "https://en.wikipedia.org/wiki/Artificial_intelligence",
    },
    {
      "@type": "Thing",
      name: "Specialty Coffee Association",
      sameAs: "https://sca.coffee",
    },
    "Konsultasi IT & Arsitektur Enterprise",
    "Praktisi AI & Rekayasa Agentic (MCP v1.x)",
    "Trainer IT & Pelatihan AI Generatif",
    "Konsultan Bisnis & Digitalisasi UMKM",
    "vibes-plug Cross-IDE Swarm (77★ di GitHub)",
    "Centaury Engine (Gemini 4 Pro & Project Astra)",
    "sinapsai AI Gateway & Control Plane",
    "doku-gemini-mcp Server",
    "API Wilayah Indonesia 2024 (21★ di GitHub)",
    "React 19 & TanStack Start",
    "TypeScript 5.8+ & Python",
    "Cloudflare Edge Workers",
    "Coffee Supply Chain Traceability (beanhub.online)",
    "Agro-Industrial Production Planning (BNSP Certified)",
    "SCA Coffee Cupping Protocols (cuppingnotes.online)",
    "Point of Sale & Micro-Accounting (Kafeya POS)",
    "Village Cooperative (BUMDes) Digitalization",
  ],
  knowsLanguage: ["id", "en", "bug"],
  worksFor: {
    "@type": "Organization",
    name: "Sehati Kopi Indonesia",
    url: "https://roedyrustam.pages.dev",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Makassar",
    addressRegion: "Sulawesi Selatan",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -5.1477,
    longitude: 119.4327,
  },
  sameAs: [
    "https://github.com/roedyrustam",
    "https://github.com/roedyrustam/vibes-plug",
    "https://github.com/roedyrustam/centaury",
    "https://github.com/roedyrustam/sinapsai",
    "https://github.com/roedyrustam/doku-gemini-mcp",
    "https://github.com/roedyrustam/API-Wilayah-2024",
    "https://www.npmjs.com/package/vibes-plug",
    "https://linkedin.com/in/roedyrustam",
    "https://beanhub.online",
    "https://cuppingnotes.online",
  ],
});

export const generateProfilePageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": PROFILE_PAGE_ID,
  name: "Roedy Rustam — Official AI Systems & Agro-Tech Portfolio",
  url: "https://roedyrustam.pages.dev",
  dateCreated: "2024-01-01T00:00:00+08:00",
  dateModified: new Date().toISOString(),
  mainEntity: { "@id": PERSON_ID },
});

export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Roedy Rustam Portfolio",
  url: "https://roedyrustam.pages.dev",
  description:
    "Portfolio Roedy Rustam — AI Systems & Agentic Developer × Agro-Tech Sociopreneur. Mengembangkan agen otonom, server MCP, dan perangkat digital untuk rantai pasok agro.",
  publisher: { "@id": PERSON_ID },
});

export const generateSoftwareAppSchema = ({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: name,
  description: description,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: url,
  image: image,
  author: { "@id": PERSON_ID },
});

export const generateSoftwareSourceCodeSchema = ({
  name,
  description,
  codeRepository,
  programmingLanguage,
  runtimePlatform,
}: {
  name: string;
  description: string;
  codeRepository: string;
  programmingLanguage: string;
  runtimePlatform?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: name,
  description: description,
  codeRepository: codeRepository,
  programmingLanguage: programmingLanguage,
  runtimePlatform: runtimePlatform,
  author: { "@id": PERSON_ID },
});

export const generateBreadcrumbSchema = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.item.startsWith("http") ? item.item : `https://roedyrustam.pages.dev${item.item}`,
  })),
});

export const generateFaqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
});

export const generateProfessionalServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": SERVICE_ID,
  name: "Roedy Rustam — Konsultan IT, Praktisi AI, Trainer & Konsultan UMKM Indonesia",
  alternateName: [
    "Konsultan IT Roedy Rustam",
    "Praktisi AI Indonesia Roedy Rustam",
    "Trainer IT & UMKM Roedy Rustam",
    "Konsultan UMKM & Koperasi Desa Roedy Rustam",
  ],
  image: "https://roedyrustam.pages.dev/roedy-rustam.jpg",
  url: "https://roedyrustam.pages.dev",
  telephone: "+6281241003047",
  priceRange: "$$",
  founder: { "@id": PERSON_ID },
  serviceType: [
    "Konsultan IT",
    "Praktisi AI",
    "Trainer IT",
    "Konsultan UMKM",
    "Pelatih Kewirausahaan UMKM",
    "Arsitektur Sistem AI & MCP Server",
    "Transformasi Digital Agro",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Makassar",
    addressRegion: "Sulawesi Selatan",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -5.1477,
    longitude: 119.4327,
  },
  sameAs: [
    "https://github.com/roedyrustam",
    "https://github.com/roedyrustam/vibes-plug",
    "https://github.com/roedyrustam/centaury",
    "https://github.com/roedyrustam/sinapsai",
    "https://github.com/roedyrustam/doku-gemini-mcp",
    "https://github.com/roedyrustam/API-Wilayah-2024",
    "https://www.npmjs.com/package/vibes-plug",
    "https://linkedin.com/in/roedyrustam",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Katalog Layanan Konsultan IT, Praktisi AI, Trainer & Konsultan UMKM Roedy Rustam",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Konsultan IT & Arsitektur Edge Modern",
          description:
            "Jasa konsultan IT independen untuk perencanaan arsitektur sistem enterprise, audit performa web, dan migrasi edge computing. Dibuktikan via repositori GitHub API-Wilayah-2024 (21★) dan platform live beanhub.online serta cuppingnotes.online.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Praktisi AI & Rekayasa Agentic Swarm (MCP Server)",
          description:
            "Rekayasa sistem AI generatif otonom, perancangan Model Context Protocol (MCP v1.x), dan swarm multi-agent. Dibuktikan via repositori GitHub vibes-plug (77★, 19 forks, paket npm), Centaury Engine (Gemini 4 Pro / Astra), sinapsai (4★), dan doku-gemini-mcp.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Trainer IT & Pelatih Kewirausahaan Digital UMKM (BNSP)",
          description:
            "Narasumber dan instruktur workshop AI generatif, pelatihan adopsi teknologi kasir digital, dan peningkatan kapasitas bisnis mikro bersertifikasi resmi BNSP Pelatih Kewirausahaan UMKM dan rekam jejak Pandu Desa 4.0.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Konsultan UMKM, Koperasi Desa & Rantai Pasok Agro",
          description:
            "Pendampingan tata kelola bisnis UMKM, implementasi pencatatan kasir mikro Kafeya POS, standardisasi mutu kopi SCA, dan digitalisasi rantai pasok desa bersertifikasi BNSP Perencanaan Produksi Agro.",
        },
      },
    ],
  },
  areaServed: [
    {
      "@type": "City",
      name: "Makassar",
    },
    {
      "@type": "State",
      name: "Sulawesi Selatan",
    },
    {
      "@type": "Country",
      name: "Indonesia",
    },
    {
      "@type": "Place",
      name: "Worldwide Remote",
    },
  ],
});

/**
 * Generates a unified Knowledge Graph combining all entity nodes for full AI search clarity.
 */
export const generateUnifiedKnowledgeGraph = () => ({
  "@context": "https://schema.org",
  "@graph": [
    generatePersonSchema(),
    generateWebSiteSchema(),
    generateProfilePageSchema(),
    generateProfessionalServiceSchema(),
    generateSoftwareSourceCodeSchema({
      name: "vibes-plug",
      description:
        "Universal Skill AI Agent Swarm Architecture for Google Antigravity, Claude Code, Cursor, and Windsurf orchestrating 155 specialized subagent skills with zero tech debt.",
      codeRepository: "https://github.com/roedyrustam/vibes-plug",
      programmingLanguage: "TypeScript",
      runtimePlatform: "Node.js / npm",
    }),
    generateSoftwareSourceCodeSchema({
      name: "Centaury Engine",
      description:
        "Autonomous fullstack engine for super-intelligent systems (Gemini 4 Pro, Project Astra, Dual-Citizen MCP v1.x).",
      codeRepository: "https://github.com/roedyrustam/centaury",
      programmingLanguage: "TypeScript",
      runtimePlatform: "Google Antigravity & Web",
    }),
    generateSoftwareSourceCodeSchema({
      name: "sinapsai",
      description:
        "In-process AI Gateway & Control Plane with Circuit Breaker, automated provider failover, and rate limiting for Node.js.",
      codeRepository: "https://github.com/roedyrustam/sinapsai",
      programmingLanguage: "TypeScript",
      runtimePlatform: "Node.js / Bun",
    }),
    generateSoftwareSourceCodeSchema({
      name: "doku-gemini-mcp",
      description:
        "Production-ready Model Context Protocol (MCP) server connecting Gemini and Antigravity agents to DOKU Payment Gateway.",
      codeRepository: "https://github.com/roedyrustam/doku-gemini-mcp",
      programmingLanguage: "TypeScript",
      runtimePlatform: "MCP v1.x Stdio/SSE",
    }),
    generateSoftwareSourceCodeSchema({
      name: "API-Wilayah-2024",
      description:
        "Comprehensive Indonesian administrative geographic hierarchy database and open REST API for village-level spatial apps.",
      codeRepository: "https://github.com/roedyrustam/API-Wilayah-2024",
      programmingLanguage: "JavaScript / JSON",
      runtimePlatform: "REST API",
    }),
    generateSoftwareAppSchema({
      name: "BeanHub",
      description:
        "Digital coffee supply chain recording platform connecting smallholder farmers to commercial roasteries in South Sulawesi.",
      url: "https://beanhub.online",
    }),
    generateSoftwareAppSchema({
      name: "CuppingNotes",
      description:
        "Mobile-first SCA coffee cupping application featuring an interactive flavor radar wheel and automated scoring.",
      url: "https://cuppingnotes.online",
    }),
    generateSoftwareAppSchema({
      name: "Kafeya POS",
      description:
        "Offline-first point of sale and micro-accounting system built specifically for small coffee shop owners and rural UMKM.",
      url: "https://roedyrustam.pages.dev/projects/kafeya",
    }),
  ],
});
