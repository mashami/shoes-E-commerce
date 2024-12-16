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
  const { dataFilled } = useAppContext();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-[32px] font-bold text-black">{brandName}</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  grid-cols-1 gap-x-5 gap-y-12">
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
          setOpenCartDialog={setOpen}
          openCartDialog={open}
        />
      )}

      {dataFilled && (
        <ViewItemDialog
          setOpen={setOpen}
          brandName={brandName}
          brandId={brandId}
          product={dataFilled}
          openViewDialog={isViewItemOpen}
          setOpenViewDialog={setIsViewItemOpen}
        />
      )}

      {/* <TestDialog open={open} setOpen={setOpen} /> */}
    </>
  );
};

export default MainCard;
