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
import { useSectionInView } from "@/lib/hooks";

const additionalProps = {
  placeholder: "",
  // onPointerEnterCapture: () => {},
  // onPointerLeaveCapture: () => {},
};

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
  const { ref } = useSectionInView("آمار ها");
  return (
    <section ref={ref} id="stats" className="px-8 pt-60 bg-[#87B8CE] pb-16">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography
            variant="h2"
            className="mb-2 text-4xl text-[#062650]"
            {...additionalProps}
          >
            آمارهای چشمگیر ما را کاوش کنید.
          </Typography>
          <Typography
            {...additionalProps}
            variant="lead"
            className="flex justify-center mx-auto mb-24 w-full  lg:w-5/12 text-[#062650]"
          >
            ما به تعهد خود به تعالی و موفقیت شما افتخار می کنیم.
          </Typography>
        </div>
        <div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-4 !text-[#062650]">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default OutImpressiveStats;
