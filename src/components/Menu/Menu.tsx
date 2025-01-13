"use client";

import { cn } from "@/lib/utils";
import React, { SetStateAction } from "react";

interface MenuProps {
  activeMenu: "all" | "unfulfilled" | "unpaid" | "paid" | "favolate";
  setActiveMenu: React.Dispatch<
    SetStateAction<"all" | "unfulfilled" | "unpaid" | "paid" | "favolate">
  >;
}
const Menu = ({ activeMenu, setActiveMenu }: MenuProps) => {
  return (
    <div className="py-4 flex items-center space-x-8">
      <div
        className={cn(
          "w-16 hover:opacity-75 transition-all ease-in-out duration-300 border-b-[3px] border-transparent cursor-pointer py-2 flex items-center justify-center",
          activeMenu === "all" && "border-[#8155FF]"
        )}
        onClick={() => setActiveMenu("all")}
      >
        <p>All</p>
      </div>

      <div
        onClick={() => setActiveMenu("unfulfilled")}
        className={cn(
          "w-16 hover:opacity-75 transition-all ease-in-out duration-300 border-b-[3px] border-transparent cursor-pointer py-2 flex items-center justify-center",
          activeMenu === "unfulfilled" && "border-[#8155FF]"
        )}
      >
        <p>Unfulfilled</p>
      </div>

      <div
        className={cn(
          "w-16 hover:opacity-75 transition-all ease-in-out duration-300 border-b-[3px] border-transparent cursor-pointer py-2 flex items-center justify-center",
          activeMenu === "unpaid" && "border-[#8155FF]"
        )}
        onClick={() => setActiveMenu("unpaid")}
      >
        <p>unpaid</p>
      </div>

      <div
        className={cn(
          "w-16 hover:opacity-75 transition-all ease-in-out duration-300 border-b-[3px] border-transparent cursor-pointer py-2 flex items-center justify-center",
          activeMenu === "paid" && "border-[#8155FF]"
        )}
        onClick={() => setActiveMenu("paid")}
      >
        <p>Paid</p>
      </div>

      <div
        className={cn(
          "w-16 hover:opacity-75 transition-all ease-in-out duration-300 border-b-[3px] border-transparent cursor-pointer py-2 flex items-center justify-center",
          activeMenu === "favolate" && "border-[#8155FF]"
        )}
        onClick={() => setActiveMenu("favolate")}
      >
        <p>Favolate</p>
      </div>
    </div>
  );
};

export default Menu;
