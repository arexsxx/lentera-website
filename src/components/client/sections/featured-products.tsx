import Link from "next/link";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import { ProductCatalog } from "@/components/client/product/product-catalog";
import { createClient } from "@/lib/supabase/server";

export async function FeaturedProducts({ searchQuery = "", rentalDatesSelected = false }: { searchQuery?: string; rentalDatesSelected?: boolean }) {
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
    <section id="katalog" className="relative z-20 scroll-mt-24 bg-background px-4 py-12 md:py-20">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="mb-6 md:mb-8">
          <h2 className="mb-3 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Pilih alat, mulai perjalanan.
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
        {rentalDatesSelected && <p className="mb-4 text-sm text-muted-foreground">Ketersediaan untuk tanggal sewa pilihanmu dikonfirmasi melalui WhatsApp.</p>}
          {displayProducts.length > 0 ? (
            <ProductCatalog products={displayProducts} searchQuery={searchQuery} />
          ) : !error ? (
             <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card px-3 py-12 text-center text-muted-foreground">
               <span className="font-jakarta font-medium mb-1">Katalog Masih Kosong</span>
               <span className="text-sm">Hubungi kami untuk menanyakan perlengkapan yang tersedia.</span>
             </div>
          ) : null}

        {/* Tombol Lihat Lainnya */}
        {displayProducts.length > 0 && (
          <div className="flex justify-center">
            <Button 
              asChild 
              variant="outline"
              className="min-h-12 w-full px-6 sm:w-auto"
            >
              <Link href="/#paket">
                Lihat Paket Sewa
              </Link>
            </Button>
          </div>
        )}

      </div>
    </section>
  );
}
