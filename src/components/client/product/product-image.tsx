"use client";

import Image from "next/image";
import { useState } from "react";

const PLACEHOLDER = "/images/product-placeholder.svg";

const LOCAL_PRODUCT_IMAGES: Record<string, string> = {
  "/images/products/tenda.png": "/product/tenda.png",
  "/images/products/sepatu.png": "/product/sepatu.png",
  "/images/products/kompor.png": "/product/kompor.png",
  "/images/products/nesting.png": "/product/nesting.png",
  "/images/products/matras.png": "/product/matras.png",
  "/images/products/carier.png": "/product/carier.png",
  "/images/products/jaket.png": "/product/jaket.png",
  "/images/products/lampu-tenda.png": PLACEHOLDER,
};

export function ProductImage({ src, alt }: { src?: string | null; alt: string }) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const resolvedSrc = src ? LOCAL_PRODUCT_IMAGES[src] ?? src : null;
  const imageSrc = resolvedSrc && failedSrc !== resolvedSrc ? resolvedSrc : PLACEHOLDER;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      className="object-contain p-2"
      sizes="(max-width: 768px) 50vw, 25vw"
      onError={() => {
        if (resolvedSrc && imageSrc !== PLACEHOLDER) setFailedSrc(resolvedSrc);
      }}
    />
  );
}
