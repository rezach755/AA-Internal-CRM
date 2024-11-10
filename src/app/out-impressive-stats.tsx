"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  DocumentTextIcon,
  PlayCircleIcon,
  PencilSquareIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/solid";

import StatsCard from "@/components/stats-card";

const STATS = [
  {
    icon: DocumentTextIcon,
    count: "10,200+",
    title: "نمایندگان فروش",
  },
  {
    icon: PlayCircleIcon,
    count: "50+",
    title: "نماینده تولید کننده",
  },
  {
    icon: PencilSquareIcon,
    count: "10+",
    title: "نماینده توزیع کننده",
  },
  {
    icon: PhoneArrowDownLeftIcon,
    count: "24/7",
    title: "پشتیبانی",
  },
];

export function OutImpressiveStats() {
  return (
    <section className="px-8 pt-60 bg-[#FFF0E8]">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography variant="h2" color="blue-gray" className="mb-2 text-4xl">
            آمارهای چشمگیر ما را کاوش کنید.
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12"
          >
            ما به تعهد خود به تعالی و موفقیت شما افتخار می کنیم.
          </Typography>
        </div>
        <div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default OutImpressiveStats;
