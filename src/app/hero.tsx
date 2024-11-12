"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";

const additionalProps = {
  placeholder: "",
  onPointerEnterCapture: () => {},
  onPointerLeaveCapture: () => {},
};

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10 bg-[#ffffff]">
      <Image
        width={1200}
        height={1200}
        src="/image/system4.jpg"
        alt="bg-img"
        className="absolute inset-0 mr-auto w-[920px] h-[780px] rounded-br-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card
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
              سوپر اپلیکیشن ما یک راهکار جامع و قدرتمند برای تمامی کسب‌وکارهاست؛
              از استارتاپ‌ها و شرکت‌های کوچک گرفته تا سازمان‌های بزرگ. این
              پلتفرم همه نیازهای شما را در یک مکان گرد هم آورده است تا بتوانید
              بدون دغدغه و با آرامش، تمرکز خود را بر رشد و توسعه کسب‌وکارتان
              بگذارید. همین حالا ثبت‌نام کنید و تجربه‌ای متفاوت از مدیریت
              کسب‌وکار را با سوپر اپلیکیشن ما تجربه کنید!
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Button
                className=" bg-[#062650] rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105"
                {...additionalProps}
              >
                دریافت نمایندگی
              </Button>
              <Button
                className="bg-white text-[#062650] rounded-full outline-none focus:scale-110 hover:scale-110"
                {...additionalProps}
              >
                تماس با ما
              </Button>
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
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
