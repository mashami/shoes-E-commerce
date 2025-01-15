"use client";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { CartProductProps, findProductProps } from "@/utils/types";
import { useRouter } from "next/navigation";

interface LikedCartProps {
  cartProduct: CartProductProps;
  switchFunction: ({ brandId, productId }: findProductProps) => void;
  deleteFunction: ({ brandId, productId }: findProductProps) => void;
}

const CartCard = ({
  cartProduct,
  deleteFunction,
  switchFunction
}: LikedCartProps) => {
  const router = useRouter();

  const removeHandle = () => {
    deleteFunction({
      brandId: cartProduct.brandId,
      productId: cartProduct.product.id
    });
    router.refresh();
  };

  const switchHandle = () => {
    switchFunction({
      brandId: cartProduct.brandId,
      productId: cartProduct.product.id
    });
    router.refresh();
  };

  return (
    <div className="grid grid-cols-3 gap-3 p-3 bg-white rounded-2xl relative overflow-hidden group">
      <div className="relative w-full min-h-[100px] rounded-xl overflow-hidden">
        <Image
          src={cartProduct.product.pictures[0].url}
          alt="image"
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </div>

      <div className="col-span-2 flex flex-col space-y-1  justify-between">
        <div className="flex items-start justify-between space-x-2">
          <div className="space-y-0">
            <p className="font-extrabold text-black">{cartProduct.brandName}</p>
            <p className="text-[12px] text-[#1E1818]">
              {cartProduct.product.name}
            </p>
          </div>

          <p className="text-[18px] font-bold">${cartProduct.totalPrice}</p>
        </div>
        {cartProduct.product.description && (
          <p className="text-[12px] leading-4">
            {cartProduct.product.description}
          </p>
        )}

        <div className="flex items-center justify-between">
          <p className="font-bold text-[14px]">Ready to buy</p>

          <div className="flex items-center space-x-4">
            <div
              className="flex flex-col items-end space-y-1"
              onClick={switchHandle}
            >
              <Switch
                checked={cartProduct.onOrder}
                onCheckedChange={() => switchHandle}
              />
            </div>

            <div
              onClick={removeHandle}
              className="bg-[#FCE7E7] hover:bg-[#FCE7E7]/75 transition ease-in-out duration-300 flex items-center cursor-pointer justify-center p-1.5 rounded-full"
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width={20} height={20} fill="url(#pattern0_114_741)" />
                <defs>
                  <pattern
                    id="pattern0_114_741"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use
                      xlinkHref="#image0_114_741"
                      transform="scale(0.0333333)"
                    />
                  </pattern>
                  <image
                    id="image0_114_741"
                    width={30}
                    height={30}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDElEQVR4nO2VzU1CQRCAN5E2VN6MDcysR8krQEK8eNEK4KwJNoAVQAVQAVQAFWgFenRHCUcICc+8xKsJM/OUBPiSve3Ol/nZTAhHtkQi3ghhK/w3iWElDMs/CS6ErTK4MBa6A0tTNYRwppf9cghnuxJP1ZkfFolw4S1zGUMtFsLXCnr8YhFPKhissVqcCAf+UkNfLf5kfHJnHKGrFgtn9xWI79TixFnDK/6IcKUWzyOcecVfl3iqFhe34SQRrB2DtS7yvBYsJMJ3s5jxLVgRz7LwLIdEOLKXGoce8bOjxz2zWPii4/jDbXvGnDXNGUe4NovnVD9PjBvDRG/Kt8GDMDxqdvPP3QeX9Mhe8A3ZR/ityUC/6QAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
