"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { addProductCart, handleUpdateLiked } from "@/utils/actions";
import { useRouter } from "next/navigation";
import { ProductTypes } from "@/utils/types";

interface LikedCardProps {
  imageUrl: string;
  brandName: string;
  price: number;
  description?: string;
  id: string;
  brandId: string;
  productName: string;
  product: ProductTypes;
}

const LikedCard = ({
  imageUrl,
  brandId,
  brandName,
  id,
  price,
  description,
  productName,
  product,
}: LikedCardProps) => {
  const router = useRouter();

  const removeHandle = () => {
    handleUpdateLiked({ brandId: brandId, productId: id });
    router.refresh();
  };

  const addProductCartHandle = () => {
    addProductCart({
      brandId: brandId,
      brandName: brandName,
      product: product,
    });

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

      <div className="absolute left-1/2 -translate-x-1/2 group-hover:top-10 top-16 group-hover:translate-y-1/2 w-fit h-fit  flex items-center justify-center translate-y-20  duration-500 ease-in-out">
        <div
          onClick={addProductCartHandle}
          className="w-fit bg-blue-500 hover:bg-blue-400 transition duration-300 ease-in-out flex items-center space-x-1 py-1.5 px-4 rounded-full cursor-pointer select-none"
        >
          <p className="font-medium text-white">Add</p>

          <svg
            width={22}
            height={20}
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.77835 20C6.18299 20 5.67333 19.8042 5.24936 19.4125C4.82539 19.0208 4.61341 18.55 4.61341 18C4.61341 17.45 4.82539 16.9792 5.24936 16.5875C5.67333 16.1958 6.18299 16 6.77835 16C7.37371 16 7.88338 16.1958 8.30735 16.5875C8.73132 16.9792 8.9433 17.45 8.9433 18C8.9433 18.55 8.73132 19.0208 8.30735 19.4125C7.88338 19.8042 7.37371 20 6.77835 20ZM17.6031 20C17.0077 20 16.4981 19.8042 16.0741 19.4125C15.6501 19.0208 15.4381 18.55 15.4381 18C15.4381 17.45 15.6501 16.9792 16.0741 16.5875C16.4981 16.1958 17.0077 16 17.6031 16C18.1985 16 18.7081 16.1958 19.1321 16.5875C19.5561 16.9792 19.768 17.45 19.768 18C19.768 18.55 19.5561 19.0208 19.1321 19.4125C18.7081 19.8042 18.1985 20 17.6031 20ZM5.85825 4L8.45619 9H16.0335L19.0103 4H5.85825ZM4.8299 2H20.7964C21.2113 2 21.5271 2.17083 21.7436 2.5125C21.9601 2.85417 21.9691 3.2 21.7706 3.55L17.9278 9.95C17.7294 10.2833 17.4633 10.5417 17.1295 10.725C16.7957 10.9083 16.4304 11 16.0335 11H7.96908L6.77835 13H19.768V15H6.77835C5.9665 15 5.3531 14.6708 4.93815 14.0125C4.5232 13.3542 4.50516 12.7 4.88402 12.05L6.34536 9.6L2.44846 2H0.283508V0H3.80155L4.8299 2Z"
              fill="#E8EAED"
            />
            <path
              d="M5.85825 3.5H5.03499L5.41457 4.23053L8.01251 9.23053L8.15252 9.5H8.45619H16.0335H16.3177L16.4631 9.25578L19.4399 4.25578L19.8899 3.5H19.0103H5.85825ZM4.38524 2.22864L4.52477 2.5H4.8299H20.7964C21.0454 2.5 21.1992 2.58763 21.3212 2.78012L21.7436 2.5125L21.3212 2.78012C21.3894 2.88772 21.4111 2.97285 21.4129 3.04116C21.4146 3.10831 21.398 3.19186 21.3384 3.29859L17.4992 9.69261L17.4982 9.69422C17.3444 9.95249 17.1429 10.1472 16.8888 10.2868C16.632 10.4278 16.35 10.5 16.0335 10.5H7.96908H7.68485L7.53945 10.7442L6.34873 12.7442L5.89877 13.5H6.77835H19.268V14.5H6.77835C6.12923 14.5 5.67983 14.2515 5.36114 13.7459C5.19238 13.4781 5.11933 13.2361 5.11322 13.0143C5.10715 12.7942 5.16599 12.5599 5.31479 12.3039L6.77478 9.85613L6.91664 9.61829L6.79029 9.37187L2.89338 1.77187L2.75398 1.5H2.44846H0.783508V0.5H3.49641L4.38524 2.22864ZM6.77835 19.5C6.30438 19.5 5.91707 19.3486 5.58864 19.0452C5.26142 18.7429 5.11341 18.4029 5.11341 18C5.11341 17.5971 5.26142 17.2571 5.58864 16.9548C5.91707 16.6514 6.30438 16.5 6.77835 16.5C7.25232 16.5 7.63963 16.6514 7.96806 16.9548C8.29529 17.2571 8.4433 17.5971 8.4433 18C8.4433 18.4029 8.29529 18.7429 7.96806 19.0452C7.63963 19.3486 7.25232 19.5 6.77835 19.5ZM17.6031 19.5C17.1291 19.5 16.7418 19.3486 16.4134 19.0452C16.0862 18.7429 15.9381 18.4029 15.9381 18C15.9381 17.5971 16.0862 17.2571 16.4134 16.9548C16.7418 16.6514 17.1291 16.5 17.6031 16.5C18.0771 16.5 18.4644 16.6514 18.7928 16.9548C19.12 17.2571 19.268 17.5971 19.268 18C19.268 18.4029 19.12 18.7429 18.7928 19.0452C18.4644 19.3486 18.0771 19.5 17.6031 19.5Z"
              stroke="white"
              // strokeOpacity="0.1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LikedCard;
