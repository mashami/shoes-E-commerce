"use client";

import React from "react";
import MainComp from "./MainComp";
import { useAppContext } from "@/utils/context/AppContext";

const AllProducts = () => {
  const { filteredShoes } = useAppContext();
  return (
    <div>
      <div className="">
        <div className="space-y-12">
          {filteredShoes.map((shoes) => (
            <MainComp
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
};

export default AllProducts;
