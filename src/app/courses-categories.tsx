"use client";

import React from "react";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";

const additionalProps = {
  placeholder: "",
  onPointerEnterCapture: () => {},
  onPointerLeaveCapture: () => {},
};

import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import CategoryCard from "@/components/category-card";

const CATEGORIES = [
  {
    img: "/image/blogs/blog-3.png",
    icon: HeartIcon,
    title: "Frontend Web Development",
    desc: "300 Courses",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: PuzzlePieceIcon,
    title: "Backend Web Development",
    desc: "200 Courses",
  },
  {
    img: "/image/blogs/blog-10.jpeg",
    icon: GlobeEuropeAfricaIcon,
    title: "Web Security & Performance",
    desc: "240 Courses",
  },
  {
    img: "/image/blogs/blog-13.png",
    icon: MicrophoneIcon,
    title: "Full-Stack Web Development",
    desc: "100 Courses",
  },
];

export function CoursesCategories() {
  return (
    <section className="flex flex-col px-8 py-36 bg-[#87B8CE]">
      <div className="mb-20 grid place-items-center text-center">
        <Typography {...additionalProps} variant="h2" color="blue-gray" className="my-3">
          Courses Categories
        </Typography>
        <Typography {...additionalProps} variant="lead" className="!text-gray-500 lg:w-6/12">
          A comprehensive selection of courses designed to empower you with the
          skills you need to thrive in the dynamic world of web development.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
        {...additionalProps}
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-white" />
          <CardBody {...additionalProps} className="relative w-full">
            <Typography {...additionalProps} color="blue" className="text-xs font-bold opacity-50">
              HTML, CSS & Javascript
            </Typography>
            <Typography {...additionalProps} variant="h4" className="mt-9" color="blue">
              Web Development Intro
            </Typography>
            <Typography
            {...additionalProps}
              color="blue"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              Ready to start your web development journey?
            </Typography>
            <Button {...additionalProps} size="sm" color="blue">
              Enroll Now
            </Button>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesCategories;
