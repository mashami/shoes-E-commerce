"use client";

import React, { Dispatch, SetStateAction } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import LikedCard from "./LikedCard";
import { AllLikedProps } from "@/utils/types";
import { findLikedProducts } from "@/utils/actions";

interface LovedSheetProps {
  isSheetOpen: boolean;
  setIsSheetOpen: Dispatch<SetStateAction<boolean>>;
}

const LovedSheet = ({ isSheetOpen, setIsSheetOpen }: LovedSheetProps) => {
  const allLikedProducts: AllLikedProps[] = findLikedProducts();

  return (
    <Sheet onOpenChange={setIsSheetOpen} open={isSheetOpen}>
      <SheetContent className="bg-[#E3ECFF] flex flex-col">
        <SheetHeader className="pt-6">
          <SheetTitle className="uppercase">
            Those are the liked products
          </SheetTitle>
        </SheetHeader>

        {allLikedProducts.length > 0 ? (
          <div className="flex-1 overflow-y-auto space-y-4 pt-6 hide-scrollbar">
            {allLikedProducts.map((product, index) => (
              <LikedCard
                key={index}
                product={product.product}
                brandId={product.brandId}
                brandName={product.brandName}
                id={product.product.id}
                imageUrl={product.product.pictures[0]}
                price={product.product.price}
                productName={product.product.name}
                description={product.product.description}
              />
            ))}
          </div>
        ) : (
          <p>You do not have Favorate products yet</p>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default LovedSheet;
