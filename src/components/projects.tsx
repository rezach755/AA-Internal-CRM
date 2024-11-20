"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { useSectionInView } from "@/lib/hooks";

const additionalProps = {
  placeholder: "",
  // onPointerEnterCapture: () => {},
  // onPointerLeaveCapture: () => {},
};

const COMPANIES = ["icart", "isip", "iwallet"];

function Brands() {
  const { ref } = useSectionInView("پروژه ها");
  return (
    <section ref={ref} id="projects" className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <Typography
            {...additionalProps}
            variant="h6"
            className="mb-4 uppercase !text-[#062650]"
          >
            شرکت های ما
          </Typography>
          <Typography
            {...additionalProps}
            variant="h2"
            className="mb-12 !text-[#062650]"
          >
            برند های مختلف ما
          </Typography>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {COMPANIES.map((logo, key) => (
            <Image
              width={600}
              height={600}
              key={key}
              src={`/logos/${logo}.png`}
              alt="{logo}"
              className="w-40 grayscale opacity-75"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
