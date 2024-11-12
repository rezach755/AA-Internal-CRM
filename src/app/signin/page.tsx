"use client";

import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

const additionalProps = {
  placeholder: "",
  onPointerEnterCapture: () => {},
  onPointerLeaveCapture: () => {},
};
const additionalProp = {
  onPointerEnterCapture: () => {},
  onPointerLeaveCapture: () => {},
};

export function signIn() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  return (
    <section className="relative h-screen  w-full bg-cover bg-center flex items-center justify-center bg-[#87B8CE]">
      {/* Optional overlay for better text visibility */}
      <div
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        className="absolute inset-0 bg-white"
      ></div>

      <div className="relative z-10 bg-[#ffffff] p-8 rounded-lg shadow-md max-w-md mx-auto">
        <Typography
          variant="h3"
          className="mb-2 text-[#062650]"
          {...additionalProps}
        >
          وارد شوید
        </Typography>
        <Typography
          className="mb-16 text-[#062650] font-normal text-[18px]"
          {...additionalProps}
        >
          برای ورود ایمیل و رمز عبور خود را وارد کنید
        </Typography>
        <form action="#" className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-[#062650]"
                {...additionalProps}
              >
                ایمیل
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-[#062650]"
              labelProps={{
                className: "hidden",
              }}
              {...additionalProp}
              crossOrigin=""
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-[#062650]"
                {...additionalProps}
              >
                رمز
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              {...additionalProp}
              crossOrigin=""
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-[#062650]"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5 text-[#062650]" />
                  )}
                </i>
              }
            />
          </div>
          <Button
            size="lg"
            className="mt-6 bg-[#062650]"
            fullWidth
            {...additionalProps}
          >
            وارد شوید
          </Button>
          <div className="!mt-4 flex justify-end">
            <Typography
              {...additionalProps}
              as="a"
              href="#"
              variant="small"
              className="font-medium text-[#062650]"
            >
              رمز عبور را فراموش کرده اید
            </Typography>
          </div>
          <Button
            {...additionalProps}
            variant="outlined"
            size="lg"
            className="mt-6 flex h-12 items-center justify-center gap-2 text-[#062650] border-[#062650]"
            fullWidth
          >
            <img
              src={`https://www.material-tailwind.com/logos/logo-google.png`}
              alt="google"
              className="h-6 w-6 text-[#062650]"
            />
            با گوگل وارد شوید
          </Button>
          <Typography
            variant="small"
            className="!mt-4 text-center text-[#062650] font-normal"
            {...additionalProps}
          >
            ثبت نشده؟{" "}
            <a href="#" className="font-medium text-[#062650]">
              ایجاد حساب کاربری
            </a>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default signIn;
