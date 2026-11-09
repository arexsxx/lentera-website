"use client";

import Image from "next/image";
import { useState } from "react";

const PLACEHOLDER = "/images/product-placeholder.svg";

export function ProductImage({ src, alt }: { src?: string | null; alt: string }) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const imageSrc = src && failedSrc !== src ? src : PLACEHOLDER;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      className="object-contain p-2"
      sizes="(max-width: 768px) 50vw, 25vw"
      onError={() => {
        if (src && imageSrc !== PLACEHOLDER) setFailedSrc(src);
      }}
    />
  );
}
