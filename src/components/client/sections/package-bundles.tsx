import Image from "next/image";
import { CheckCircle } from "lucide-react";

const BUNDLE_PACKAGES = [
  {
    name: "Keluarga Bahagia 6 Orang",
    image: "/images/bundle-6.jpg", // Pastikan menambahkan gambar dengan nama ini di folder public/images/
    items: [
      "1 Tenda Kapasitas 6 Orang",
      "1 Lampu tenda + baterai",
      "1 Cooking Set / Nesting",
      "6 Headlamp + Baterai",
      "1 Kompor Portable",
      "1 Tiang Flaysheet",
      "6 Sleeping Bag",
      "1 Carrier 60 liter",
      "2 Gas Portable",
      "1 Flasyheet",
      "6 Matras",
      "15 Pasak"
    ],
  },
  {
    name: "Keluarga Bahagia 4 Orang",
    image: "/images/bundle-4.jpg", // Pastikan menambahkan gambar dengan nama ini di folder public/images/
    items: [
      "1 Tenda Kapasitas 4 Orang",
      "1 Lampu tenda + baterai",
      "1 Cooking Set / Nesting",
      "4 Headlamp + Baterai",
      "1 Kompor Portable",
      "1 Tiang Flaysheet",
      "4 Sleeping Bag",
      "1 Carrier 60 liter",
      "1 Gas Portable",
      "1 Flasyheet",
      "4 Matras",
      "15 Pasak"
    ],
  },
  {
    name: "Keluarga Bahagia 2 Orang",
    image: "/images/bundle-2.jpg", 
    items: [
      "1 Tenda Kapasitas 2 Orang",
      "1 Lampu tenda + baterai",
      "1 Cooking Set / Nesting",
      "2 Headlamp + Baterai",
      "1 Kompor Portable",
      "2 Sleeping Bag",
      "1 Carrier 60 liter",
      "1 Gas Portable",
      "2 Matras",
      "15 Pasak"
    ],
  }
];

export function PackageBundles() {
  return (
    <section id="paket" className="scroll-mt-24 py-12 md:py-28 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16 max-w-3xl mx-auto flex flex-col items-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">Pergi bersama, lebih praktis</p>
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Paket Hemat & Praktis
          </h2>
          <p className="font-jakarta text-foreground/70 text-sm md:text-lg leading-relaxed">
            Tidak perlu bingung menyusun daftar bawaan. Pilih paket bundling kami yang sudah disesuaikan dengan jumlah rombonganmu. Lebih lengkap, lebih hemat
          </p>
        </div>

        {/* Grid Bundling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {BUNDLE_PACKAGES.map((pkg, idx) => (
            <div key={idx} className="flex flex-col">
              
              {/* Thumbnail Gambar */}
              <div className="relative w-full aspect-4/3 rounded-2xl md:rounded-4xl overflow-hidden mb-5 md:mb-8 bg-foreground/5 shadow-sm">
                <Image 
                  src={pkg.image} 
                  alt={`Paket ${pkg.name}`}
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Judul Paket */}
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                {pkg.name}
              </h3>
              
              {/* Daftar Perlengkapan */}
              <ul className="space-y-3.5 font-jakarta text-sm md:text-base text-foreground/70">
                {pkg.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <CheckCircle 
                      className="h-5 w-5 text-white fill-primary shrink-0 mt-0.5" 
                      strokeWidth={2}
                    />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
