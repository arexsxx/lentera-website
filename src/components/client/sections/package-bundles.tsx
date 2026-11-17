import { Button } from "@/components/ui/button";
import { STORE_CONTACT } from "@/lib/store-contact";

const BUNDLE_PACKAGES = [
  {
    name: "Keluarga Bahagia 6 Orang",
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
    <section id="paket" className="scroll-mt-24 bg-muted/50 px-4 py-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="mb-6 flex max-w-2xl flex-col md:mb-8">
          <h2 className="mb-3 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Paket Hemat & Praktis
          </h2>
          <p className="font-jakarta text-foreground/70 text-sm md:text-lg leading-relaxed">
            Tidak perlu bingung menyusun daftar bawaan. Pilih paket bundling kami yang sudah disesuaikan dengan jumlah rombonganmu. Lebih lengkap, lebih hemat
          </p>
        </div>

        {/* Grid Bundling */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {BUNDLE_PACKAGES.map((pkg, idx) => (
            <article key={idx} className="flex min-w-0 flex-col rounded-xl border border-border bg-card p-3 md:p-6">
              
              {/* Judul Paket */}
              <h3 className="mb-4 border-b border-border pb-4 font-heading text-xl font-semibold">
                {pkg.name}
              </h3>
              
              {/* Daftar Perlengkapan */}
              <ul className="mb-6 space-y-2 text-sm leading-6 text-muted-foreground">
                {pkg.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-auto w-full">
                <a href={`${STORE_CONTACT.whatsappUrl}?text=${encodeURIComponent(`Halo Lentera, saya ingin menanyakan harga dan ketersediaan paket ${pkg.name}.`)}`}>
                  Tanya Paket
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
