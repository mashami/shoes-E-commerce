/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { fileToDataURI } from "@/utils/helpers";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState, useTransition } from "react";
import { v4 } from "uuid";
import { FormField } from "../FormField";
import { Button } from "../ui/button";
import { Loader } from "../Loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../ui/select";
import { Input } from "../ui/input";
import { staticShoesData } from "@/utils/actions";
import { ColorPicker } from "../ColorPicker";
import style from "../FormField/FormField.module.scss";

interface AddProductDialogProps {
  setIsAddProductOpen: (arg0: boolean) => void;
  isAddProductOpen: boolean;
}

interface ImageObject {
  id: string;
  url: string;
}

const getInitialImages = () => [
  {
    id: v4(),
    url: ""
  },
  {
    id: v4(),
    url: ""
  },
  {
    id: v4(),
    url: ""
  },
  {
    id: v4(),
    url: ""
  }
];

const AddProductDialog = ({
  setIsAddProductOpen,
  isAddProductOpen
}: AddProductDialogProps) => {
  const [productName, setProductName] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [brandName, setBrandName] = useState<string>("");
  const [newBrand, setNewBrand] = useState<string>("");
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [images, setImages] = useState<ImageObject[]>(getInitialImages());
  const [isPending, startTransition] = useTransition();
  const isMutating = isPending || isLoading;
  const router = useRouter();

  const brandNames = staticShoesData.map((value) => value.brandName);
  const [colorSelected, setColorSeleted] = useState<string[]>();
  const [sizes, setSizes] = useState<string[]>();
  const [size, setSize] = useState<string>("");

  const deleteImageHandle = (id: string) => {
    const updatedImages = images.map((image) => {
      if (image.id === id) {
        image.url = "";
      }

      return image;
    });

    setImages(updatedImages);
  };

  const isMaxImagesUploaded = useMemo(() => {
    const filteredImages = images.filter((image) => image.url !== "");

    if (filteredImages.length === 4) {
      return true;
    } else {
      return false;
    }
  }, [images]);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files || [];

    const emptyImages = images.filter((image) => image.url === "");
    const imagesToUpdate = emptyImages.slice(0, files.length);
    const imagesWithUrl = images.filter((image) => image.url !== "");

    const totalImagesLength = imagesWithUrl.length + files.length;

    if (totalImagesLength > 4) {
      return toast({
        variant: "destructive",
        description: "Images is exceed 4 images"
      });
    }

    const updatedImages = await Promise.all(
      Array.from(files).map(async (file) => {
        const url = (await fileToDataURI(file)) as any;

        if (url?.error) return;

        return { id: v4(), url };
      })
    );

    const updatedImageObjects = images.map((image) =>
      imagesToUpdate.includes(image) ? updatedImages.shift() || image : image
    );

    setImages(updatedImageObjects);
  };

  const sizesHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isSizeExit = sizes?.find((siz) => siz === size);
    if (isSizeExit) {
      return;
    }
    setSizes((prev) => (prev ? [...prev, size] : [size]));
    setSize("");
  };

  const imagesWithUrl = useMemo(() => {
    const filter = images.filter((image) => image.url !== "");

    return filter;
  }, [images]);

  const imagesWithoutUrl = useMemo(() => {
    const filter = images.filter((image) => image.url === "");

    return filter;
  }, [images]);


  return (
    <>
      <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
        <DialogContent className="product-dialog md:p-8 p-6 space-y-1 max-w-[351px] rounded-lg md:max-w-[645px] h-[95%] 2xl:h-[55%] overflow-y-auto">
          <DialogTitle className="text-[#8155FF] text-2xl font-bold text-center">
            product add
          </DialogTitle>

          <FormField
            label="product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <FormField
            label="product description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            isTextArea={true}
          />

          <FormField
            label="product price"
            value={productPrice}
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9]/g, "");
              setProductPrice(Number(value).toLocaleString());
            }}
          />
          <FormField
            // className="w-fit"
            label="How many total prodicts in stock"
            value={totalProducts}
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9]/g, "");
              setTotalProducts(Number(value));
            }}
          />

          <div className="flex flex-col gap-3 w-full">
            <p className="text-[#8155FF] font-semibold">Brand name</p>

            <div className="flex items-center justify-between gap-5">
              <Select
                onValueChange={(value) => setBrandName(value)}
                value={brandName}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Brand Name" />
                </SelectTrigger>
                <SelectContent>
                  {brandNames.map((value, index) => (
                    <SelectItem key={index} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <p>Or</p>

              <Input
                placeholder="Add new brand"
                className="flex flex-col flex-1 max-w-[200px] focus-visible:ring-[#8155FF]"
                value={newBrand}
                onChange={(e) => {
                  setNewBrand(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-16">
            <div className="flex flex-col gap-2">
              <form onSubmit={(event) => sizesHandle(event)} action="">
                <FormField
                  label="Enter sizes"
                  className="w-full"
                  value={size}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, "");
                    setSize(Number(value).toString());
                  }}
                />
              </form>

              {sizes && (
                <div className="flex items-center justify-between flex-wrap gap-3 w-full">
                  {sizes.map((size, index) => {
                    return (
                      <div
                        key={index}
                        className={cn(
                          "py-1 px-3 rounded-lg border w-fit border-[#8155FF] ring-2 ring-[#b399ff80]",
                          `${style.inputBorder}`
                        )}
                      >
                        {size}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="flex flex-col flex-1 space-y-7 ">
              <ColorPicker setColorSeleted={setColorSeleted} />

              {colorSelected && (
                <div className="grid grid-cols-7 gap-3 w-full ">
                  {colorSelected.map((value, index) => (
                    <div
                      key={index}
                      className={cn(
                        "h-4 w-4 ring-2 ring-[#E6E6E6] ring-offset-2 block rounded-full "
                      )}
                      style={{
                        background: value
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[11px] bg-white p-4 ">
            {imagesWithUrl.map((image) => (
              <div
                key={image.id}
                className="h-[189px] relative rounded-lg overflow-hidden bg-[#F4F4F6]"
              >
                <Image
                  src={image.url}
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                  alt="Product image"
                />

                <div className="absolute h-full w-full bg-black/30 flex items-center justify-center">
                  <span
                    className="w-8 h-8  rounded-full bg-white cursor-pointer hover:opacity-80 flex justify-center items-center"
                    onClick={() => deleteImageHandle(image.id)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.6002 4.15H3.4002C3.28085 4.15 3.16639 4.19741 3.082 4.2818C2.99761 4.36619 2.9502 4.48065 2.9502 4.6C2.9502 4.71935 2.99761 4.83381 3.082 4.9182C3.16639 5.00259 3.28085 5.05 3.4002 5.05H4.1502V16C4.1502 16.2785 4.26082 16.5455 4.45773 16.7425C4.65465 16.9394 4.92172 17.05 5.2002 17.05H14.8002C15.0787 17.05 15.3457 16.9394 15.5427 16.7425C15.7396 16.5455 15.8502 16.2785 15.8502 16V5.05H16.6002C16.7195 5.05 16.834 5.00259 16.9184 4.9182C17.0028 4.83381 17.0502 4.71935 17.0502 4.6C17.0502 4.48065 17.0028 4.36619 16.9184 4.2818C16.834 4.19741 16.7195 4.15 16.6002 4.15ZM14.9502 16C14.9502 16.0398 14.9344 16.0779 14.9063 16.1061C14.8781 16.1342 14.84 16.15 14.8002 16.15H5.2002C5.16041 16.15 5.12226 16.1342 5.09413 16.1061C5.066 16.0779 5.0502 16.0398 5.0502 16V5.05H14.9502V16ZM6.5502 2.2C6.5502 2.08065 6.59761 1.96619 6.682 1.8818C6.76639 1.79741 6.88085 1.75 7.0002 1.75H13.0002C13.1195 1.75 13.234 1.79741 13.3184 1.8818C13.4028 1.96619 13.4502 2.08065 13.4502 2.2C13.4502 2.31935 13.4028 2.43381 13.3184 2.5182C13.234 2.60259 13.1195 2.65 13.0002 2.65H7.0002C6.88085 2.65 6.76639 2.60259 6.682 2.5182C6.59761 2.43381 6.5502 2.31935 6.5502 2.2Z"
                        fill="#FF3939"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            ))}

            <div
              className={cn(
                isMaxImagesUploaded ? "hidden" : "flex",
                "bg-[#F4F4F6] justify-center items-center rounded-lg relative cursor-pointer h-[189px]"
              )}
            >
              <div>
                <span className="flex justify-center items-center rounded-full w-10 h-10 bg-white cursor-pointer mx-auto">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.0625 12.0007C23.0675 13.746 22.5011 15.445 21.45 16.8382C21.4057 16.8973 21.3501 16.9471 21.2866 16.9847C21.223 17.0224 21.1527 17.0471 21.0795 17.0575C21.0064 17.068 20.9319 17.0639 20.8604 17.0456C20.7888 17.0273 20.7216 16.995 20.6625 16.9507C20.6034 16.9064 20.5536 16.8509 20.516 16.7873C20.4783 16.7237 20.4536 16.6534 20.4431 16.5802C20.4327 16.5071 20.4367 16.4327 20.4551 16.3611C20.4734 16.2895 20.5057 16.2223 20.55 16.1632C21.2095 15.2838 21.6507 14.2602 21.837 13.1769C22.0234 12.0935 21.9497 10.9814 21.6219 9.93216C21.2941 8.8829 20.7217 7.92655 19.9519 7.14191C19.182 6.35728 18.2367 5.76682 17.1938 5.41921C16.151 5.07159 15.0404 4.97676 13.9537 5.14254C12.8671 5.30832 11.8353 5.72996 10.9435 6.37271C10.0518 7.01545 9.32552 7.86091 8.82461 8.83941C8.32369 9.81791 8.06248 10.9014 8.06248 12.0007C8.06248 12.1499 8.00321 12.293 7.89772 12.3984C7.79223 12.5039 7.64916 12.5632 7.49998 12.5632C7.35079 12.5632 7.20772 12.5039 7.10223 12.3984C6.99674 12.293 6.93748 12.1499 6.93748 12.0007C6.93677 11.1855 7.06038 10.3749 7.30404 9.59695C7.12017 9.57491 6.93516 9.56364 6.74998 9.5632C5.50677 9.5632 4.31449 10.0571 3.43541 10.9361C2.55634 11.8152 2.06248 13.0075 2.06248 14.2507C2.06248 15.4939 2.55634 16.6862 3.43541 17.5653C4.31449 18.4443 5.50677 18.9382 6.74998 18.9382H8.99998C9.14916 18.9382 9.29223 18.9975 9.39772 19.103C9.50321 19.2084 9.56248 19.3515 9.56248 19.5007C9.56248 19.6499 9.50321 19.793 9.39772 19.8984C9.29223 20.0039 9.14916 20.0632 8.99998 20.0632H6.74998C5.94548 20.0629 5.1498 19.8956 4.41329 19.572C3.67679 19.2483 3.0155 18.7752 2.47127 18.1827C1.92705 17.5903 1.51174 16.8913 1.25163 16.13C0.991528 15.3687 0.89229 14.5617 0.960199 13.7601C1.02811 12.9584 1.26169 12.1796 1.64615 11.4729C2.03061 10.7663 2.55759 10.1471 3.19373 9.65459C3.82986 9.16211 4.56131 8.80704 5.34177 8.61186C6.12223 8.41668 6.93471 8.38563 7.72779 8.5207C8.51709 6.87188 9.84327 5.54024 11.4888 4.74416C13.1344 3.94808 15.0016 3.73483 16.7843 4.13938C18.567 4.54394 20.1592 5.54228 21.3 6.97067C22.4407 8.39906 23.0622 10.1727 23.0625 12.0007ZM14.6475 11.6032C14.542 11.4979 14.399 11.4387 14.25 11.4387C14.1009 11.4387 13.9579 11.4979 13.8525 11.6032L10.8525 14.6032C10.7531 14.7098 10.699 14.8509 10.7016 14.9966C10.7042 15.1423 10.7632 15.2814 10.8663 15.3844C10.9693 15.4875 11.1084 15.5465 11.2541 15.5491C11.3998 15.5517 11.5408 15.4976 11.6475 15.3982L13.6875 13.3591V19.5007C13.6875 19.6499 13.7467 19.793 13.8522 19.8984C13.9577 20.0039 14.1008 20.0632 14.25 20.0632C14.3992 20.0632 14.5422 20.0039 14.6477 19.8984C14.7532 19.793 14.8125 19.6499 14.8125 19.5007V13.3591L16.8525 15.3982C16.9591 15.4976 17.1001 15.5517 17.2459 15.5491C17.3916 15.5465 17.5306 15.4875 17.6337 15.3844C17.7367 15.2814 17.7958 15.1423 17.7984 14.9966C17.8009 14.8509 17.7468 14.7098 17.6475 14.6032L14.6475 11.6032Z"
                      fill="#8155FF"
                    />
                  </svg>
                </span>
                <p className="text-[#767676] text-[10px]">click-to-upload</p>

                <label
                  className="absolute h-full w-full cursor-pointer top-0 left-0"
                  htmlFor="product-image-upload"
                ></label>
                <input
                  className="hidden"
                  type="file"
                  id="product-image-upload"
                  onChange={handleFileChange}
                  accept="image/*"
                  max={4}
                  multiple
                />
              </div>
            </div>

            {Array.from({ length: 3 - imagesWithUrl.length }).map(
              (_, index) => (
                <div
                  key={index}
                  className="h-[189px] relative rounded-lg overflow-hidden bg-[#F4F4F6]"
                ></div>
              )
            )}
          </div>

          <DialogFooter className="w-full ">
            <div className="md:w-1/2 w-full  grid grid-cols-2 gap-[10px]">
              <Button
                className="h-10"
                variant={"outline"}
                onClick={() => setIsAddProductOpen(false)}
                text="Cancel"
                disabled={isMutating}
              />

              {!isMutating ? (
                <Button
                  className="h-10 text-white"
                  type="submit"
                  text="Done"
                  loading={isMutating}
                  // onClick={createProductHandler}
                  svg={
                    <svg
                      width={17}
                      height={17}
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5592 8.82537L10.1029 12.492C10.0342 12.565 9.92168 12.6004 9.84668 12.6004C9.76364 12.6004 9.68026 12.5717 9.61418 12.5138C9.47308 12.3901 9.46262 12.1792 9.59089 12.0432L12.5217 8.9337H4.66105C4.46999 8.9337 4.31543 8.78464 4.31543 8.61912C4.31543 8.4536 4.47003 8.26704 4.66105 8.26704H12.5215L9.59022 5.15662C9.46195 5.02056 9.47241 4.80954 9.61351 4.68599C9.75495 4.56295 9.9733 4.57206 10.1021 4.70879L13.5583 8.37545C13.6779 8.50245 13.6779 8.69829 13.5592 8.82537Z"
                        fill="white"
                      />
                    </svg>
                  }
                />
              ) : (
                <span className="h-10 flex justify-center items-center bg-purple-500 rounded-lg">
                  <Loader />
                </span>
              )}
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddProductDialog;
