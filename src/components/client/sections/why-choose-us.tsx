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
    <section id="tentang" className="scroll-mt-24 bg-white px-4 py-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-center">
          
          {/* Kolom Kiri: Gambar Representatif */}
          <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-xl sm:h-80 lg:h-[620px] lg:w-5/12">
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
              <h2 className="mb-4 font-heading text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Kenapa Memilih Lentera Outdoor?
              </h2>
              <p className="font-jakarta text-foreground/70 text-sm md:text-lg leading-relaxed max-w-2xl">
                Peralatan terawat dan layanan tepercaya kami siap membuat setiap perjalanan alammu lebih aman, nyaman, dan berkesan
              </p>
            </div>
            
            {/* Grid 2x2 Fitur */}
            <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
              {FEATURES.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={idx} 
                    className="flex flex-col border-t border-border py-5 md:py-6"
                  >
                    {/* Ikon dengan border bundar khas desain referensi */}
                    <div className="mb-3 text-primary">
                      <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="mb-2 font-heading text-lg font-semibold">
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
