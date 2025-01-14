"use client";
//@typescript-eslint/no-unused-expressions
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { ProductTypes } from "@/utils/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ViewItemDialogProps {
  openViewDialog: boolean;
  setOpenViewDialog: Dispatch<SetStateAction<boolean>>;
  product: ProductTypes;
  brandName: string;
  setOpenEditDialog: Dispatch<SetStateAction<boolean>>;
}

const ViewItemDialog = ({
  openViewDialog,
  setOpenViewDialog,
  product,
  brandName,
  // brandId,
  setOpenEditDialog
}: ViewItemDialogProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = React.useState<CarouselApi>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setCount] = useState(0);
  //ygugyguguy
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

  const handleEditOpen = () => {
    setOpenEditDialog(true);
    setOpenViewDialog(false);
  };

  return (
    <Dialog onOpenChange={setOpenViewDialog} open={openViewDialog}>
      <DialogContent className="md:max-w-[700px] max-w-full bg-[#F0E8E8] gap-1 rounded-xl outline-none md:px-16 px-12">
        <DialogTitle className="flex items-center justify-between">
          <p className="text-[32px] text-black font-bold uppercase">
            {brandName}
          </p>
          <p className="mb-2 text-[26px] font-semibold select-none">
            {product.name}
          </p>
        </DialogTitle>
        {product.pictures && (
          <div className="space-y-4">
            <Carousel setApi={setApi}>
              <CarouselContent className="h-[300px]">
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
                  onClick={() => api?.scrollTo(i)}
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

        <div className="space-y-1 pt-4">
          {product.description && (
            <div className=" text-lg">
              <p className="select-none text-[20px] font-bold">Description:</p>
              <p className="text-[18px] select-none">{product.description}</p>
            </div>
          )}

          {product.color && (
            <div className="flex items-center space-x-2">
              <h1 className="text-[20px] font-semibold ">COLOR :</h1>

              <div className="flex flex-1 flex-wrap items-center gap-4">
                {product.color.map((col, index) => {
                  return (
                    <div
                      key={index}
                      className={cn(
                        " rounded-full p-[2px] border border-transparent"
                      )}
                    >
                      <div
                        className="w-5 h-5 rounded-full"
                        style={{
                          background: `${col}`
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {product.size && (
            <div className="flex items-center space-x-2">
              <h1 className="text-[20px] font-semibold">SIZES :</h1>

              <div className="flex items-center flex-wrap gap-2">
                {product.size.map((size, index) => {
                  return (
                    <div
                      key={index}
                      className={cn(
                        "w-[55px] h-[33px] border-t-[2px] border-[#9A77FF] border-transparent rounded-sm  bg-white/75 flex items-center justify-center"
                      )}
                    >
                      {size}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="space-y-3 flex items-center  justify-end">
            <div className="flex items-center space-x-3">
              <Button
                text="Edit"
                onClick={handleEditOpen}
                className="bg-[#8155FF] outline-none border-none hover:bg-[#8155FF]/80 transition ease-in-out duration-300 h-12 rounded-xl text-white flex"
                position="right"
                svg={
                  <svg
                    width={25}
                    height={20}
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width={30}
                      height={30}
                      fill="url(#pattern0_127_732)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_127_732"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <use
                          xlinkHref="#image0_127_732"
                          transform="scale(0.0333333)"
                        />
                      </pattern>
                      <image
                        id="image0_127_732"
                        width={30}
                        height={30}
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqklEQVR4nO3VsQ2CQBSAYUpHMK5gS+EQ2ugkJPZSOoy6DLUjaNzgMxQkmChIwoNo+Bf4cu9d7pJk6pdDhjsKpEOhudceWI0BV3g6Fl5EQXkLfotAq5rwLAptwvNotOrYG9QBjcF9h5YdJrRz03j/7yKVYYlLC9rfi1QP68FOWg/zwdEqLLCpjb3/8WKGfcPOw3a6C/1dPoVTbY9vTx4SrjhjW459MHgqCewJ+YXEOk0YRjsAAAAASUVORK5CYII="
                      />
                    </defs>
                  </svg>
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
