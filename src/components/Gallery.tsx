import { useRef } from "react";

export interface GalleryItem {
  src: string;
  alt: string;
  label: string;
  caption: string;
  stage: "Problem" | "Solution" | "Result";
  orientation?: "wide" | "portrait";
}

const stageColors: Record<GalleryItem["stage"], string> = {
  Problem: "bg-clay/20 text-coffee border-clay/40",
  Solution: "bg-sage/20 text-coffee border-sage/40",
  Result: "bg-mustard/30 text-coffee border-mustard/50",
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
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
              {eyebrow}
            </div>
            <h2 className="mt-4 max-w-2xl font-display text-3xl text-coffee md:text-5xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 max-w-xl text-base leading-relaxed text-coffee/70">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll("prev")}
              aria-label="Scroll previous"
              className="grid h-12 w-12 place-items-center rounded-full border border-coffee/20 text-coffee transition-all hover:border-terracotta hover:bg-terracotta hover:text-cream"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scroll("next")}
              aria-label="Scroll next"
              className="grid h-12 w-12 place-items-center rounded-full border border-coffee/20 text-coffee transition-all hover:border-terracotta hover:bg-terracotta hover:text-cream"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/60">
          <span>Tahapan:</span>
          {(["Problem", "Solution", "Result"] as const).map((s) => (
            <span
              key={s}
              className={`rounded-full border px-3 py-1 ${stageColors[s]}`}
            >
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
        {items.map((item, i) => (
          <figure
            key={i}
            className={`group relative shrink-0 snap-start ${
              item.orientation === "portrait"
                ? "w-[260px] md:w-[340px]"
                : "w-[85vw] md:w-[640px] lg:w-[760px]"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-cream-soft">
              <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
                <span
                  className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] backdrop-blur-sm ${stageColors[item.stage]}`}
                >
                  {item.stage}
                </span>
                <span className="rounded-full border border-coffee/20 bg-cream/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/70 backdrop-blur-sm">
                  0{i + 1} / {items.length.toString().padStart(2, "0")}
                </span>
              </div>

              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] ${
                  item.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[16/10]"
                }`}
              />
            </div>

            <figcaption className="mt-5 px-1">
              <div className="font-display text-xl text-coffee md:text-2xl">{item.label}</div>
              <p className="mt-2 text-sm leading-relaxed text-coffee/70">{item.caption}</p>
            </figcaption>
          </figure>
        ))}

        <div className="shrink-0" aria-hidden style={{ width: "1px" }} />
      </div>
    </section>
  );
}
