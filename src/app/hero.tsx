"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10">
      <Image
        width={1200}
        height={1200}
        src="/image/system2.jpg"
        alt="bg-img"
        className="absolute inset-0 mr-auto w-[920px] h-[780px] rounded-br-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl bg-[#47564A]/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
            >
              سوپر اپلیکیشن جامع؛ راهکاری یکپارچه برای رشد و موفقیت کسب‌وکار شما
            </Typography>
            <Typography
              variant="lead"
              className="mb-10 mt-6 text-blue-gray-100"
            >
              سوپر اپلیکیشن ما یک راهکار جامع و قدرتمند برای تمامی کسب‌وکارهاست؛
              از استارتاپ‌ها و شرکت‌های کوچک گرفته تا سازمان‌های بزرگ. این
              پلتفرم همه نیازهای شما را در یک مکان گرد هم آورده است تا بتوانید
              بدون دغدغه و با آرامش، تمرکز خود را بر رشد و توسعه کسب‌وکارتان
              بگذارید. همین حالا ثبت‌نام کنید و تجربه‌ای متفاوت از مدیریت
              کسب‌وکار را با سوپر اپلیکیشن ما تجربه کنید!
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Button className=" bg-[#FD6239] rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105">
                دریافت نمایندگی
              </Button>
              <Button className="bg-[#47564A] text-blue-gray-100 rounded-full outline-none focus:scale-110 hover:scale-110">
                تماس با ما
              </Button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start">
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
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
