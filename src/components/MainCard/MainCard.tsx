"use client";

import React, { useState } from "react";
import Card from "./Card";
import { ProductTypes, ShoesType } from "@/utils/types";
import { ShoesItemDialog } from "../ShoesItem";
import { staticShoesData } from "@/utils/actions";
import TestDialog from "../ShoesItem/testDialog";

interface MainCardProps {
  brandTitle: string;
  product: ProductTypes[];
  brandId: string;
}

const MainCard = ({ brandTitle, product, brandId }: MainCardProps) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [dataFilled, setDataFilled] = useState<ProductTypes | null>(null);

  const handleFilterShoes = (id: string) => {
    console.log("Product ID:", id, "Brand ID:", brandId);

    // Find the brand by brandId
    const brand = staticShoesData.find((shoes) => shoes.id === brandId);

    if (!brand) {
      console.warn("Brand not found.");
      return;
    }

    // Find the product within the brand
    const singleProduct = brand.product.find((product) => product.id === id);

    if (!singleProduct) {
      console.warn("Product not found in the selected brand.");
      return;
    }

    // Update state
    setDataFilled(singleProduct);
    setOpenDialog(true);
  };

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-[32px] font-bold text-black">{brandTitle}</h1>
        <div className="grid grid-cols-4 gap-x-5 gap-y-12">
          {product.map((productItem) => (
            <div
              key={productItem.id}
              onClick={() => handleFilterShoes(productItem.id)}
            >
              <Card
                imageUrl={productItem.pictures[0]}
                price={productItem.price}
                shoesName={productItem.name}
              />
            </div>
          ))}
        </div>
      </div>

      {dataFilled && (
        <ShoesItemDialog
          brandName={brandTitle}
          product={dataFilled}
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
        />
      )}
    </>
  );
};

export default MainCard;
