"use client";

import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

const additionalProps = {
  placeholder: "",
  onPointerEnterCapture: () => {},
  onPointerLeaveCapture: () => {},
};

function TESTIMONIAL() {
  return (
    <section className="px-8 py-40 bg-[#87B8CE]">
      <div className="container mx-auto">
        <Card
          {...additionalProps}
          color="transparent"
          shadow={false}
          className=""
        >
          <CardBody
            {...additionalProps}
            className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4"
          >
            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
              <Image
                width={768}
                height={768}
                src="/image/blogs/blog6.svg"
                alt="testimonial image"
                className="w-full h-full scale-110 object-cover"
              />
            </div>
            <div className="col-span-2 w-full">
              <Typography
                {...additionalProps}
                variant="h6"
                color="blue"
                className="mb-4"
              >
                ONLINE COURSE
              </Typography>
              <Typography
                {...additionalProps}
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold"
              >
                Full-Stack Web Development
              </Typography>
              <Typography
                {...additionalProps}
                className="mb-1 w-full font-normal !text-gray-500"
              >
                Become a versatile developer by combining frontend and backend
                skills. Build complete web applications from start to finish.
              </Typography>
              <div className="grid mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  <Typography
                    {...additionalProps}
                    className="w-full font-normal !text-gray-500"
                  >
                    International course collection in 10 languages
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  <Typography
                    {...additionalProps}
                    className="w-full font-normal !text-gray-500"
                  >
                    Certified include
                  </Typography>
                </div>
              </div>
              <div className="flex items-center mt-8 gap-4">
                <Avatar
                  {...additionalProps}
                  variant="circular"
                  src="/image/avatar3.jpg"
                  alt="spotify"
                  size="md"
                />
                <div>
                  <Typography
                    {...additionalProps}
                    variant="h6"
                    color="blue-gray"
                    className="mb-0.5"
                  >
                    Otto Gonzalez
                  </Typography>
                  <Typography
                    {...additionalProps}
                    variant="small"
                    className="font-normal !text-gray-500"
                  >
                    Senior Designer @company.com
                  </Typography>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TESTIMONIAL;
