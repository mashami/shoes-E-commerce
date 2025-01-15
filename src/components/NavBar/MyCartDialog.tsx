"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCartProducts, removeProductCart } from "@/utils/actions";
import { CartProductProps, findProductProps } from "@/utils/types";
import { useToast } from "@/hooks/use-toast";
import React, { Dispatch, SetStateAction, useState } from "react";
import { CartCard } from "../MainCard";
import PaymentForm from "./PaymentForm";
import { useRouter } from "next/navigation";

interface TestDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const getAllproductsCart: CartProductProps[] = getCartProducts();

const MyCartDialog = ({ open, setOpen }: TestDialogProps) => {
  const { toast } = useToast();

  const [cartProducts, setCartProducts] = useState<CartProductProps[]>(
    getCartProducts()
  );

  const router = useRouter();

  const totalAmount: number = cartProducts.reduce(
    (acc, product) => (product.onOrder ? acc + product.totalPrice : acc),
    0
  );

  const switchHandle = ({ brandId, productId }: findProductProps) => {
    const updatedCartProducts = cartProducts.map((product) => {
      if (product.brandId === brandId && product.product.id === productId) {
        return {
          ...product,
          onOrder: !product.onOrder
        };
      }
      return product;
    });
    setCartProducts(updatedCartProducts);
  };

  const removeHandle = ({ brandId, productId }: findProductProps) => {
    removeProductCart({
      brandId: brandId,
      productId: productId
    });
    toast({
      title: "Product has been deleted successfull",
      className: "w-fit"
    });
    setCartProducts(getAllproductsCart);
    router.refresh();
    // }
  };

  return (
    <Dialog defaultOpen={true} open={open} onOpenChange={setOpen}>
      <DialogContent className="grid md:grid-cols-2 grid-cols-1 p-0 overflow-hidden md:min-w-[1000px] min-w-full md:min-h-[600px] min-h-full">
        <div className="bg-[#E3ECFF] px-5 py-6 space-y-6">
          <DialogTitle>
            <button
              onClick={() => setOpen(false)}
              className="flex items-center space-x-2 outline-none  hover:opacity-75 ease-in-out duration-300"
            >
              <svg
                width={27}
                height={24}
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width={27} height={24} fill="url(#pattern0_84_1101)" />
                <defs>
                  <pattern
                    id="pattern0_84_1101"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use
                      xlinkHref="#image0_84_1101"
                      transform="matrix(0.00987654 0 0 0.0111111 0.0555556 0)"
                    />
                  </pattern>
                  <image
                    id="image0_84_1101"
                    width={90}
                    height={90}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACc0lEQVR4nO3dvWoUURiH8WeE6IiFNq6iNtYDahovYdOol2FhigQsBDvBGxARe6/BImCvlcEvRESxEcWgiIViYyIDM7gO+zXrmdds9vnB22XPybyQ+Z/ZOZyAJEmSJLVzoOXPq0VjrwLPgF/ADvAauA4cnHYQjXcGeFE1d1i9A05PGENjZMA68HNMk+t6AxwZN5iGOw5sTNHgwbo5YiyNcAHYatnkst6OGlB/K0PtDrA9Q5PryhtjquHshMCbpsp7+VJzYLUPvEn1uBpTDT3gfoIG17XanEDMHHij6jmw38amDbxmPQFODcyx8ArgacIGl3UPOLTwnR0IvMvA94QNLm87F+sJRPLAK+sBcMLm/rECfEjY4HIJeA3YNzDHQsuBW4kD7yVw7n9f2G5SGHgxgffDwOtOz8Dr3oqB163cwOteYeB1KzPwutcz8GIC76NPeN3JDbzuGXgBgbeW6B3ejl9pDmfgBTDwOmbgBe1v20x4L96uXry6jXbAUuImb1VbCNSwmrDJG9Vfh4Z4lOgd3nq1JNQI33yHF+NrgkYvB/2uc+2ht44YVwzDuOVduZ/Y5V0AH1j2wCP4cuRFzJO+2wbi+DXpHtjLfCnyIuaJr7IC5QZlrL5BGafnBpo4mUEZq3CTY5zcoIzVNyjj9AzKOJlBGaswKOPkBmWsvkEZp2dQxskMyliFQTnfR/1sen5H3OFVr9wunPb80XF1Y8xcCy9LGJTl8cbubA0KysOTJhJJgvKYjez+ifJTizn0D0F5t/6wujuJ9wtwsuX4avnPFD4D55sf0uz7udeqlUkdlu+B28DRGcfUBOWhry7jJEmSJHav3wZiMzpyij7QAAAAAElFTkSuQmCC"
                  />
                </defs>
              </svg>

              <p className="text-[18px]">Back to dashboard</p>
            </button>
          </DialogTitle>

          {cartProducts.length > 0 ? (
            <div className="pl-8 space-y-2">
              <div className="">
                <h1 className="text-[20px] font-bold text-black">
                  Product Information & Review
                </h1>
                <p className="text-[12px]">
                  By placing your order, you agree to storelo in’s Privacy and
                  policy .
                </p>
              </div>
              <ScrollArea className="md:h-[600px] h-full w-full py-4 hide-scrollbar">
                <div className="space-y-4">
                  {cartProducts.map((product, index) => (
                    <CartCard
                      key={index}
                      cartProduct={product}
                      switchFunction={switchHandle}
                      deleteFunction={removeHandle}
                    />
                  ))}
                </div>
              </ScrollArea>
            </div>
          ) : (
            <p>Not product in your cart yet</p>
          )}
        </div>

        {cartProducts.length > 0 && <PaymentForm totalAmount={totalAmount} />}
      </DialogContent>
    </Dialog>
  );
};

export default MyCartDialog;
