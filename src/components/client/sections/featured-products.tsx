import Link from "next/link";
import { cookies } from "next/headers";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCatalog } from "@/components/client/product/product-catalog";
import { createClient } from "@/lib/supabase/server";

export async function FeaturedProducts() {
  // Ambil cookieStore terlebih dahulu dari Next.js Server Component
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  // Gunakan kolom gambar dan stok produk dari database.
  const { data: products, error } = await supabase
    .from("products")
    .select("id, name, category, description, price_per_day, image, stock")
    .eq("is_active", true)
    .order("created_at", { ascending: false })
    .limit(8);

  if (error) {
    console.error("Gagal mengambil produk Supabase:", error);
  }

  const displayProducts = products || [];

  return (
    <section id="katalog" className="scroll-mt-24 py-12 md:py-28 px-4 bg-white relative z-20">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">Perlengkapan pilihan</p>
          <h2 className="font-heading text-2xl md:text-[32px] font-bold text-foreground mb-3">
            Pilihan Perlengkapan Terbaik
          </h2>
          <p className="font-jakarta text-foreground/70 text-sm md:text-base font-medium">
            Siap disewa untuk menemani perjalanan alammu
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="text-center py-6 px-4 mb-8 bg-destructive/10 text-destructive rounded-xl font-jakarta text-sm font-medium">
            Produk belum dapat dimuat. Silakan coba beberapa saat lagi.
          </div>
        )}

        {/* Grid Produk */}
          {displayProducts.length > 0 ? (
            <ProductCatalog products={displayProducts} />
          ) : !error ? (
             <div className="col-span-full py-16 flex flex-col items-center justify-center border-2 border-dashed border-border rounded-3xl text-foreground/50">
               <span className="font-jakarta font-medium mb-1">Katalog Masih Kosong</span>
               <span className="text-sm">Silakan tambahkan produk baru melalui dashboard admin.</span>
             </div>
          ) : null}

        {/* Tombol Lihat Lainnya */}
        {displayProducts.length > 0 && (
          <div className="flex justify-center">
            <Button 
              asChild 
              variant="outline"
              className="w-full sm:w-auto rounded-full px-8 h-12 text-[15px] font-bold shadow-none group"
            >
              <Link href="/#paket">
                Lihat Paket Sewa
                <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
            </Button>
          </div>
        )}

      </div>
    </section>
  );
}
