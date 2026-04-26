interface VideoDividerProps {
  title?: string;
  subtitle?: string;
}

export function VideoDivider({ 
  title = "Menghargai setiap proses, dari pucuk pohon hingga tetes terakhir.",
  subtitle = "Sebuah narasi tentang kejujuran dalam rantai pasok kopi Sulawesi."
}: VideoDividerProps) {

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden border-y border-coffee/10 bg-coffee">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 h-full w-full pointer-events-none">
        <iframe
          src="https://www.youtube.com/embed/LZ0Z4UE6Kg8?autoplay=1&mute=1&controls=0&loop=1&playlist=LZ0Z4UE6Kg8&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1"
          className="absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-60 brightness-[0.7]"
          allow="autoplay; encrypted-media"
          title="Background Video"
        />
      </div>

      {/* Decorative Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-coffee/40 via-transparent to-coffee/40" />
      
      {/* Content Overlay */}
      <div className="relative flex h-full w-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl space-y-6">
          <div className="flex justify-center">
             <div className="inline-flex items-center gap-3 rounded-full border border-cream/20 bg-cream/5 px-5 py-2 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mustard opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-mustard"></span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/80">Cinematic Manifesto</span>
             </div>
          </div>
          
          <h2 className="font-display text-[clamp(1.8rem,5vw,3.5rem)] leading-[1.1] text-cream text-balance drop-shadow-2xl">
            {title}
          </h2>
          
          <p className="mx-auto max-w-xl font-sans text-sm md:text-base leading-relaxed text-cream/70 text-pretty">
            {subtitle}
          </p>

          <div className="pt-4">
             <div className="h-12 w-px bg-gradient-to-b from-mustard via-mustard/20 to-transparent mx-auto animate-draw-line" />
          </div>
        </div>
      </div>

      {/* Film Grain Effect for extra texture */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay grain" />
    </section>
  );
}
