"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { removeProductCart } from "@/utils/actions";
import { useRouter } from "next/navigation";

interface LikedCardProps {
  imageUrl: string;
  brandName: string;
  price: number;
  description?: string;
  id: string;
  brandId: string;
  productName: string;
}

const CartCard = ({
  imageUrl,
  brandId,
  brandName,
  id,
  price,
  description,
  productName,
}: LikedCardProps) => {
  const router = useRouter();

  const removeHandle = () => {
    removeProductCart({ brandId: brandId, productId: id });
    router.refresh();
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
          <Button
            onClick={removeHandle}
            text="Remove"
            className="bg-red-500 outline-none rounded-md text-white px-1 hover:bg-red-500/75 transition ease-in-out duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
