"use client";

import { useState } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/client/product/product-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CatalogProduct {
  id: number | string;
  name: string;
  category: string | null;
  description: string | null;
  price_per_day: number;
  image: string | null;
  stock: number;
}

const CATEGORY_LABELS: Record<string, string> = {
  Backpack: "Carrier",
  Cook: "Memasak",
  Emergency: "Darurat",
};

export function ProductCatalog({ products, searchQuery = "" }: { products: CatalogProduct[]; searchQuery?: string }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = [...new Set(products.map((product) => product.category).filter((category): category is string => Boolean(category)))];
  const visibleProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === null || product.category === selectedCategory;
    const searchText = [product.name, product.category, product.description].filter(Boolean).join(" ").toLocaleLowerCase("id-ID");
    return matchesCategory && searchText.includes(searchQuery.toLocaleLowerCase("id-ID"));
  });

  return (
    <>
      {searchQuery && <div className="mb-5 flex flex-wrap items-center gap-3 text-sm"><p>Hasil pencarian untuk <strong>“{searchQuery}”</strong></p><Link href="/#katalog" className="inline-flex min-h-11 items-center underline underline-offset-4">Hapus pencarian</Link></div>}
      <div role="group" aria-label="Kategori perlengkapan" className="mb-5 flex gap-2 overflow-x-auto overscroll-x-contain pb-3 md:mb-6">
        {[null, ...categories].map((category) => (
          <Button
            key={category ?? "all"}
            variant="outline"
            aria-pressed={selectedCategory === category}
            aria-controls="daftar-produk"
            onClick={() => setSelectedCategory(category)}
            className={cn(
              "h-11 shrink-0 px-4",
              selectedCategory === category
                ? "border-primary bg-primary/10 text-foreground hover:border-primary hover:bg-primary/15"
                : "border-input text-muted-foreground hover:border-primary hover:bg-primary/5",
            )}
          >
            {category === null ? "Semua" : CATEGORY_LABELS[category] ?? category}
          </Button>
        ))}
      </div>
      <p role="status" className="text-xs md:text-sm text-foreground/70 mb-4">
        {visibleProducts.length} perlengkapan{selectedCategory ? ` · ${CATEGORY_LABELS[selectedCategory] ?? selectedCategory}` : " siap menemani perjalananmu"}
      </p>
      <div id="daftar-produk" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-14">
        {visibleProducts.length === 0 && <p className="col-span-full rounded-lg border border-border p-6 text-sm text-muted-foreground">Perlengkapan tidak ditemukan. Coba kata kunci lain atau pilih kategori Semua.</p>}
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description || "Peralatan outdoor berkualitas"}
            price={product.price_per_day}
            imageUrl={product.image}
            stock={product.stock}
          />
        ))}
      </div>
    </>
  );
}
