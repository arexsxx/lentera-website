import { MapPin, Quote, ArrowUpRight } from "lucide-react";
import { STORE_CONTACT } from "@/lib/store-contact";

const REVIEWS = [
  {
    text: "Barang nya sangat bagus dan bersih cocok untuk info dakimu",
    name: "Zaki Zaki",
  },
];

export function GoogleMapReview() {
  return (
    <section id="lokasi-ulasan" className="scroll-mt-24 bg-background px-4 py-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 md:gap-8 mb-6 md:mb-14">
          
          {/* Judul Kiri */}
          <div>
          <h2 className="max-w-sm font-heading text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Apa yang sobat Lentera katakan
          </h2>
          </div>

          {/* Deskripsi Tengah */}
          <p className="font-jakarta text-foreground/70 text-sm md:text-base max-w-md leading-relaxed lg:pb-2">
            Dipercaya oleh para pendaki dan keluarga untuk menemani momen terbaik di alam bebas. Lihat apa kata mereka tentang Lentera Outdoor
          </p>

        </div>

        {/* Grid Kartu Ulasan */}
        <div className="grid grid-cols-1 gap-3 md:gap-6 lg:grid-cols-2">
          <div className="min-w-0 overflow-hidden rounded-xl border border-border bg-white">
            <iframe
              title="Peta pencarian Lentera Outdoor di Kediri"
              src={STORE_CONTACT.mapsEmbedUrl}
              className="w-full h-64 md:h-80 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="p-5 md:p-6">
              <h3 className="flex items-center gap-2 font-heading text-lg font-semibold"><MapPin aria-hidden="true" className="h-5 w-5 text-primary" />Temukan Lentera Outdoor</h3>
              <p className="text-sm text-foreground/70 mt-2">Pencarian toko di Kediri. Hubungi kami untuk memastikan titik pengambilan.</p>
              <a href={STORE_CONTACT.mapsSearchUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground decoration-primary underline-offset-4 hover:underline">
                Buka Google Maps <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>
          {REVIEWS.map((review, idx) => (
            <div 
              key={idx} 
              className="flex h-full flex-col justify-center rounded-xl border border-border bg-white p-5 md:p-8"
            >
              {/* Ikon Kutipan - Dibuat besar dan transparan sesuai desain */}
              <div className="mb-6">
                <Quote aria-hidden="true" className="h-8 w-8 rotate-180 text-primary" />
              </div>
              
              {/* Teks Ulasan */}
              <p className="font-jakarta text-foreground/80 font-medium text-[15px] leading-relaxed mb-10 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              
              {/* Nama Reviewer */}
              <span className="mt-auto font-semibold text-foreground">
                {review.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
