"use client";

import React from "react";

interface StatisticProps {
  title: string;
  value: string;
}
const Statistic = ({ title, value }: StatisticProps) => {
  return (
    <div className="space-y-1 border border-[#8155FF] border-t-4  py-2 px-3 w-fit rounded-xl">
      <p className="text-[14px]">{title}</p>
      <p className="text-[18px] font-medium">{value}</p>
    </div>
  );
};

export default Statistic;
