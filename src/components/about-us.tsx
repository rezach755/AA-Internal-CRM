"use client";

import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { useSectionInView } from "@/lib/hooks";

const additionalProps = {
  placeholder: "",
  // onPointerEnterCapture: () => {},
  // onPointerLeaveCapture: () => {},
};
// ({ title: string; content?: undefined; } | { content: string; title?: undefined; })[][]

const content = [
  {
    title: "درباره ما",

    content:
      "در  شرکت آرش آرین، ما تخصص داریم در ارائه راهکارهای نرم‌افزاری پیشرفته که به کسب‌وکارها کمک می‌کند به شیوه‌ای هوشمندانه و کارآمد فعالیت‌های خود را مدیریت کنند. ماموریت ما ارتقاء روندهای دیجیتال است تا شرکت‌ها بتوانند در دنیای رقابتی امروز بهتر از همیشه رشد کنند.",
  },
];
const contentA = "کمیسیون بالا: با هر فروش، درآمد بیشتری خواهید داشت";
const contentB =
  "پشتیبانی و آموزش جامع: تیم ما شما را در هر مرحله همراهی خواهد کرد";
const contentC =
  "مواد تبلیغاتی حرفه‌ای: از تمامی منابع و ابزارهای بازاریابی بهره‌مند خواهید شد";

function ContactUs() {
  const { ref } = useSectionInView("درباره ما");
  return (
    <section ref={ref} id="about" className="px-8 py-40 bg-white">
      <div className="container mx-auto">
        <div
          {...additionalProps}
          color="transparent"
          // shadow={false}
          className=""
        >
          <div
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
              {/* <Typography
                {...additionalProps}
                variant="h6"
                color="blue"
                className="mb-4"
              >
                ONLINE COURSE
              </Typography> */}
              <Typography
                {...additionalProps}
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold !text-[#062650]"
              >
                {content[0].title}
              </Typography>
              <Typography
                {...additionalProps}
                className="mb-1 w-full font-normal !text-[#062650]"
              >
                {content[0].content}
              </Typography>
              <div className="grid mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-[#062650] rounded-full" />
                  <Typography
                    {...additionalProps}
                    className="w-full font-normal !text-[#062650]"
                  >
                    {contentA}
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-[#062650] rounded-full" />
                  <Typography
                    {...additionalProps}
                    className="w-full font-normal !text-[#062650]"
                  >
                    {contentB}
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-[#062650] rounded-full" />
                  <Typography
                    {...additionalProps}
                    className="w-full font-normal !text-[#062650]"
                  >
                    {contentC}
                  </Typography>
                </div>
              </div>
              <div className="flex items-center mt-8 gap-4">
                {/* <Avatar
                  {...additionalProps}
                  variant="circular"
                  src="/logos/isip.png"
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
