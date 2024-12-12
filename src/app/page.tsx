"use client";

import { MainCard } from "@/components/MainCard";
import { staticShoesData } from "@/utils/actions";

export default function Home() {
  return (
    <div className="space-y-12">
      {staticShoesData.map((shoes) => (
        <MainCard
          brandId={shoes.id}
          key={shoes.id}
          brandName={shoes.brandName}
          product={shoes.product}
        />
      ))}
    </div>
  );
}
