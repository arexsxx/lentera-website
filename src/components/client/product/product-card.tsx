import { ProductImage } from "@/components/client/product/product-image";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl?: string | null;
  stock: number;
  className?: string;
}

export function ProductCard({ name, description, price, imageUrl, stock, className }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price || 0);

  return (
    <article className={cn(
      "flex min-w-0 flex-col rounded-xl border border-border bg-card p-3 md:p-5",
      className
    )}>
      {/* Wadah Gambar */}
      <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-lg bg-background md:mb-4">
        <ProductImage
          src={imageUrl}
          alt={name}
        />
      </div>
      
      {/* Badge ketersediaan stok produk */}
      <p className={cn("mb-2 w-fit rounded px-1.5 py-1 text-xs font-medium", stock > 0 ? "bg-primary/10 text-foreground" : "text-destructive")}>
        {stock > 0 ? `Tersedia ${stock} unit` : "Stok habis"}
      </p>
      
      {/* Konten Teks */}
      <h3 className="line-clamp-2 min-h-10 font-heading text-sm font-semibold leading-5 md:min-h-12 md:text-lg md:leading-6">
        {name}
      </h3>
      <p className="mb-4 mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground md:text-sm">
        {description}
      </p>
      
      {/* Harga */}
      <div className="mt-auto flex flex-wrap items-baseline gap-1 border-t border-border pt-3">
        <span className="font-heading text-base font-semibold md:text-xl">{formattedPrice}</span>
        <span className="text-xs text-muted-foreground">/ hari</span>
      </div>
    </article>
  );
}
