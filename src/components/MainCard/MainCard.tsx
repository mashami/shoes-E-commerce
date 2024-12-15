"use client";

import React, { useState } from "react";
import Card from "./Card";
import { ProductTypes } from "@/utils/types";
import ViewItemDialog from "./ViewItemDialog";
import { useAppContext } from "@/utils/context/AppContext";
import { CartDialog } from "../CartDialog";

interface MainCardProps {
  brandName: string;
  product: ProductTypes[];
  brandId: string;
}

const MainCard = ({ brandName, product, brandId }: MainCardProps) => {
  const [isViewItemOpen, setIsViewItemOpen] = useState<boolean>(false);
  const { openCartDialog, setOpenCartDialog } = useAppContext();
  const { dataFilled } = useAppContext();

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-[32px] font-bold text-black">{brandName}</h1>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-x-5 gap-y-12">
          {product.map((productItem) => (
            <div key={productItem.id}>
              <Card
                openViewDialog={isViewItemOpen}
                setOpenViewDialog={setIsViewItemOpen}
                brandId={brandId}
                product={productItem}
                brandName={brandName}
              />
            </div>
          ))}
        </div>
      </div>

      {dataFilled && (
        <CartDialog
          brandName={brandName}
          brandId={brandId}
          product={dataFilled}
          setOpenCartDialog={setOpenCartDialog}
          openCartDialog={openCartDialog}
        />
      )}

      {dataFilled && (
        <ViewItemDialog
          brandName={brandName}
          brandId={brandId}
          product={dataFilled}
          openViewDialog={isViewItemOpen}
          setOpenViewDialog={setIsViewItemOpen}
        />
      )}
    </>
  );
};

export default MainCard;
