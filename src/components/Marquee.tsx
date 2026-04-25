const items = [
  "Socialpreneurship",
  "Agro Operations",
  "Community Empowerment",
  "Digital Solutions",
  "Coffee Supply Chain",
  "BNSP Certified",
  "Village Consultant",
  "UMKM Trainer",
  "React & SQL",
  "Bugis · Indonesia",
];

export function Marquee() {
  const all = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-coffee/10 bg-cream-soft py-6">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream-soft to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream-soft to-transparent" />
      
      <div className="flex w-max animate-marquee gap-12">
        {all.map((item, i) => (
          <div key={i} className="flex items-center gap-12 whitespace-nowrap">
            <span className="font-display text-2xl italic text-coffee/80 md:text-3xl">{item}</span>
            <span className="flex h-2 w-2 rounded-full bg-terracotta/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
