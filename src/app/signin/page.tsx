"use client";

import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

export function signIn() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/image/system2.jpg')",
      }}
    >
      {/* Optional overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 bg-white/80 p-8 rounded-lg shadow-md max-w-md mx-auto">
        <Typography variant="h3" color="blue-gray" className="mb-2">
          وارد شوید
        </Typography>
        <Typography className="mb-16 text-gray-400 font-normal text-[18px]">
          برای ورود ایمیل و رمز عبور خود را وارد کنید
        </Typography>
        <form action="#" className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
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
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                رمز
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
            />
          </div>
          <Button color="blugray" size="lg" className="mt-6" fullWidth>
            وارد شوید
          </Button>
          <div className="!mt-4 flex justify-end">
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              variant="small"
              className="font-medium"
            >
              رمز عبور را فراموش کرده اید
            </Typography>
          </div>
          <Button
            variant="outlined"
            size="lg"
            className="mt-6 flex h-12 items-center justify-center gap-2"
            fullWidth
          >
            <img
              src={`https://www.material-tailwind.com/logos/logo-google.png`}
              alt="google"
              className="h-6 w-6"
            />
            با گوگل وارد شوید
          </Button>
          <Typography
            variant="small"
            color="blue-gray"
            className="!mt-4 text-center font-normal"
          >
            ثبت نشده؟{" "}
            <a href="#" className="font-medium text-blue-gray-900">
              ایجاد حساب کاربری
            </a>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default signIn;
