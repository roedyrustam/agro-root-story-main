import { useRef } from "react";

export interface GalleryItem {
  src: string;
  alt: string;
  label: string;
  caption: string;
  stage: "Problem" | "Solution" | "Result";
  orientation?: "wide" | "portrait";
}

const stageConfig: Record<GalleryItem["stage"], { bg: string; dot: string; border: string }> = {
  Problem: { bg: "bg-clay/10", dot: "bg-clay", border: "border-clay/30" },
  Solution: { bg: "bg-sage/10", dot: "bg-sage", border: "border-sage/30" },
  Result: { bg: "bg-mustard/10", dot: "bg-mustard", border: "border-mustard/30" },
};

interface Props {
  items: GalleryItem[];
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function Gallery({ items, eyebrow = "Galeri", title, subtitle }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-block rounded-full bg-terracotta/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-terracotta border border-terracotta/10">
              {eyebrow}
            </div>
            <h2 className="mt-6 max-w-2xl font-display text-3xl text-coffee md:text-5xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 max-w-xl text-base leading-relaxed text-coffee/70">{subtitle}</p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll("prev")}
              aria-label="Scroll previous"
              className="group grid h-12 w-12 place-items-center rounded-full border border-coffee/15 text-coffee transition-all duration-300 hover:-translate-y-1 hover:border-terracotta hover:bg-terracotta hover:text-cream hover:shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("next")}
              aria-label="Scroll next"
              className="group grid h-12 w-12 place-items-center rounded-full border border-coffee/15 text-coffee transition-all duration-300 hover:-translate-y-1 hover:border-terracotta hover:bg-terracotta hover:text-cream hover:shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Stage legend */}
        <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/50">
          <span>Tahapan:</span>
          {(["Problem", "Solution", "Result"] as const).map((s) => (
            <span key={s} className={`flex items-center gap-2 rounded-full border px-4 py-1.5 ${stageConfig[s].bg} ${stageConfig[s].border}`}>
              <span className={`h-2 w-2 rounded-full ${stageConfig[s].dot}`} />
              {s}
            </span>
          ))}
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-8 md:px-10 [scrollbar-width:thin]"
        style={{ scrollPaddingLeft: "1.5rem" }}
      >
        {items.map((item, i) => {
          const stage = stageConfig[item.stage];
          return (
            <figure
              key={i}
              className={`group relative shrink-0 snap-start ${
                item.orientation === "portrait"
                  ? "w-[260px] md:w-[340px]"
                  : "w-[85vw] md:w-[640px] lg:w-[760px]"
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl border border-coffee/10 bg-cream-soft transition-all duration-500 hover:border-coffee/20 hover:shadow-[0_15px_30px_-12px_rgba(44,36,27,0.12)]">
                {/* Badges */}
                <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
                  <span
                    className={`flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] backdrop-blur-md ${stage.bg} ${stage.border} text-coffee`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${stage.dot}`} />
                    {item.stage}
                  </span>
                  <span className="rounded-full border border-cream/40 bg-cream/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/60 backdrop-blur-md">
                    0{i + 1} / {items.length.toString().padStart(2, "0")}
                  </span>
                </div>

                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                    item.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[16/10]"
                  }`}
                />

                {/* Hover overlay gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-coffee/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <figcaption className="mt-6 px-1">
                <div className="font-display text-xl text-coffee transition-colors group-hover:text-terracotta md:text-2xl">{item.label}</div>
                <p className="mt-2 text-sm leading-relaxed text-coffee/60">{item.caption}</p>
              </figcaption>
            </figure>
          );
        })}

        <div className="shrink-0" aria-hidden style={{ width: "1px" }} />
      </div>
    </section>
  );
}
