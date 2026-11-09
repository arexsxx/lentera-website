import { ProductImage } from "@/components/client/product/product-image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

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
    <div className={cn(
      "group min-w-0 flex flex-col items-center text-center p-3 md:p-5 rounded-2xl bg-[#F8F9FA] hover:bg-white transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-transparent hover:border-border/50 relative",
      className
    )}>
      {/* Wadah Gambar */}
      <div className="relative w-full aspect-square mb-3 md:mb-4 mix-blend-multiply flex items-center justify-center overflow-hidden transition-transform duration-500 md:group-hover:scale-105">
        <ProductImage
          src={imageUrl}
          alt={name}
        />
      </div>
      
      {/* Badge ketersediaan stok produk */}
      <div className="absolute top-2 right-2 md:top-4 md:right-4">
        {stock > 0 ? (
          <Badge className="bg-white/90 text-primary hover:bg-white border-none shadow-sm backdrop-blur-sm text-[10px]">
            Sisa {stock}
          </Badge>
        ) : (
          <Badge variant="destructive" className="shadow-sm text-[10px]">
            Habis
          </Badge>
        )}
      </div>
      
      {/* Konten Teks */}
      <h3 className="font-heading text-sm md:text-lg font-bold text-foreground mb-1.5 leading-5 md:leading-6 line-clamp-2 min-h-10 md:min-h-12">
        {name}
      </h3>
      <p className="font-jakarta text-xs md:text-sm text-foreground/70 leading-relaxed mb-3 md:mb-4 line-clamp-2">
        {description}
      </p>
      
      {/* Harga */}
      <div className="mt-auto flex flex-wrap justify-center items-baseline gap-1 font-heading text-primary font-bold text-sm md:text-base">
        {formattedPrice} <span className="text-foreground/50 text-xs font-medium">/hari</span>
      </div>
    </div>
  );
}
