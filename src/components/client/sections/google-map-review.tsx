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
    <section id="lokasi-ulasan" className="scroll-mt-24 py-12 md:py-28 px-4 bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 md:gap-8 mb-6 md:mb-14">
          
          {/* Judul Kiri */}
          <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">Cerita & lokasi Lentera</p>
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-sm">
            Apa yang sobat Lentera katakan
          </h2>
          </div>

          {/* Deskripsi Tengah */}
          <p className="font-jakarta text-foreground/70 text-sm md:text-base max-w-md leading-relaxed lg:pb-2">
            Dipercaya oleh para pendaki dan keluarga untuk menemani momen terbaik di alam bebas. Lihat apa kata mereka tentang Lentera Outdoor
          </p>

        </div>

        {/* Grid Kartu Ulasan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8">
          <div className="min-w-0 overflow-hidden rounded-2xl md:rounded-4xl bg-white border border-border/30">
            <iframe
              title="Peta pencarian Lentera Outdoor di Kediri"
              src={STORE_CONTACT.mapsEmbedUrl}
              className="w-full h-64 md:h-80 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="p-5 md:p-6">
              <h3 className="font-heading text-lg font-bold flex items-center gap-2"><MapPin aria-hidden="true" className="h-5 w-5 text-primary" />Temukan Lentera Outdoor</h3>
              <p className="text-sm text-foreground/70 mt-2">Pencarian toko di Kediri. Hubungi kami untuk memastikan titik pengambilan.</p>
              <a href={STORE_CONTACT.mapsSearchUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary mt-3">
                Buka Google Maps <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>
          {REVIEWS.map((review, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl md:rounded-4xl p-5 md:p-8 flex flex-col justify-center h-full shadow-sm border border-primary/15"
            >
              {/* Ikon Kutipan - Dibuat besar dan transparan sesuai desain */}
              <div className="mb-6">
                <Quote aria-hidden="true" className="h-12 w-12 fill-primary/10 text-primary/30 rotate-180" />
              </div>
              
              {/* Teks Ulasan */}
              <p className="font-jakarta text-foreground/80 font-medium text-[15px] leading-relaxed mb-10 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              
              {/* Nama Reviewer */}
              <span className="font-jakarta font-bold text-primary mt-auto">
                {review.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
