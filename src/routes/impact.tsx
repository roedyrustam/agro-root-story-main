import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Impact } from "@/components/Impact";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Dampak — Roedy Rustam" },
      { name: "description", content: "Dampak nyata di berbagai wilayah Indonesia: Barru, Toraja, Enrekang, Sinjai, dan pemberdayaan desa nasional." },
      { property: "og:title", content: "Dampak Nyata di Lapangan — Roedy Rustam" },
      { property: "og:description", content: "Dampingan wilayah Sulawesi Selatan dan konsultansi pengembangan desa di Indonesia." },
      { property: "og:image", content: "/og-impact.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-impact.jpg" },
    ],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      
      {/* Impact Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-background overflow-hidden border-b border-border">
        {/* Subtle background element */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(211,93,71,0.03),transparent_50%)]" />

        <div className="content-container">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-terracotta">
            Dampak · Komunitas
          </div>
          <h1 className="mt-8 font-display text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.9] text-coffee text-balance">
            Membangun <br />
            <span className="italic text-terracotta">kesejahteraan</span> <br />
            dari <span className="italic">hulu.</span>
          </h1>
          
          <div className="mt-12 max-w-2xl">
            <p className="text-xl leading-relaxed text-coffee/80">
              Bagi saya, dampak bukan sekadar angka di laporan tahunan. Dampak adalah ketika seorang petani memiliki daya tawar lebih tinggi, dan sebuah desa mampu mengelola datanya sendiri untuk masa depan yang lebih mandiri.
            </p>
          </div>
        </div>
      </section>

      <Impact />

      {/* Impact Values Section */}
      <section className="py-24 md:py-32 bg-coffee text-cream overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full bg-mustard/10 blur-[80px]" />
        
        <div className="content-container">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-mustard">Prinsip Dampak</div>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-cream max-w-4xl">
            Tiga pilar yang menjaga <br />
            <span className="italic">keberlanjutan di lapangan.</span>
          </h2>
          
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            <div className="space-y-4">
              <div className="font-mono text-sm text-mustard">01</div>
              <h3 className="font-display text-2xl">Keadilan Harga</h3>
              <p className="text-cream/70 leading-relaxed">
                Memastikan transparansi rantai pasok agar nilai ekonomi terdistribusi lebih adil kepada mereka yang berkeringat di kebun.
              </p>
            </div>
            <div className="space-y-4">
              <div className="font-mono text-sm text-mustard">02</div>
              <h3 className="font-display text-2xl">Kemandirian Digital</h3>
              <p className="text-cream/70 leading-relaxed">
                Membangun kapasitas warga desa untuk menguasai teknologi, bukan hanya menjadi konsumen aplikasi yang mereka tidak mengerti.
              </p>
            </div>
            <div className="space-y-4">
              <div className="font-mono text-sm text-mustard">03</div>
              <h3 className="font-display text-2xl">Pelestarian Budaya</h3>
              <p className="text-cream/70 leading-relaxed">
                Menghormati tata kelola adat dan kearifan lokal dalam setiap intervensi teknologi dan pengembangan ekonomi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <blockquote className="font-display text-[clamp(1.8rem,4.5vw,3rem)] leading-[1.2] text-coffee italic">
            "Pemberdayaan bukan tentang memberi ikan atau kail, tapi tentang memastikan mereka memiliki hak atas kolamnya sendiri."
          </blockquote>
          <div className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
            — Roedy Rustam
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
