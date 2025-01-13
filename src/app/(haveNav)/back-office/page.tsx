/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import AddProductDialog from "@/components/AddProductDialog/AddProductDialog";
import { Menu } from "@/components/Menu";
import { Statistic } from "@/components/Statistic";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Backoffice = () => {
  const [isAddProductOpen, setIsAddProductOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<
    "all" | "unfulfilled" | "unpaid" | "paid" | "favolate"
  >("all");

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-3xl font-medium">Order</p>

        <Button
          onClick={() => setIsAddProductOpen(true)}
          text="Add Product"
          className="text-white py-5 px-2 rounded-lg bg-[#8155FF]"
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

      <div className="mt-5 flex flex-wrap items-center space-x-8">
        <Statistic title="Total Products" value="3210" />

        <Statistic title="Total purchase" value="3210" />

        <Statistic title="Total Orders" value="3210" />

        <Statistic title="Total Orders" value="3210" />

        <Statistic title="Total Orders" value="3210" />

        <Statistic title="Total Orders" value="3210" />
      </div>

      {/* <div className="border-b border-black w-full mt-5">
        <Menu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div> */}

      <AddProductDialog
        isAddProductOpen={isAddProductOpen}
        setIsAddProductOpen={setIsAddProductOpen}
      />
    </>
  );
};

export default Backoffice;
