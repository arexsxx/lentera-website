import Image from "next/image";
import { Tent, ShieldCheck, Calendar, Compass } from "lucide-react";

const FEATURES = [
  {
    title: "Pilihan Alat Terlengkap",
    description: "Mulai dari tenda, carrier, hingga alat masak dan sepatu gunung, temukan berbagai perlengkapan dari merek andalan untuk segala rute pendakianmu.",
    icon: Tent,
  },
  {
    title: "Bersih & Terawat Sempurna",
    description: "Setiap barang selalu dipastikan kelayakannya, dicek, dan dicuci bersih setelah dipakai. Kamu bisa langsung fokus muncak tanpa khawatir soal alat rusak.",
    icon: ShieldCheck,
  },
  {
    title: "Durasi Sewa Fleksibel",
    description: "Hitungan sewa harian yang mudah disesuaikan dengan jadwalmu. Sangat cocok untuk camping ceria akhir pekan maupun ekspedisi panjang berhari-hari.",
    icon: Calendar,
  },
  {
    title: "Rekomendasi Tepat",
    description: "Bingung butuh alat kapasitas berapa? Tim kami siap membantu merekomendasikan perlengkapan yang paling pas dengan destinasi dan jumlah rombonganmu.",
    icon: Compass,
  },
];

export function WhyChooseUs() {
  return (
    <section id="tentang" className="scroll-mt-24 py-12 md:py-28 px-4 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-center">
          
          {/* Kolom Kiri: Gambar Representatif */}
          <div className="w-full lg:w-5/12 relative h-56 sm:h-80 lg:h-187.5 rounded-2xl md:rounded-4xl overflow-hidden shrink-0">
            <Image 
              src="/images/hero2.png"
              alt="Perlengkapan pendakian Lentera Outdoor"
              fill 
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Kolom Kanan: Konten Utama & Grid Fitur */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            
            <div className="mb-6 lg:mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">Teman setiap perjalanan</p>
              <h2 className="font-heading text-2xl md:text-4xl lg:text-[42px] font-bold text-foreground mb-4 leading-tight tracking-tight">
                Kenapa Memilih Lentera Outdoor?
              </h2>
              <p className="font-jakarta text-foreground/70 text-sm md:text-lg leading-relaxed max-w-2xl">
                Peralatan terawat dan layanan tepercaya kami siap membuat setiap perjalanan alammu lebih aman, nyaman, dan berkesan
              </p>
            </div>
            
            {/* Grid 2x2 Fitur */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {FEATURES.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={idx} 
                    className="flex flex-col p-5 md:p-7 bg-background border border-border/40 rounded-2xl md:rounded-3xl transition-colors hover:border-primary/25"
                  >
                    {/* Ikon dengan border bundar khas desain referensi */}
                    <div className="h-11 w-11 md:h-12 md:w-12 rounded-xl bg-primary/10 border border-primary/10 flex items-center justify-center mb-4 md:mb-6">
                      <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    
                    <p className="font-jakarta text-foreground/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
