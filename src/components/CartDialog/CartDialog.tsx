"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ProductTypes } from "@/utils/types";
import { useRouter } from "next/navigation";
import {
  addProductCart,
  checkInCartHandle,
  handleUpdateLiked,
  removeProductCart,
} from "@/utils/actions";
import { useToast } from "@/hooks/use-toast";
import { toast } from "sonner";
import { useAppContext } from "@/utils/context/AppContext";

interface ShoesItemDialogProps {
  product: ProductTypes;
  brandId: string;
  brandName: string;
}

const CartDialog = ({ product, brandName, brandId }: ShoesItemDialogProps) => {
  const [sizeValue, setSizeValue] = useState<number>();
  const { openCartDialog, setOpenCartDialog } = useAppContext();
  const router = useRouter();
  const { toast } = useToast();

  const addProductCartHandle = () => {
    addProductCart({
      brandId: brandId,
      brandName: brandName,
      product: product,
    });
    toast({
      title: "Product add in cart successfull",
      className: "w-fit",
    });
    router.refresh();
  };

  const handleFavorateChanges = () => {
    handleUpdateLiked({ brandId, productId: product.id });
    router.refresh();
  };

  const removeFromCartHandle = () => {
    removeProductCart({ brandId, productId: product.id });
    toast({
      variant: "destructive",
      title: "Removed product in cart successfull",
      className: "w-fit",
    });

    router.refresh();
  };

  return (
    <Dialog onOpenChange={setOpenCartDialog} open={openCartDialog}>
      <DialogContent className="max-w-[730px] bg-[#F0E8E8] grid grid-cols-2 gap-4 rounded-xl outline-none">
        {product.pictures && (
          <div className="space-y-4">
            <div className="h-[340px] w-full rounded-xl relative overflow-hidden">
              <Image
                src={product.pictures[0]}
                alt="Shoes-image"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="grid grid-cols-3 gap-2 w-full">
              {product.pictures.slice(1).map((pic, i) => (
                <div
                  key={i}
                  className="h-[85px] w-full rounded-lg relative overflow-hidden"
                >
                  <Image
                    src={pic}
                    alt="Shoes-image"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                    className=""
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <DialogTitle className="flex items-center space-x-2">
              <svg
                width={50}
                height={42}
                viewBox="0 0 50 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.0001 38.5C36.506 38.5 45.8334 30.665 45.8334 21C45.8334 11.335 36.506 3.5 25.0001 3.5C13.4941 3.5 4.16675 11.335 4.16675 21C4.16675 30.665 13.4941 38.5 25.0001 38.5Z"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.8125 14L41.7708 31.395"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.1875 14H44.1042"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.375 21L27.3333 3.605"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.1876 28L8.22925 10.605"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.8124 28H5.89575"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M34.6251 21L22.6667 38.395"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-[24px] text-black font-semibold uppercase">
                {brandName}
              </p>
            </DialogTitle>

            <div className="space-y-1">
              <p className="text-[20px] font-medium text-black">
                Shoes Reebok Zig Kinetica 3
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={index}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 9.67C21.9368 9.48709 21.822 9.32643 21.6693 9.2075C21.5167 9.08858 21.3328 9.0165 21.14 9L15.45 8.17L12.9 3C12.8181 2.83093 12.6902 2.68834 12.5311 2.58857C12.3719 2.48881 12.1878 2.43589 12 2.43589C11.8121 2.43589 11.6281 2.48881 11.4689 2.58857C11.3097 2.68834 11.1819 2.83093 11.1 3L8.54998 8.16L2.85998 9C2.6749 9.02631 2.5009 9.10396 2.35773 9.22416C2.21455 9.34435 2.10794 9.50227 2.04998 9.68C1.99692 9.85367 1.99216 10.0385 2.03621 10.2147C2.08025 10.3909 2.17144 10.5517 2.29998 10.68L6.42998 14.68L5.42998 20.36C5.3896 20.5484 5.40453 20.7445 5.47296 20.9246C5.54139 21.1048 5.66041 21.2613 5.81571 21.3754C5.971 21.4895 6.15595 21.5563 6.34831 21.5677C6.54066 21.5792 6.73224 21.5348 6.89998 21.44L12 18.77L17.1 21.44C17.2403 21.5192 17.3988 21.5605 17.56 21.56C17.7718 21.5608 17.9784 21.4942 18.15 21.37C18.3051 21.2589 18.4252 21.1056 18.4961 20.9285C18.567 20.7513 18.5857 20.5575 18.55 20.37L17.55 14.69L21.68 10.69C21.8244 10.5677 21.9311 10.4069 21.9877 10.2263C22.0444 10.0458 22.0486 9.85287 22 9.67ZM15.85 13.67C15.7342 13.7824 15.6474 13.9211 15.5969 14.0744C15.5464 14.2276 15.5337 14.3908 15.56 14.55L16.28 18.75L12.52 16.75C12.3738 16.6777 12.213 16.6401 12.05 16.6401C11.8869 16.6401 11.7261 16.6777 11.58 16.75L7.81998 18.75L8.53998 14.55C8.56622 14.3908 8.55354 14.2276 8.50305 14.0744C8.45255 13.9211 8.36572 13.7824 8.24998 13.67L5.24998 10.67L9.45998 10.06C9.62198 10.0375 9.77598 9.97554 9.90848 9.87965C10.041 9.78376 10.1479 9.65684 10.22 9.51L12 5.7L13.88 9.52C13.952 9.66684 14.059 9.79376 14.1915 9.88965C14.324 9.98554 14.478 10.0475 14.64 10.07L18.85 10.68L15.85 13.67Z"
                        fill={index > 2 ? "black" : "#FFD600"}
                        fillOpacity={index > 2 ? "0.5" : "1"}
                      />
                    </svg>
                  ))}
                </div>
                <p>42 reviews</p>
              </div>
            </div>

            <div>
              <p className="text-[28px] text-black font-bold">
                $ {product.price}
              </p>

              {product.color && (
                <div className="space-y-3">
                  <h1 className="text-[24px] font-semibold">COLOR</h1>

                  <div className="flex items-center space-x-4">
                    {product.color.map((color, index) => {
                      return (
                        <div
                          key={index}
                          style={{
                            background: `${color}`,
                          }}
                          className={cn("w-5 h-5 rounded-full")}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              )}

              {product.size && (
                <div className="space-y-3">
                  <h1 className="text-[24px] font-semibold">SIZES</h1>

                  <div className="flex items-center flex-wrap gap-2">
                    {product.size.map((size, index) => {
                      return (
                        <div
                          style={{
                            boxShadow:
                              size === sizeValue
                                ? "0px 0px 0px 0.694px rgba(179, 153, 255, 0.50)"
                                : "none",
                          }}
                          key={index}
                          onClick={() => setSizeValue(size)}
                          className={cn(
                            "w-[55px] h-[33px] cursor-pointer border border-transparent rounded-sm  bg-white/75 flex items-center justify-center",
                            size === sizeValue && "border-[#9A77FF]"
                          )}
                        >
                          {size}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              {!checkInCartHandle(brandId, product.id) ? (
                <Button
                  text="Add to cart"
                  onClick={addProductCartHandle}
                  className="bg-black outline-none border-none hover:bg-black/80 transition ease-in-out duration-300 h-12 rounded-xl text-[30px] text-white flex flex-1"
                  svg={
                    <svg
                      width={27}
                      height={26}
                      viewBox="0 0 27 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.95487 23.8333C7.36912 23.8333 6.86769 23.6212 6.45057 23.1969C6.03345 22.7726 5.82489 22.2625 5.82489 21.6667C5.82489 21.0708 6.03345 20.5608 6.45057 20.1364C6.86769 19.7121 7.36912 19.5 7.95487 19.5C8.54061 19.5 9.04204 19.7121 9.45916 20.1364C9.87628 20.5608 10.0848 21.0708 10.0848 21.6667C10.0848 22.2625 9.87628 22.7726 9.45916 23.1969C9.04204 23.6212 8.54061 23.8333 7.95487 23.8333ZM18.6047 23.8333C18.019 23.8333 17.5176 23.6212 17.1004 23.1969C16.6833 22.7726 16.4748 22.2625 16.4748 21.6667C16.4748 21.0708 16.6833 20.5608 17.1004 20.1364C17.5176 19.7121 18.019 19.5 18.6047 19.5C19.1905 19.5 19.6919 19.7121 20.109 20.1364C20.5262 20.5608 20.7347 21.0708 20.7347 21.6667C20.7347 22.2625 20.5262 22.7726 20.109 23.1969C19.6919 23.6212 19.1905 23.8333 18.6047 23.8333ZM7.04963 6.49999L9.6056 11.9167H17.0605L19.9892 6.49999H7.04963ZM6.03789 4.33332H21.7465C22.1547 4.33332 22.4653 4.51839 22.6783 4.88853C22.8913 5.25867 22.9002 5.63332 22.7049 6.01249L18.9242 12.9458C18.729 13.3069 18.4672 13.5868 18.1388 13.7854C17.8104 13.984 17.451 14.0833 17.0605 14.0833H9.12635L7.95487 16.25H20.7347V18.4167H7.95487C7.15613 18.4167 6.55263 18.0601 6.14439 17.3469C5.73614 16.6337 5.71839 15.925 6.09114 15.2208L7.52887 12.5667L3.69492 4.33332H1.56494V2.16666H5.02615L6.03789 4.33332Z"
                        fill="#E8EAED"
                      />
                    </svg>
                  }
                />
              ) : (
                <Button
                  text="Remove from cart"
                  onClick={removeFromCartHandle}
                  className="bg-red-500 outline-none hover:bg-red-500/80 transition ease-in-out duration-300 h-12 rounded-xl text-[30px] text-white flex flex-1"
                />
              )}

              <Button
                className="h-12 rounded-xl bg-[#D9D9D9] hover:bg-[#D9D9D9]/50 transition duration-300 ease-in-out"
                onClick={handleFavorateChanges}
                svg={
                  product.liked ? (
                    <svg
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        width={26}
                        height={26}
                        fill="url(#pattern0_84_1098)"
                      />
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
                      <rect
                        width={26}
                        height={26}
                        fill="url(#pattern0_82_1096)"
                      />
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
                  )
                }
              />
            </div>

            <div className="flex items-center space-x-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12.5V16.5C1 16.7652 1.10536 17.0196 1.29289 17.2071C1.48043 17.3946 1.73478 17.5 2 17.5H3C3 18.2956 3.31607 19.0587 3.87868 19.6213C4.44129 20.1839 5.20435 20.5 6 20.5C6.79565 20.5 7.55871 20.1839 8.12132 19.6213C8.68393 19.0587 9 18.2956 9 17.5H15C15 18.2956 15.3161 19.0587 15.8787 19.6213C16.4413 20.1839 17.2044 20.5 18 20.5C18.7956 20.5 19.5587 20.1839 20.1213 19.6213C20.6839 19.0587 21 18.2956 21 17.5H22C22.2652 17.5 22.5196 17.3946 22.7071 17.2071C22.8946 17.0196 23 16.7652 23 16.5V6.5C23 5.70435 22.6839 4.94129 22.1213 4.37868C21.5587 3.81607 20.7956 3.5 20 3.5H8.44C7.81155 3.50118 7.19933 3.69968 6.68977 4.06751C6.1802 4.43533 5.79901 4.95389 5.6 5.55L4.16 9.86L1.45 11.67C1.31244 11.7606 1.19938 11.8838 1.12088 12.0285C1.04238 12.1733 1.00085 12.3353 1 12.5ZM21 9.5H19V5.5H20C20.2652 5.5 20.5196 5.60536 20.7071 5.79289C20.8946 5.98043 21 6.23478 21 6.5V9.5ZM17 17.5C17 17.3022 17.0586 17.1089 17.1685 16.9444C17.2784 16.78 17.4346 16.6518 17.6173 16.5761C17.8 16.5004 18.0011 16.4806 18.1951 16.5192C18.3891 16.5578 18.5673 16.653 18.7071 16.7929C18.847 16.9327 18.9422 17.1109 18.9808 17.3049C19.0194 17.4989 18.9996 17.7 18.9239 17.8827C18.8482 18.0654 18.72 18.2216 18.5556 18.3315C18.3911 18.4414 18.1978 18.5 18 18.5C17.7348 18.5 17.4804 18.3946 17.2929 18.2071C17.1054 18.0196 17 17.7652 17 17.5ZM15 11.5H21V15.5H20.22C19.9388 15.1906 19.5961 14.9435 19.2138 14.7743C18.8315 14.6052 18.418 14.5178 18 14.5178C17.582 14.5178 17.1685 14.6052 16.7862 14.7743C16.4039 14.9435 16.0612 15.1906 15.78 15.5H15V11.5ZM15 5.5H17V9.5H15V5.5ZM11 11.5H13V15.5H11V11.5ZM11 5.5H13V9.5H11V5.5ZM9 9.5H6.39L7.49 6.18C7.55709 5.98138 7.6849 5.80887 7.85537 5.68684C8.02584 5.56482 8.23036 5.49946 8.44 5.5H9V9.5ZM5 17.5C5 17.3022 5.05865 17.1089 5.16853 16.9444C5.27841 16.78 5.43459 16.6518 5.61732 16.5761C5.80004 16.5004 6.00111 16.4806 6.19509 16.5192C6.38907 16.5578 6.56725 16.653 6.70711 16.7929C6.84696 16.9327 6.9422 17.1109 6.98079 17.3049C7.01937 17.4989 6.99957 17.7 6.92388 17.8827C6.84819 18.0654 6.72002 18.2216 6.55557 18.3315C6.39112 18.4414 6.19778 18.5 6 18.5C5.73478 18.5 5.48043 18.3946 5.29289 18.2071C5.10536 18.0196 5 17.7652 5 17.5ZM3 13L5.3 11.5H9V15.5H8.22C7.93882 15.1906 7.59609 14.9435 7.21378 14.7743C6.83148 14.6052 6.41805 14.5178 6 14.5178C5.58195 14.5178 5.16852 14.6052 4.78622 14.7743C4.40391 14.9435 4.06118 15.1906 3.78 15.5H3V13Z"
                  fill="black"
                />
              </svg>

              <p className="font-semibold text-black">
                Free delivery on order over $20
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CartDialog;
