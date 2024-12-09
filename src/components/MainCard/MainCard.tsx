"use client";

import React from "react";
import Card from "./Card";
import { ProductProps } from "@/utils/types";

interface MainCardProps {
  brandTitle: string;
  product: ProductProps[];
}

const MainCard = ({ brandTitle, product }: MainCardProps) => {
  return (
    <div className="space-y-4">
      <h1 className="text-[32px] font-bold text-black">{brandTitle}</h1>
      <div className="grid grid-cols-4 gap-x-5 gap-y-12">
        {product.map((product) => (
          <Card
            key={product.id}
            imageUrl={product.pictures[0]}
            price={product.price}
            shoesName={product.name}
          />
        ))}
      </div>
    </div>
  );
};

export default MainCard;
