/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import AddProductDialog from "@/components/AddProductDialog/AddProductDialog";
import { AllProducts } from "@/components/BackOffice/AllProducts";
import Dashoard from "@/components/BackOffice/Dashoard/Dashoard";
import { Menu } from "@/components/Menu";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/utils/context/AppContext";
import { MenuIcon } from "lucide-react";
import React, { useState } from "react";

const Backoffice = () => {
  const [isAddProductOpen, setIsAddProductOpen] = useState<boolean>(false);
  const { activeMenu } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div className="fixed flex items-center justify-between py-2 bg-white z-50 left-0 right-0 md:w-[calc(100%-320px)] md:left-[290px] px-6 md:top-[75px] top-[73px]">
        <p className="text-3xl font-medium">Order</p>

        <Button
          onClick={() => setIsAddProductOpen(true)}
          text="Add Product"
          className="text-white py-5 px-2 rounded-lg bg-[#8155FF] hover:bg-[#8155FF]/75 transition ease-in-out duration-300"
          position="left"
          svg={
            <svg
              width={20}
              height={20}
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width={30} height={30} fill="url(#pattern0_120_735)" />
              <defs>
                <pattern
                  id="pattern0_120_735"
                  patternContentUnits="objectBoundingBox"
                  width={1}
                  height={1}
                >
                  <use
                    xlinkHref="#image0_120_735"
                    transform="scale(0.0333333)"
                  />
                </pattern>
                <image
                  id="image0_120_735"
                  width={30}
                  height={30}
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAW0lEQVR4nO3WsQ2AMAxE0RuPiP0XMOzxI1qKhMKBiNyrLX3pKku2FGAHTvIdQGmFr4NRohUeStOF18RXM+NwEnnqu6xpPbV6PHUWeeqX3p94Ei7J8QC2bth+pwJiFfWif7X5VgAAAABJRU5ErkJggg=="
                />
              </defs>
            </svg>
          }
        />
      </div>

      <div
        className="flex z-50 fixed md:hidden left-0 right-0 md:left-[290px] px-6 top-[130px]"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </div>

      <div className="pt-20">
        {activeMenu == "dashboard" && <Dashoard />}
        {activeMenu == "products" && (
          <div>
            <AllProducts />
          </div>
        )}
        {activeMenu == "paid" && <div>paid</div>}
        {activeMenu == "favolate" && <div>favolate</div>}
        {activeMenu == "settings" && <div>settings</div>}

        <AddProductDialog
          isAddProductOpen={isAddProductOpen}
          setIsAddProductOpen={setIsAddProductOpen}
        />
      </div>

      <Menu isOpenMenu={isOpen} setIsOpenMenu={setIsOpen} />
    </div>
  );
};

export default Backoffice;
