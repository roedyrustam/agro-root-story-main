/**
 * Utility functions to generate JSON-LD schema markup for various pages.
 * Optimized for Google AI Mode, ChatGPT Search, Perplexity, and Local GEO citations.
 */

export const generatePersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Roedy Rustam",
  "jobTitle": "AI Systems & Agentic Developer × Agro-Tech Sociopreneur",
  "description": "Roedy Rustam adalah AI Systems Architect, pengembang Model Context Protocol (MCP v1.x), dan konsultan agro-industri bersertifikasi BNSP di Sulawesi Selatan yang mengintegrasikan agen AI otonom dengan rantai pasok kopi hulu-hilir.",
  "url": "https://roedyrustam.pages.dev",
  "image": "https://roedyrustam.pages.dev/logo.jpg",
  "knowsAbout": [
    "Model Context Protocol (MCP)",
    "Autonomous Agent Workflows",
    "Multi-Agent Swarm Orchestration",
    "React 19 & TanStack Start",
    "TypeScript & Python",
    "Cloudflare Edge Workers",
    "Coffee Supply Chain Traceability",
    "Agro-Industrial Production Planning",
    "SCA Coffee Cupping Protocols",
    "Village Cooperative (BUMDes) Digitalization"
  ],
  "knowsLanguage": ["id", "en", "bug"],
  "worksFor": {
    "@type": "Organization",
    "name": "Sehati Kopi Indonesia",
    "url": "https://roedyrustam.pages.dev"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Makassar",
    "addressRegion": "Sulawesi Selatan",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -5.1477,
    "longitude": 119.4327
  },
  "sameAs": [
    "https://beanhub.online",
    "https://cuppingnotes.online",
    "https://linkedin.com/in/roedyrustam",
    "https://github.com/roedyrustam"
  ]
});

export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Roedy Rustam Portfolio",
  "url": "https://roedyrustam.pages.dev",
  "description": "Portfolio Roedy Rustam — AI Systems & Agentic Developer × Agro-Tech Sociopreneur. Mengembangkan agen otonom, server MCP, dan perangkat digital untuk rantai pasok agro.",
  "publisher": {
    "@type": "Person",
    "name": "Roedy Rustam"
  }
});

export const generateSoftwareAppSchema = ({
  name,
  description,
  url,
  image
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": name,
  "description": description,
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "url": url,
  "image": image,
  "author": {
    "@type": "Person",
    "name": "Roedy Rustam"
  }
});

export const generateBreadcrumbSchema = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://roedyrustam.pages.dev${item.item}`
  }))
});

export const generateFaqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.answer
    }
  }))
});

export const generateProfessionalServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Roedy Rustam — AI Systems & Agentic Developer × Agro-Tech Sociopreneur",
  "image": "https://roedyrustam.pages.dev/logo.jpg",
  "url": "https://roedyrustam.pages.dev",
  "telephone": "+6281241003047",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Makassar",
    "addressRegion": "Sulawesi Selatan",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -5.1477,
    "longitude": 119.4327
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Layanan Konsultasi & Rekayasa Sistem AI Roedy Rustam",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Arsitektur Model Context Protocol (MCP Server)",
          "description": "Pembuatan dan standardisasi server MCP v1.x untuk menghubungkan LLM agents (Claude, Cursor, Gemini) dengan database internal, ERP, dan telemetri bisnis."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Orkestrasi Multi-Agent Swarm",
          "description": "Perancangan workflow agen AI kolaboratif otonom (LangGraph, State Machine) untuk otomasi alur logistik, analisis data, dan pelaporan terpadu."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pengembangan Web Modern & Edge Cloudflare",
          "description": "Pembangunan aplikasi web produksi ultra-responsif dengan React 19, TanStack Start (SSR), TypeScript, dan deployment Cloudflare Workers."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Konsultasi Rantai Pasok Kopi & Perencanaan Agro (BNSP)",
          "description": "Pendampingan teknis mutu kopi SCA CVA, sertifikasi perencanaan produksi agro BNSP, dan implementasi kedaulatan data desa (BUMDes)."
        }
      }
    ]
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Sulawesi Selatan"
    },
    {
      "@type": "Country",
      "name": "Indonesia"
    },
    {
      "@type": "Place",
      "name": "Worldwide Remote"
    }
  ]
});
