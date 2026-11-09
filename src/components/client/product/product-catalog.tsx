"use client";

import { useState } from "react";
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

export function ProductCatalog({ products }: { products: CatalogProduct[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = [...new Set(products.map((product) => product.category).filter((category): category is string => Boolean(category)))];
  const visibleProducts = selectedCategory === null
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <div role="group" aria-label="Kategori perlengkapan" className="flex overflow-x-auto overscroll-x-contain gap-2 pb-3 mb-5 md:mb-8 md:justify-center">
        {[null, ...categories].map((category) => (
          <Button
            key={category ?? "all"}
            variant="outline"
            aria-pressed={selectedCategory === category}
            aria-controls="daftar-produk"
            onClick={() => setSelectedCategory(category)}
            className={cn(
              "shrink-0 h-11 rounded-xl px-4 shadow-none",
              selectedCategory === category
                ? "bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 hover:text-primary"
                : "text-foreground/80 border-border",
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
