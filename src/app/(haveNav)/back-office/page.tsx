/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import AddProductDialog from "@/components/AddProductDialog/AddProductDialog";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const page = () => {
  const [isAddProductOpen, setIsAddProductOpen] = useState<boolean>(false);
  return (
    <>
      <div>
        <Button
          onClick={() => setIsAddProductOpen(true)}
          text="Add Product"
          className="text-white py-5 px-2"
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

      <AddProductDialog
        isAddProductOpen={isAddProductOpen}
        setIsAddProductOpen={setIsAddProductOpen}
      />
    </>
  );
};

export default page;
