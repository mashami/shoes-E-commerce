"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";
import { ProductTypes } from "@/utils/types";
import { useRouter } from "next/navigation";
import {
  checkInCartHandle,
  getProductDetails,
  handleUpdateLiked,
  removeProductCart
} from "@/utils/actions";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { useAppContext } from "@/utils/context/AppContext";
import { cn } from "@/lib/utils";

interface ViewItemDialogProps {
  openViewDialog: boolean;
  setOpenViewDialog: Dispatch<SetStateAction<boolean>>;
  product: ProductTypes;
  brandId: string;
  brandName: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const ViewItemDialog = ({
  openViewDialog,
  setOpenViewDialog,
  product,
  brandName,
  brandId,
  setOpen
}: ViewItemDialogProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = React.useState<CarouselApi>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setCount] = useState(0);
  const router = useRouter();
  // Store refs for each CarouselItem

  const { setDataFilled } = useAppContext();

  const viewProductViewHandle = () => {
    const getProduct = getProductDetails({ brandId, productId: product.id });

    if (getProduct) {
      setDataFilled(getProduct);
      setOpenViewDialog(false);
      setOpen(true);
      // openingCartHandle({ brandId, productId: product.id });
      router.refresh();
    } else return;
  };

  const handleFavorateChanges = () => {
    handleUpdateLiked({ brandId, productId: product.id });

    router.refresh();
  };

  const handleRemoveProduct = () => {
    removeProductCart({ brandId, productId: product.id });
    toast("Removed product from cart successfull");
    router.refresh();
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrentIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Dialog onOpenChange={setOpenViewDialog} open={openViewDialog}>
      <DialogContent className="max-w-[800px] bg-[#F0E8E8] gap-1 rounded-xl outline-none md:px-16 px-12">
        <DialogTitle>
          <p className="text-[32px] text-black font-bold uppercase">
            {brandName}
          </p>
        </DialogTitle>
        {product.pictures && (
          <div className="space-y-4">
            <Carousel setApi={setApi}>
              <CarouselContent className="h-[340px]">
                {product.pictures.map((p, i) => (
                  <CarouselItem
                    key={i}
                    className="relative h-full w-full rounded-xl overflow-hidden select-none"
                  >
                    <Image
                      src={p}
                      alt="Shoes-image"
                      fill
                      style={{
                        objectFit: "cover"
                      }}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious
                // onClick={handlePrevClick}
                className="rounded-lg px-4"
                svg={
                  <svg
                    width={28}
                    height={25}
                    viewBox="0 0 28 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width={28}
                      height={25}
                      fill="url(#pattern0_95_1111)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_95_1111"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <use
                          xlinkHref="#image0_95_1111"
                          transform="matrix(0.00992063 0 0 0.0111111 0.0535714 0)"
                        />
                      </pattern>
                      <image
                        id="image0_95_1111"
                        width={90}
                        height={90}
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABIElEQVR4nO3ay0rDUBSG0V8HasFHFykieAMfwkHxpbzgrcPKgYy8pKUmu0LWgj0r5PBRTpLTJgAAAAAAAAAAAPDNYZKTJA9J3pJcJZnpNHzkRZLVl2mxGTlymxeVx4/c5nmg60zaushtTne9yClEXnSfY0sHSe7WRL5PcqTw9kQuIHIBkQuIXEDkAiIXELmAyAVmG7zxmfQ2eEpyvu6I+EbIDPVFuvwt8n6SD6EzVOj3rumPoZdCZ/TQzbXQGSr0Rd8e3U7c3Azzp8CPSc42+b3U410hsQuJXUjsQmIXEruQ2IXELiR2IX+g+Wex55ULmnLs1yR7u17kFGIv+44KGS72rZjjxJ5328Wyi3w8wnXotD3ZvgwAAAAAAAAAAJBqn4WM1glTQfSpAAAAAElFTkSuQmCC"
                      />
                    </defs>
                  </svg>
                }
              />
              <CarouselNext
                // onClick={handleNextClick}
                className="rounded-lg px-4"
                svg={
                  <svg
                    width={30}
                    height={24}
                    viewBox="0 0 30 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width={30}
                      height={24}
                      fill="url(#pattern0_95_1112)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_95_1112"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <use
                          xlinkHref="#image0_95_1112"
                          transform="matrix(0.00888889 0 0 0.0111111 0.1 0)"
                        />
                      </pattern>
                      <image
                        id="image0_95_1112"
                        width={90}
                        height={90}
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABG0lEQVR4nO3avUoDURSF0W2KRMUnt7EQwdj4DhbqO1ko/qU0DEwlZqaYOycmrAXThuHjckhuTgIAAAAAAAAAAABH5yzJOslnkpckl0lW+36pY7RO8vPreRS7rZMkH3+EFnsG7ztCi93Y1UBosRta9TNZ7ALLJA8jsZ+TnFa8zLFbil1H7EJiFxK7kNiFxC4k9iHGPk9yk+Rt5MM8Gf0FORj7VsS0OkR3uyIvknwLnVahv/qmQmdPoY2ONA3djeHB/82uk7waIZkS+ckN3zS+SxcQuYDIBUQuIHIBkQuIXEDkAiL/owUaOx0TdVcPIs9s0d+2OckFoTcD48JCekP3Ite46GNv+qX0bo3XSZ55+x8AAAAAAAAAACCHZwumR9YV2CkXmwAAAABJRU5ErkJggg=="
                      />
                    </defs>
                  </svg>
                }
              />
            </Carousel>

            <div className="grid grid-cols-4 gap-2 w-full">
              {product.pictures.map((pic, i) => (
                <div
                  key={i}
                  // onClick={() => setCurrentIndex(i)}
                  className={cn(
                    "h-[85px] w-full rounded-lg relative overflow-hidden border-[0.5px] border-transparent select-none",
                    i === currentIndex && "border-[#9A77FF]"
                  )}
                  style={{
                    boxShadow:
                      i === currentIndex
                        ? "0px 0px 0px 0.694px rgba(179, 153, 255, 0.9)"
                        : "none"
                  }}
                >
                  <Image
                    src={pic}
                    alt="Shoes-image"
                    fill
                    style={{
                      objectFit: "cover"
                    }}
                    className=""
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-1">
          <div className="space-y-1 text-lg font-thin text-[20px] select-none">
            {product.name}
          </div>

          <div className="space-y-3 flex items-center  justify-end">
            <div className="flex items-center space-x-3">
              <Button
                text="View All details"
                onClick={viewProductViewHandle}
                className="bg-black outline-none border-none hover:bg-black/80 transition ease-in-out duration-300 h-12 rounded-xl text-[30px] text-white flex"
              />
              {checkInCartHandle(brandId, product.id) && (
                <Button
                  text="Remove from cart"
                  onClick={handleRemoveProduct}
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewItemDialog;
