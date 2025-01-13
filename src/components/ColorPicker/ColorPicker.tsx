/* eslint-disable @typescript-eslint/no-explicit-any */

import { AnimatePresence, motion } from "framer-motion";
import "@/styles/globals.scss";
import { SetStateAction, useRef, useState, useTransition } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { HexColorPicker } from "react-colorful";
import { toast } from "@/hooks/use-toast";
import { useClickOutsideClose } from "@/utils/helpers";
import { cn } from "@/lib/utils";
import style from "../FormField/FormField.module.scss";

interface ColorPickerProps {
  setColorSeleted: React.Dispatch<SetStateAction<string[] | undefined>>;
}

const ColorPicker = ({ setColorSeleted }: ColorPickerProps) => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [isOptionsOpen, setIsOptionOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isPending, startTransition] = useTransition();

  const isMutating = isPending || isLoading;

  const router = useRouter();

  const optionsRef = useRef<any>(null);

  const shoesColorSelectHandler = () => {
    if (!selectedColor) {
      return;
    }
    setIsLoading(true);

    setColorSeleted((prev) =>
      prev ? [...prev, selectedColor] : [selectedColor]
    );
    startTransition(() => {
      router.refresh();

      toast({
        description: "Color added successfully"
      });
    });

    setIsLoading(false);
    setIsOptionOpen(false);

    setIsLoading(false);

    return;
  };

  const handleClick = () => {
    setIsOptionOpen((prevState) => !prevState);
  };

  useClickOutsideClose(optionsRef, () => {
    if (isMutating) return;

    setIsOptionOpen(false);
  });

  return (
    <div className="space-y-4 relative" ref={optionsRef}>
      <div
        className={cn(
          "p-3 flex justify-between bg-white items-center border border-[#8155FF]/75 rounded-md",
          isOptionsOpen && `ring-2 ring-[#b399ff80] ${style.inputBorder}`
        )}
      >
        <p className="text-[#3B3B3B] font-medium">Select your shoe colors</p>

        <div className="h-5 w-5">
          <span
            className={
              "h-4 w-4 ring-2 ring-[#E6E6E6] ring-offset-2 block rounded-full cursor-pointer hover:opacity-80 transition"
            }
            onClick={handleClick}
            style={{ backgroundColor: selectedColor }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {isOptionsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="w-full grid place-items-center space-y-4 p-[12.9px] bg-white border rounded select-none absolute shadow-md shadow-primary/5"
            style={{ zIndex: "1000" }}
          >
            <h3 className="text-[#858585] text-sm">Select Colours</h3>

            <div className="h-[12.814rem] w-full rounded-md relative">
              <HexColorPicker
                style={{ width: "100%", height: "100%" }}
                color={selectedColor}
                onChange={setSelectedColor}
              />
            </div>

            <div className=" w-full  flex justify-between items-center">
              <h3 className="text-[#595959] text-sm font-medium">Hex code #</h3>

              <div className="rounded-md w-[80px] bg-gray-200">
                <input
                  type="text"
                  className="uppercase w-full p-2 text-sm font-medium text-black outline-none bg-transparent"
                  value={`#${selectedColor.split("#")[1] ?? ""}`}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  disabled={isMutating}
                />
              </div>
            </div>

            <div className="w-full h-px bg-[#F0F0F0]"></div>

            <div className="flex w-full items-end justify-end">
              <Button
                className="h-9 text-white"
                position="left"
                text="Apply"
                svg={
                  <svg
                    width={15}
                    height={15}
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7125 2.35327H4.83752C4.28637 2.35327 3.75779 2.57222 3.36807 2.96194C2.97834 3.35166 2.7594 3.88024 2.7594 4.4314V8.3689C2.7594 8.68798 2.88616 8.994 3.11179 9.21963C3.33742 9.44526 3.64344 9.57202 3.96252 9.57202H6.58752C6.60301 9.57192 6.61834 9.57511 6.6325 9.58137C6.64667 9.58764 6.65934 9.59684 6.66967 9.60837C6.68001 9.6199 6.68779 9.63349 6.69248 9.64825C6.69718 9.66301 6.69868 9.67859 6.6969 9.69397L6.26377 12.2517C6.26096 12.2698 6.2595 12.2881 6.2594 12.3064C6.2594 12.7415 6.43225 13.1588 6.73993 13.4665C7.0476 13.7742 7.4649 13.947 7.90002 13.947C8.33514 13.947 8.75245 13.7742 9.06012 13.4665C9.3678 13.1588 9.54065 12.7415 9.54065 12.3064C9.54055 12.2881 9.53909 12.2698 9.53627 12.2517L9.10315 9.69397C9.10137 9.67859 9.10287 9.66301 9.10757 9.64825C9.11226 9.63349 9.12003 9.6199 9.13037 9.60837C9.14071 9.59684 9.15338 9.58764 9.16755 9.58137C9.18171 9.57511 9.19704 9.57192 9.21252 9.57202H11.8375C12.1566 9.57202 12.4626 9.44526 12.6883 9.21963C12.9139 8.994 13.0406 8.68798 13.0406 8.3689V2.6814C13.0406 2.59437 13.0061 2.51091 12.9445 2.44938C12.883 2.38784 12.7995 2.35327 12.7125 2.35327ZM4.83752 3.00952H10.6344V5.3064C10.6344 5.39342 10.669 5.47688 10.7305 5.53842C10.792 5.59995 10.8755 5.63452 10.9625 5.63452C11.0495 5.63452 11.133 5.59995 11.1945 5.53842C11.2561 5.47688 11.2906 5.39342 11.2906 5.3064V3.00952H12.3844V6.72827H3.41565V4.4314C3.41565 4.05429 3.56545 3.69263 3.83211 3.42598C4.09876 3.15933 4.46042 3.00952 4.83752 3.00952ZM11.8375 8.91577H9.21252C9.10272 8.91574 8.9942 8.93933 8.89431 8.98494C8.79443 9.03055 8.70553 9.09711 8.63363 9.1801C8.56174 9.2631 8.50854 9.36058 8.47764 9.46595C8.44674 9.57132 8.43887 9.6821 8.45456 9.79077V9.79897L8.8844 12.3321C8.8844 12.5932 8.78069 12.8436 8.59608 13.0282C8.41148 13.2128 8.1611 13.3165 7.90002 13.3165C7.63895 13.3165 7.38857 13.2128 7.20397 13.0282C7.01936 12.8436 6.91565 12.5932 6.91565 12.3321L7.34331 9.79788V9.78968C7.35879 9.68127 7.35085 9.57079 7.32 9.46572C7.28915 9.36064 7.23611 9.2634 7.16448 9.18057C7.09284 9.09774 7.00427 9.03124 6.90474 8.98556C6.80521 8.93988 6.69704 8.91608 6.58752 8.91577H3.96252C3.81748 8.91577 3.67838 8.85815 3.57583 8.7556C3.47327 8.65304 3.41565 8.51394 3.41565 8.3689V7.38452H12.3844V8.3689C12.3844 8.51394 12.3268 8.65304 12.2242 8.7556C12.1217 8.85815 11.9826 8.91577 11.8375 8.91577Z"
                      fill="#F2EEFF"
                    />
                  </svg>
                }
                loading={isMutating}
                onClick={shoesColorSelectHandler}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorPicker;
