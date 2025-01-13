"use client";

import { MainCard } from "@/components/MainCard";
import { useAppContext } from "@/utils/context/AppContext";

export default function Home() {
  const { filteredShoes } = useAppContext();

  return (
    <div>
      <div className="">
        <div className="space-y-12">
          {filteredShoes.map((shoes) => (
            <MainCard
              key={shoes.id}
              brandId={shoes.id}
              brandName={shoes.brandName}
              product={shoes.product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
