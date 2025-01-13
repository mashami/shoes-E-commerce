"use client";

import {
  Calendar,
  Home,
  Inbox,
  HeartIcon,
  Settings,
  SquareDashedBottomCodeIcon,
  ProjectorIcon,
  DollarSignIcon
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Menu items.
const items = [
  {
    title: "Dashboard",
    label: "dashboard",
    icon: SquareDashedBottomCodeIcon
  },
  {
    title: "All products",
    label: "products",
    icon: ProjectorIcon
  },
  {
    title: "Paid products",
    label: "paid",
    icon: DollarSignIcon
  },
  {
    title: "Favolate",
    label: "favolate",
    icon: HeartIcon
  },
  {
    title: "Settings",
    label: "settings",
    icon: Settings
  }
];

export function AppSidebar() {
  const [activeMenu, setActiveMenu] = useState<string>("");
  return (
    <Sidebar className="">
      <SidebarContent className="max-h-full pt-32">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-3">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <div
                      className={cn(
                        "hover:opacity-75 transition-all ease-in-out duration-300 border-b-[3px] border-transparent cursor-pointer py-2",
                        activeMenu === item.label && "border-[#8155FF]"
                      )}
                      onClick={() => setActiveMenu(item.label)}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
