const items = [
  "Industrial Engineering",
  "Agro Operations",
  "Community Empowerment",
  "Digital Solutions",
  "Coffee Supply Chain",
  "BNSP Certified",
  "React & SQL",
  "Bugis · Indonesia",
];

export function Marquee() {
  const all = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-cream-soft py-5">
      <div className="flex w-max animate-marquee gap-12">
        {all.map((item, i) => (
          <div key={i} className="flex items-center gap-12 whitespace-nowrap">
            <span className="font-display text-2xl italic text-coffee md:text-3xl">{item}</span>
            <span className="text-terracotta">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
