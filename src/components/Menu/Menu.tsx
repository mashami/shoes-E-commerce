"use client";

import React, { Dispatch, SetStateAction } from "react";
import { useAppContext } from "@/utils/context/AppContext";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { items } from "../Sidebar/AppSidebar";
import { cn } from "@/lib/utils";

interface MenuProps {
  isOpenMenu: boolean;
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
}
const Menu = ({ isOpenMenu, setIsOpenMenu }: MenuProps) => {
  const { activeMenu, setActiveMenu } = useAppContext();

  const handleClick = (item: string) => {
    setActiveMenu(item);
    setIsOpenMenu(false);
  };

  return (
    <Sheet open={isOpenMenu} onOpenChange={setIsOpenMenu}>
      <SheetContent side={"left"}>
        <SheetTitle className="pl-4 pt-4 text-2xl font-bold">Menu</SheetTitle>
        <div className="py-4 flex flex-col space-y-5 w-full">
          {items.map((item) => (
            <div
              key={item.title}
              className={cn(
                "hover:opacity-75 transition-all ease-in-out duration-300 border rounded-full pl-4 w-full border-b-[3px] border-transparent cursor-pointer py-2",
                item.label === activeMenu && "border-b-[#8155FF]"
              )}
              onClick={() => handleClick(item.label)}
            >
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
