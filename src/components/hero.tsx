"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const additionalProps = {
  placeholder: "",
  // onPointerEnterCapture: () => {},
  // onPointerLeaveCapture: () => {},
};

const content =
  "ما به دنبال افرادی هستیم که می‌خواهند به عنوان نماینده محصولات ما در مناطق مختلف فعالیت کنند. با پیوستن به ما، شما به یک فرصت عالی برای گسترش کسب‌وکار خود دست خواهید یافت. از دوره‌های آموزشی کامل، پشتیبانی مداوم و شرایط ویژه کمیسیون برخوردار خواهید شد.";

const contentA = "کمیسیون بالا: با هر فروش، درآمد بیشتری خواهید داشت";
const contentB =
  "پشتیبانی و آموزش جامع: تیم ما شما را در هر مرحله همراهی خواهد کرد";
const contentC =
  "مواد تبلیغاتی حرفه‌ای: از تمامی منابع و ابزارهای بازاریابی بهره‌مند خواهید شد";

function Hero() {
  const { ref } = useSectionInView("خانه", 0.5);
  return (
    <div
      ref={ref}
      id="home"
      className="!flex h-[55vh] w-full items-center justify-between px-10 bg-[#ffffff]"
    >
      <Image
        width={1200}
        height={1200}
        src="/image/system4.jpg"
        alt="bg-img"
        className="absolute inset-0 mr-auto w-[920px] h-[780px] rounded-br-[100px] object-cover object-center"
        priority
      />
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <div
            className="col-span-full rounded-xl bg-[#87B8CE] py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7"
            {...additionalProps}
          >
            <Typography
              variant="h1"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl text-[#062650] !font-yekan"
              {...additionalProps}
            >
              سوپر اپلیکیشن جامع؛ راهکاری یکپارچه برای رشد و موفقیت کسب‌وکار شما
            </Typography>
            <Typography
              variant="lead"
              className="mb-10 mt-6 text-[#062650] !font-yekan"
              {...additionalProps}
            >
              {content}
              <br />
              <br />
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
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Link
                href="#contact"
                className="group bg-[#062650] text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  hover:scale-110 hover:bg-gray-950 active:scale-105 transition-transform transform "
                // onClick={() => {
                //   setActiveSection("Contact");
                //   setTimeOfLastClick(Date.now());
                // }}
              >
                برای درخواست نمایندگی، همین حالا اقدام کنید
                <BsArrowLeft className="opacity-70 group-hover:-translate-x-2 transition" />
              </Link>
              <Link
                href="#contact"
                className="bg-white flex flex-row items-center text-[#062650] p-2 px-7 gap-2
                
                
                text-lg rounded-full outline-none hover:scale-110"
                {...additionalProps}
              >
                تماس با ما
                <BsArrowLeft className="opacity-70 group-hover:-translate-x-5 transition" />
              </Link>
            </div>
            {/* <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start">
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-pinterest.svg"
                alt="pinterest"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-netflix.svg"
                alt="netflix"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-coinbase.svg"
                alt="coinbase"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-google.svg"
                alt="google"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
