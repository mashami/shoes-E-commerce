"use client";

import React from "react";

const activities = [
  {
    time: "32 min",
    color: "bg-green-500",
    text: "Quia quae rerum explicabo officiis beatae"
  },
  {
    time: "56 min",
    color: "bg-red-500",
    text: "Voluptatem blanditiis blanditiis eveniet"
  },
  {
    time: "2 hrs",
    color: "bg-blue-500",
    text: "Voluptates corrupti molestias voluptatem"
  },
  {
    time: "1 day",
    color: "bg-sky-400",
    text: "Tempore autem saepe occaecati voluptatem tempore"
  },
  {
    time: "2 days",
    color: "bg-yellow-500",
    text: "Est sit eum reiciendis exercitationem"
  },
  {
    time: "4 weeks",
    color: "bg-gray-500",
    text: "Dicta dolorem harum nulla eius. Ut quidem quidem sit quas"
  }
];

const RecentActivity = () => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <p className="text-[20px] font-medium text-black">Recent Activity</p>
        <span className="h-4 w-px bg-blue-200"></span>
        <p className="text-[14px] text-black/75">Today</p>
      </div>

      <div className="pt-5 space-y-4 pb-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="grid md:grid-cols-12 grid-cols-12 w-full items-start relative"
          >
            <p className="opacity-75 col-span-3 ">{activity.time}</p>

            <div className="grid grid-cols-5 col-span-1">
              <div className="col-span-1 flex-shrink-0 ">
                <span
                  className={`w-2 h-2 mt-2 flex flex-shrink-0 rounded-full  ${activity.color}`}
                ></span>
              </div>
              <span className="absolute w-2 h-full bg-black opacity-10 rounded-sm my-5"></span>
            </div>

            <p className="grid col-span-8 flex-1 flex-wrap">{activity.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
