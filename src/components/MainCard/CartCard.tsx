"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { removeProductCart } from "@/utils/actions";
import { useRouter } from "next/navigation";
import { Switch } from "@/components/ui/switch";

interface LikedCardProps {
  imageUrl: string;
  brandName: string;
  price: number;
  description?: string;
  id: string;
  brandId: string;
  productName: string;
  isStayedInCart?: boolean;
}

const CartCard = ({
  imageUrl,
  brandId,
  brandName,
  id,
  price,
  description,
  productName,
  isStayedInCart = true,
}: LikedCardProps) => {
  const [isStayed, setIsStayed] = useState<boolean>(isStayedInCart);
  const router = useRouter();

  const removeHandle = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    removeProductCart({ brandId: brandId, productId: id });
    router.refresh();
  };

  const switchHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsStayed((prev) => !prev);
  };
  return (
    <div className="grid grid-cols-3 gap-3 p-3 bg-white rounded-2xl relative overflow-hidden group">
      <div className="relative w-full min-h-[100px] rounded-xl overflow-hidden">
        <Image
          src={imageUrl}
          alt="image"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className="col-span-2 flex flex-col space-y-1  justify-between">
        <div className="flex items-start justify-between space-x-2">
          <div className="space-y-0">
            <p className="font-extrabold text-black">{brandName}</p>
            <p className="text-[12px] text-[#1E1818]">{productName}</p>
          </div>

          <p className="text-[18px] font-bold">${price}</p>
        </div>
        {description && <p className="text-[12px] leading-4">{description}</p>}

        <div className="flex items-center justify-between">
          <p className="font-bold text-[14px]">Free delivery</p>

          <div
            className="flex flex-col items-end space-y-1"
            onClick={switchHandle}
          >
            <Switch checked={isStayed} onCheckedChange={() => switchHandle} />
          </div>
        </div>
        <div className="flex justify-end">
          <p
            onClick={removeHandle}
            className="text-red-500 cursor-pointer hover:text-red-500/75 transition ease-in-out duration-500"
          >
            Remove
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
