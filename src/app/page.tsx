"use client";

import { MainCard } from "@/components/MainCard";
import { NavBar } from "@/components/NavBar";
import { useAppContext } from "@/utils/context/AppContext";

export default function Home() {
  const { filteredShoes } = useAppContext();

  return (
    <div>
      <div className="fixed w-full top-0 right-0 xl:px-[50px] px-2 bg-white z-50">
        <NavBar />
      </div>
      <div className="pt-20 md:container px-6 py-6">
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
