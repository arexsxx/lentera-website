import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTAFooter() {
  return (
    <section id="mulai-sewa" className="scroll-mt-24 py-12 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Wadah Utama CTA (Card style dengan rounded besar) */}
        <div className="relative w-full rounded-2xl md:rounded-[3rem] overflow-hidden py-10 md:py-24 px-5 md:px-6 flex flex-col items-center text-center shadow-xl shadow-primary/5">
          
          {/* Latar Belakang Gambar */}
          <Image 
            src="/images/hero-bg.jpg"
            alt="Camping Lentera Outdoor" 
            fill 
            className="object-cover object-center z-0"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          
          {/* Overlay Hangat/Gelap agar teks terbaca */}
          <div className="absolute inset-0 z-10 bg-black/40 mix-blend-multiply" />
          <div className="absolute inset-0 z-10 bg-linear-to-t from-orange-950/80 via-black/40 to-black/30" />

          {/* Konten CTA */}
          <div className="relative z-20 flex flex-col items-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200 mb-4">Alam menunggu ceritamu</p>
            
            <h2 className="font-heading text-3xl md:text-5xl lg:text-[56px] font-extrabold text-white mb-4 lg:mb-6 leading-[1.1] tracking-tight">
              Siap Memulai <br />
              Petualanganmu?
            </h2>
            
            <p className="font-jakarta text-white/90 text-sm md:text-base lg:text-lg max-w-2xl mb-6 md:mb-10 leading-relaxed font-medium">
              Lengkapi kebutuhan mendaki dan camping-mu bersama kami. Proses sewa mudah, cepat, dan tanpa ribet.
            </p>
            
            {/* Grup Tombol */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              
              <Button 
                asChild 
                variant="outline" 
                className="w-full sm:w-auto rounded-full bg-transparent border-white/70 text-white hover:bg-white/10 hover:text-white h-12 md:h-14 px-8 text-[15px] font-semibold transition-colors"
              >
                <Link href="/#katalog">
                  Lihat Katalog
                </Link>
              </Button>

              <Button 
                asChild 
                className="w-full sm:w-auto rounded-full bg-primary text-white hover:bg-primary/90 h-12 md:h-14 px-8 text-[15px] font-bold shadow-lg shadow-black/20 transition-transform group"
              >
                <a href="https://wa.me/6285706072574">
                  Sewa via WhatsApp
                  <ChevronRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </a>
              </Button>
              
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
