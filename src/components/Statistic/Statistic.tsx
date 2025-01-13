"use client";

import React from "react";

interface StatisticProps {
  title: string;
  value: string;
  svg: React.ReactNode;
  when: string;
  ipprovement?: "Increasing" | "Descrising";
  backgroundColor: string;
  persentage: string;
}
const Statistic = ({
  title,
  value,
  svg,
  when,
  ipprovement = "Increasing",
  backgroundColor,
  persentage
}: StatisticProps) => {
  return (
    <div className="space-y-3 border border-[#8155FF] border-t-4  pt-2 pb-5  px-3 min-w-60 rounded-xl shadow-md">
      <div className="flex items-center space-x-2">
        <p className="text-[23px] text-black font-medium ">{title}</p>
        <span className="h-4 w-px bg-blue-300"></span>
        <p className="font-thin text-[20px]">{when}</p>
      </div>
      <div className="flex items-center space-x-5">
        <div
          className="flex items-center justify-center rounded-full w-14 aspect-square"
          style={{ background: backgroundColor }}
        >
          {svg}
        </div>
        <div className="space-y-1">
          <p className="text-[24px] font-bold">{value}</p>
          <span className="text-[14px] font-medium flex items-center space-x-2">
            <p className="text-[#8155FF]">{persentage}%</p>
            <p>{ipprovement}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
