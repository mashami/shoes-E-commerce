"use client";

import React, { useState } from "react";
import Card from "./Card";
import { ProductTypes, ShoesType } from "@/utils/types";
import { ShoesItemDialog } from "../ShoesItem";
import { handleFilterShoes, staticShoesData } from "@/utils/actions";

interface MainCardProps {
  brandName: string;
  product: ProductTypes[];
  brandId: string;
}

const MainCard = ({ brandName, product, brandId }: MainCardProps) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [dataFilled, setDataFilled] = useState<ProductTypes | null>(null);

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-[32px] font-bold text-black">{brandName}</h1>
        <div className="grid grid-cols-4 gap-x-5 gap-y-12">
          {product.map((productItem) => (
            <div key={productItem.id}>
              <Card
                setDataFilled={setDataFilled}
                setOpenDialog={setOpenDialog}
                brandId={brandId}
                product={productItem}
                brandName={brandName}
              />
            </div>
          ))}
        </div>
      </div>

      {dataFilled && (
        <ShoesItemDialog
          brandName={brandName}
          product={dataFilled}
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
        />
      )}
    </>
  );
};

export default MainCard;
