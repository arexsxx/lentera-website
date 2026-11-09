import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-[min(600px,80svh)] md:min-h-dvh w-full flex items-center justify-center overflow-hidden pt-28 pb-12 md:pt-40 md:pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg" // Pastikan gambar ini ada di folder public/ Anda
          alt="Lentera Outdoor Hero"
          fill
          className="object-cover brightness-[0.4]" // Menggelapkan gambar agar teks putih kontras
          preload
          sizes="100vw"
        />
      </div>
      
      {/* Konten Hero */}
      <div className="relative z-10 text-center flex flex-col items-center px-5 w-full max-w-4xl">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />Sewa alat outdoor · Kediri
        </p>
        <h1 className="font-heading text-[clamp(2rem,8vw,3rem)] md:text-7xl leading-tight font-extrabold text-white mb-4 md:mb-6 tracking-tight drop-shadow-md">
          LENTERA OUTDOOR
        </h1>
        <p className="font-jakarta text-sm leading-6 md:text-xl text-white/90 mb-6 md:mb-10 max-w-2xl font-medium drop-shadow-sm">
          Sewa perlengkapan kemah dan pendakian kualitas premium. 
          Praktis, aman, dan siap menemani petualanganmu.
        </p>
        <Button asChild className="w-full max-w-xs md:w-auto rounded-full bg-primary text-white hover:bg-primary/90 transition-all px-8 h-12 md:h-14 text-base md:text-lg font-bold shadow-lg shadow-primary/20">
          <Link href="/#katalog">Mulai Sewa Sekarang</Link>
        </Button>
      </div>
    </section>
  );
}
