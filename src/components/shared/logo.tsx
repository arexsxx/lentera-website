import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  onClick?: () => void;
  compact?: boolean;
}

export function Logo({ className, onClick, compact = false }: LogoProps) {
  return (
    <Link 
      href="/" 
      onClick={onClick}
      className={cn(
        "flex min-w-0 items-center gap-3 group transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md",
        className
      )}
      aria-label="Beranda Lentera Outdoor"
    >
      {/* Gambar Logo di sebelah kiri */}
      <div className={cn("relative flex shrink-0 items-center justify-center", compact ? "h-8 w-8" : "h-9 w-9 md:h-10 md:w-10")}>
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
      <div className="flex min-w-0 flex-col">
        <span className={cn("truncate font-heading font-bold tracking-tight text-white uppercase leading-none", compact ? "text-base" : "text-xl md:text-2xl")}>
          Lentera{!compact && <span className="text-primary">.</span>}
        </span>
        <span className={cn("mt-0.5 truncate font-jakarta text-white/80", compact ? "text-[11px]" : "text-[10px] font-semibold uppercase tracking-[0.25em] md:text-xs")}>
          Outdoor
        </span>
      </div>
    </Link>
  );
}
