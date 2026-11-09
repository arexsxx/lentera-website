import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link 
      href="/" 
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 group transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md", 
        className
      )}
      aria-label="Beranda Lentera Outdoor"
    >
      {/* Gambar Logo di sebelah kiri */}
      <div className="relative w-9 h-9 md:w-10 md:h-10 shrink-0 flex items-center justify-center">
        <Image 
          src="/images/logo-white.png" 
          alt="Logo Lentera Outdoor" 
          width={40}
          height={40}
          className="object-contain w-full h-full"
          priority
          unoptimized
        />
      </div>

      {/* Teks Logo */}
      <div className="flex flex-col">
        <span className="font-heading text-xl md:text-2xl font-extrabold tracking-tight text-white uppercase leading-none">
          Lentera<span className="text-primary">.</span>
        </span>
        <span className="font-jakarta text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-white/70 mt-0.5">
          Outdoor
        </span>
      </div>
    </Link>
  );
}