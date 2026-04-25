/**
 * Utility functions to generate JSON-LD schema markup for various pages.
 */

export const generatePersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Roedy Rustam",
  "jobTitle": "Sociopreneur & Agro Digital Developer",
  "description": "Sociopreneur yang membangun ekosistem kopi Sulawesi & perangkat digital untuk UMKM agro.",
  "url": "https://roedyrustam.pages.dev",
  "image": "https://roedyrustam.pages.dev/logo.jpg",
  "knowsAbout": [
    "Coffee Supply Chain",
    "Sociopreneur",
    "Agro Operations",
    "React Development",
    "UMKM Digital Solutions",
    "Village Consultation",
    "Industrial Engineering"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Sehati Kopi Indonesia"
  },
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Sulawesi Selatan",
    "addressCountry": "ID"
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
  "description": "Portfolio Roedy Rustam — Sociopreneur yang membangun ekosistem kopi Sulawesi & perangkat digital untuk UMKM agro.",
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

export const generateProfessionalServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Roedy Rustam — Sociopreneur × Agro × Digital",
  "image": "https://roedyrustam.pages.dev/logo.jpg",
  "url": "https://roedyrustam.pages.dev",
  "telephone": "+628114441400",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Makassar",
    "addressRegion": "Sulawesi Selatan",
    "addressCountry": "ID"
  },
  "serviceType": [
    "Digitalisasi UMKM Agro",
    "Konsultasi Rantai Pasok Kopi",
    "Pelatihan Digital Desa",
    "Fullstack Development"
  ],
  "areaServed": {
    "@type": "State",
    "name": "Sulawesi Selatan"
  }
});
