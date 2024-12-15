"use client";

import { MainCard } from "@/components/MainCard";
import {
  findLikedProducts,
  getCartProducts,
  staticShoesData
} from "@/utils/actions";

export default function Home() {
  const all = getCartProducts();
  const allFavorate = findLikedProducts();

  // console.log("all Cart products ==>", all);

  // console.log("Get all favorates products ===>", allFavorate);

  return (
    <div className="space-y-12">
      {staticShoesData.map((shoes) => (
        <MainCard
          key={shoes.id}
          brandId={shoes.id}
          brandName={shoes.brandName}
          product={shoes.product}
        />
      ))}
    </div>
  );
}
