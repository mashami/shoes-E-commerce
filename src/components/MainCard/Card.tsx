/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  checkInCartHandle,
  getProductDetails,
  handleUpdateLiked
} from "@/utils/actions";
import { useAppContext } from "@/utils/context/AppContext";
import { ProductTypes } from "@/utils/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useState } from "react";
import { CartDialog } from "../CartDialog";

interface CardProps {
  product: ProductTypes;
  brandId: string;
  brandName: string;
  openViewDialog: boolean;
  setOpenViewDialog: Dispatch<SetStateAction<boolean>>;
}
const Card = ({
  product,
  setOpenViewDialog,
  brandId,
  brandName
}: CardProps) => {
  const {
    id,
    pictures: [imageUrl] = [][0],
    price,
    name: shoesName,
    liked = false
  } = product;

  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const { setDataFilled, dataFilled } = useAppContext();

  const handleFindProduct = () => {
    setDataFilled(product);
    setOpenViewDialog(true);
    router.refresh();
  };

  const handleUpdateLikedChange = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    handleUpdateLiked({ productId: id, brandId });
    router.refresh();
  };

  const addProductCartHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const getProduct = getProductDetails({ brandId, productId: id });

    if (getProduct) {
      setDataFilled(getProduct);

      setOpen(true);
      router.refresh();
    } else return;
  };

  return (
    <>
      <div
        onClick={handleFindProduct}
        className=" group bg-[#E8EAED] rounded-[16px] overflow-hidden space-y-2 pb-3 relative  shadow-xl cursor-pointer border-[0.5px] border-white/10"
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

          {!checkInCartHandle(brandId, id) && (
            <div
              onClick={addProductCartHandle}
              className="absolute bottom-1 bg-blue-500 hover:bg-blue-400 -translate-x-1/2 left-1/2 group-hover:translate-y-0 translate-y-12 transition duration-300 ease-in-out flex items-center space-x-1 py-1.5 px-4 rounded-full cursor-pointer select-none"
            >
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

              <p className="font-medium text-white">Add</p>
            </div>
          )}
        </div>
        <div className="space-y-2 px-3">
          <p className="py-1 font-medium capitalize text-black">{shoesName}</p>
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

        <div
          onClick={handleUpdateLikedChange}
          className="p-1 rounded-full bg-[#ECE2E2] absolute top-0 right-2 flex items-center justify-center hover:bg-[#ECE2E2]/80 transition ease-in-out duration-300 cursor-pointer"
        >
          {liked ? (
            <svg
              width={26}
              height={26}
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width={26} height={26} fill="url(#pattern0_84_1098)" />
              <defs>
                <pattern
                  id="pattern0_84_1098"
                  patternContentUnits="objectBoundingBox"
                  width={1}
                  height={1}
                >
                  <use
                    xlinkHref="#image0_84_1098"
                    transform="scale(0.0111111)"
                  />
                </pattern>
                <image
                  id="image0_84_1098"
                  width={90}
                  height={90}
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7UlEQVR4nO2cS4hcRRSGS018xYg6ZLrP6c4Mxu5zOkMmiiPiY5GFCxU1IoIgrtWFIroQJQjiQjH4XhmSjRhRHPFBCOPcc3pso52oMOJjoYnIqIu4NBljhOgkV2pmQIxOTKfr3qrbXR/8m+6h5/x/V9e9VbeqjIlEIpFIJBKJRCKRSCQSifwvE7WLzhfGjcLwvDCoEv4kDAeUMRXCQ0qwXxmmlPGFhPGWPdXqOa5j3TEG59rPVsIXheADJfh5/n/bGhgOCOGPQijC8Jz9uzYPrCzMV5sQXKuErwvD79ZQB5pVxq0JlS7utgatD65Rxm1C+GtHNRAeFsLXtIFXm1BJ6niZELQ6DDc9XkLwhxBsadarlU5raNUqVftl2c/otg5laDapst6EwvTY2HJh3KyMc92bw78Dtz/tBtx5snUow13KcNBpDYR/CuFTrQ1mmfFJc91gSQj2uDSn/9arreHhs5eqwb6njNszrqE9USuvMj6YWlseVoLvMjaYLmrXztGhC4+vwb4mjB/lUYMQ7NMRGMo15GRNaTDHkNMFwRet4eEL/hkyfJVnDTbs3Fr2fJ+cfXeRLqG27SqshGC3jxrsLyiXPnvxwpd61LZF+auB8MlMQ1aujtorseegU9+yGUzWK5dmFrSL+2TtEdnRbjYhNypX+TangWmK8RrnQdthtW9jGp62ZzBB1PHcRe+L8LfWyKrznAWtBLd6N8WBql65yVnQdqrTuyEOVATPugxavRviQEU46SxoJfzBuyEOVjPOgu54Ar2vBAddBt33o0FdImibjbOgXU+oay+J4BeHQeOMd0McpoThe2dBC+Hnvg1poBKGz9wFzfiub0Maqgjfdha0Mj7m3RAHKoJHnQUtDNd7N8RhSgivcxa0NnBAGY/6NqXhae6/Hhp3FzbjxwEYS0OSfRBiXCMED/o2poFJGnC/86DtcithPObbnIajo8Kr0WTB4upP3wbTEGRXoWYS8nzQDbzZt0ENRE0q35hZ0Kkxpynjt75NqvfWDPseN+Z0kyVNLt/r26j6DroOd5usscuhlPGbPm7Ne+2yOJMHyuXb+zZoxo0mL2xf7XGhY+pRu0ze2G0HbrYwYDFEcCRplNYZH9htB94D4LwETxhfTNRqZ/XDhVEI9p5oe0cuNOvVK3u6CyE4Ily+woSAMj7cu0FXHjKhMD9iJNjhPRR2K2GcsN5MSNhNND22omnGPvAwIWK3G9ilrIVvyWT3i1dHTcgkdbityPPWwnhMCO8wRUAYNhU3aNhkioQQvuQ7NO1UBC+bomHna4XgreK0ZHxv3JgzTBFZ2OGKEn5LxsSOck2RsafASNj7E9vJ+tIK0wu0eWBloNOqbae7qkIgWV9aEdReGMIPC3WG0inM9r3jPWSGnVkclhUUrQ1mmRC84itkYXgjt2d+Idz6KePW3EMm2JL5MoHQSBdm/J7JryXj5uBm4vJEG3BPxru+5pThAd8+g0AWFrrPuu8q8JA9odG3v6BQro7aYzWdBU2wv9mAy337CpL3G0OghNPdBw1fTl6Cq337CX5gowzjXYT8Zs8MqXNaCfVIJ8dwLj5seLqv7yxOFaXyDXYL8EkEPZvrmrheRNZW6ic8sZHg68mRas13nT3B9NjY8oTwPiX4ZP7hL+FhZfjUvjY+MnKm7/oikUgkEolEIpFIJBKJREyf8RdzPqc78TOCDgAAAABJRU5ErkJggg=="
                />
              </defs>
            </svg>
          ) : (
            <svg
              width={26}
              height={26}
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width={26} height={26} fill="url(#pattern0_82_1096)" />
              <defs>
                <pattern
                  id="pattern0_82_1096"
                  patternContentUnits="objectBoundingBox"
                  width={1}
                  height={1}
                >
                  <use
                    xlinkHref="#image0_82_1096"
                    transform="scale(0.0111111)"
                  />
                </pattern>
                <image
                  id="image0_82_1096"
                  width={90}
                  height={90}
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADkklEQVR4nO3c2UtWQRjH8UkzzYg2CAoiaLmosIgKIoiKaMMuu4qgi266CwpaLqLEKLANihYhwsKoi6yw5S/opmghMqmLaLNAzfZd8xuDD2XxZvY658ycc54PvLfOPD9fxzlzZsYYpZRSSimllFJKKdUrQDEwH6gAzgONwCvgG/AZeAHcBU4B64EyV9ECU4EN8rMbpC3b5lfpwz3pU4X0sThxv1ZgOlANvOb/3Qc2AUPzaHcYsAV4kEe7Nvyjtu8mdMA04ArQSd+9k29baS/aHQRUAu8dtGv7fsnlX5czQAmwD2jHvafA4h7aXgo0RdCurWV3MEMKMAG4TbQ6gSqgoFu7BcAeR389PbkFjPcd8kygmficAwbKP9kzMbbbBsz2FfIsGUfjdlU+cbO1zvAxXLSQPc3AuLhCLpZxK6vu2OErjqD3+q40AFVRh1wmT3VZ126fGaIM2j6MqC71UT5WRz1nTZLOSL7VsnahfncoiplGPgtEadcGDHAZ9ALfFQVsrsug7Sqaym2by6Av/KURBXUug7ZvRlRuDS6DtoO+yq3VZdD2PZvK7YsGncCgW2PqdBI1uwz6hu9qAnbNZdAnfVcTsBqXQa/2XU3AVrkMeiTw3XdFAbKZjHQWtIR903dVAbruNGQJerPvqgK0MYqghwMffFcWkI/ACOdBS9i6+P/L4UhClqCn6Ousn6+xJkUWtIQd51asUNVGGrIEPUbGp6z6BIyNPGgJeyfZVRlLyBL0YDmqkDXPbe2xBS1hLyd7ymMNuVvYNWTHMS8hS9BDgCek37N8Di+5Dnsh0EF6ddjjcSYEwFbSa7MJBdBPDkemzUVbmwmJHKZ8SHo8sgtpJkTA5JRshnxrjzibkAFLIjrYGRd7omGRSQJgDcm11iQJsIvk2WGSRmYi9raApDhikkrOa58mfHVAoUkyoAi4TLjslRFFJg2AAYE+0NgvQIlJE7rCPks46oO5i8M1oDCQfXz2vWd/k2Z0hX3cY8i1qQ/5j6nfQQ8hV3e/xSZLYR+IMeT9wa3ExQlYF/FOVbvZZbvvOoMArJDL/1yzh5xW+q4vKMAc4KXDkO2FgfN81xXyevZjByE3Bb+e7Bswuo+b3u3BplG+60gEum6GPJHng8g/r9hUuWckHb2dWWR6+tZXQDnwpoeQ7TvKZb77mQrARLlv7k+NkW8IzxqgVC59bZGPvX9Px2OllFJKKaWUUkopE78feRVF2kwveqwAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
          )}
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
    </>
  );
};

export default Card;
