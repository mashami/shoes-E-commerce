/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { getProductDetails, handleFilterShoes } from "@/utils/actions";
import { useAppContext } from "@/utils/context/AppContext";
import { ProductTypes } from "@/utils/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface CardProps {
  product: ProductTypes;
  brandId: string;
  openViewDialog: boolean;
  setBrandId: Dispatch<SetStateAction<string>>;
  setOpenViewDialog: Dispatch<SetStateAction<boolean>>;
  openEditDialog: boolean;
  setOpenEditDialog: Dispatch<SetStateAction<boolean>>;
}
const Card = ({
  product,
  setBrandId,
  brandId,
  setOpenViewDialog,
  setOpenEditDialog
}: CardProps) => {
  const { setDataFilled } = useAppContext();
  const {
    pictures: [{ url: imageUrl }] = [][0],
    price,
    name: shoesName,
    description
  } = product;

  // useEffect(() => {
  //   if (openEditDialog) {
  //     setDataFilled(product);
  //   } else {
  //     setDataFilled(null);
  //   }
  // }, [openEditDialog]);

  const router = useRouter();

  const handleViewDetail = () => {
    setOpenViewDialog(true);
    setDataFilled(product);
    // router.refresh();
  };

  const openingEditDilogHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const getProduct: ProductTypes | undefined = handleFilterShoes({
      productId: product.id,
      brandId
    });
    setDataFilled(getProduct || null);
    setOpenEditDialog(true);
  };

  return (
    <div
      onClick={handleViewDetail}
      className="group bg-[#E8EAED] rounded-[16px] overflow-hidden space-y-2 pb-3 relative  shadow-xl cursor-pointer border-[0.5px] border-white/10"
    >
      <div className="w-full h-[231px] relative overflow-hidden">
        <Image
          src={imageUrl}
          style={{
            objectFit: "cover"
          }}
          fill
          alt=""
          className=" group-hover:scale-105 transition-all ease-in-out duration-300"
        />

        <div
          onClick={openingEditDilogHandle}
          className="absolute bottom-1 bg-[#8155FF] hover:bg-[#8155FF]/90 -translate-x-1/2 left-1/2 group-hover:translate-y-0 translate-y-12 transition duration-300 ease-in-out flex items-center space-x-1 py-1.5 px-4 rounded-full cursor-pointer select-none"
        >
          <svg
            width={25}
            height={20}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width={30} height={30} fill="url(#pattern0_127_732)" />
            <defs>
              <pattern
                id="pattern0_127_732"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
              >
                <use xlinkHref="#image0_127_732" transform="scale(0.0333333)" />
              </pattern>
              <image
                id="image0_127_732"
                width={30}
                height={30}
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqklEQVR4nO3VsQ2CQBSAYUpHMK5gS+EQ2ugkJPZSOoy6DLUjaNzgMxQkmChIwoNo+Bf4cu9d7pJk6pdDhjsKpEOhudceWI0BV3g6Fl5EQXkLfotAq5rwLAptwvNotOrYG9QBjcF9h5YdJrRz03j/7yKVYYlLC9rfi1QP68FOWg/zwdEqLLCpjb3/8WKGfcPOw3a6C/1dPoVTbY9vTx4SrjhjW459MHgqCewJ+YXEOk0YRjsAAAAASUVORK5CYII="
              />
            </defs>
          </svg>

          <p className="font-medium text-white">Edit</p>
        </div>
      </div>
      <div className="space-y-2 px-3">
        <p className="py-1 font-medium capitalize text-black">{shoesName}</p>

        <p className="text-[14px] text-black opacity-50 line-clamp-1">
          {description}
        </p>
        <div className="py-1 flex items-center">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 11H10C9.46957 11 8.96086 10.7893 8.58579 10.4142C8.21071 10.0391 8 9.53043 8 9C8 8.46957 8.21071 7.96086 8.58579 7.58579C8.96086 7.21071 9.46957 7 10 7H15C15.2652 7 15.5196 7.10536 15.7071 7.29289C15.8946 7.48043 16 7.73478 16 8C16 8.26522 16.1054 8.51957 16.2929 8.70711C16.4804 8.89464 16.7348 9 17 9C17.2652 9 17.5196 8.89464 17.7071 8.70711C17.8946 8.51957 18 8.26522 18 8C18 7.20435 17.6839 6.44129 17.1213 5.87868C16.5587 5.31607 15.7956 5 15 5H13V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V5H10C8.93913 5 7.92172 5.42143 7.17157 6.17157C6.42143 6.92172 6 7.93913 6 9C6 10.0609 6.42143 11.0783 7.17157 11.8284C7.92172 12.5786 8.93913 13 10 13H14C14.5304 13 15.0391 13.2107 15.4142 13.5858C15.7893 13.9609 16 14.4696 16 15C16 15.5304 15.7893 16.0391 15.4142 16.4142C15.0391 16.7893 14.5304 17 14 17H9C8.73478 17 8.48043 16.8946 8.29289 16.7071C8.10536 16.5196 8 16.2652 8 16C8 15.7348 7.89464 15.4804 7.70711 15.2929C7.51957 15.1054 7.26522 15 7 15C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.7956 6.31607 17.5587 6.87868 18.1213C7.44129 18.6839 8.20435 19 9 19H11V21C11 21.2652 11.1054 21.5196 11.2929 21.7071C11.4804 21.8946 11.7348 22 12 22C12.2652 22 12.5196 21.8946 12.7071 21.7071C12.8946 21.5196 13 21.2652 13 21V19H14C15.0609 19 16.0783 18.5786 16.8284 17.8284C17.5786 17.0783 18 16.0609 18 15C18 13.9391 17.5786 12.9217 16.8284 12.1716C16.0783 11.4214 15.0609 11 14 11Z"
              fill="black"
            />
          </svg>
          <p className="font-bold text-[18px]">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
