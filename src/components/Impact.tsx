import { SectionLabel } from "./SectionLabel";
import landscape from "../assets/impact-landscape.jpg";

export function Impact() {
  return (
    <section id="impact" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel number="05" label="Dampak & Komunitas" />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={landscape}
                alt="Lanskap perkebunan kopi terasering Sulawesi saat matahari terbit"
                width={1600}
                height={900}
                loading="lazy"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/40 via-transparent to-transparent" />
              <blockquote className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <p className="max-w-md font-display text-xl italic leading-snug text-cream md:text-2xl">
                  "Kopi yang baik dimulai dari hubungan yang adil — dengan tanah, dengan petani,
                  dengan cerita yang ditulis bersama."
                </p>
              </blockquote>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-coffee">
              Lima wilayah, <br />
              <span className="italic text-terracotta">satu janji.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-coffee/75">
              Pekerjaan saya tersebar di lima geografi kopi Sulawesi Selatan. Setiap tempat punya
              karakter biji, tantangan logistik, dan komunitas yang berbeda — tapi prinsipnya sama:
              transparansi di hulu, kualitas di hilir.
            </p>

            <div className="mt-10 space-y-3">
              {[
                {
                  name: "Makassar",
                  note: "Ibu Kota Provinsi · Roastery, Coffee Shop & Supply Chain",
                },
                { name: "Barru", note: "Pesisir & dataran rendah · pengembangan komoditas baru" },
                { name: "Toraja", note: "Highland klasik · arabika premium turun-temurun" },
                { name: "Enrekang", note: "Dataran tinggi · Arabika Specialty · Natural & Honey" },
                { name: "Malino", note: "Pusat edukasi & promosi kopi Sulsel · Sehati Kopi Malino" },
                { name: "Sinjai", note: "Komunitas adat · tata kelola BUMMA & akses pasar" },
              ].map((r, i) => (
                <div
                  key={r.name}
                  className="group flex items-center justify-between gap-5 rounded-2xl border border-transparent bg-transparent p-4 transition-all duration-300 hover:border-coffee/10 hover:bg-cream-soft hover:shadow-sm"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coffee/5 font-mono text-xs text-terracotta transition-transform duration-500 group-hover:scale-110 group-hover:bg-terracotta/10">
                      0{i + 1}
                    </div>
                    <div>
                      <div className="font-display text-2xl text-coffee transition-colors group-hover:text-terracotta">
                        {r.name}
                      </div>
                      <div className="mt-1 text-sm text-coffee/70">{r.note}</div>
                    </div>
                  </div>
                  <div className="opacity-0 transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-100">
                    <span className="text-terracotta">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
