"use client";

import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import axios from "axios";

const additionalProps = {
  placeholder: "",
  //   onPointerEnterCapture: () => {},
  //   onPointerLeaveCapture: () => {},
};
// const additionalProp = {
//   // onPointerEnterCapture: () => {},
//   // onPointerLeaveCapture: () => {},
// };

export function SignIn() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    general?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const loginUser = async (email: string, password: string) => {
    try {
      const response = await axios.get("http://localhost:4000/users", {
        params: {
          email,
          password,
        },
      });
      const users = response.data;

      const user = users.find(
        (u: any) => u.email === email && u.password === password
      );

      if (user) {
        // Simulate storing a token (in a real project, you would get a token from the backend)
        // const token = `mockToken-${user.id}`;
        // localStorage.setItem('authToken', token);
        // localStorage.setItem('userName', user.name);

        // Redirect to the main page using plain JavaScript
        window.location.href = "/"; // Redirect to the homepage or main page
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error: any) {
      setErrors({ general: error.message });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      await loginUser(email, password);
    } catch (error: any) {
      setErrors({ general: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          className="mb-2 text-center text-[#062650]"
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
        <form
          onSubmit={handleSubmit}
          action="#"
          className="mx-auto max-w-[24rem] text-left"
        >
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
              size="lg"
              type="email"
              name="email"
              value={email}
              placeholder="name@mail.com"
              className="w-full placeholder:opacity-100 focus:border border-[#062650]"
              onChange={(e) => setEmail(e.target.value)}
              labelProps={{
                className: "hidden",
              }}
              crossOrigin=""
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
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

              crossOrigin=""
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-[#062650]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5 text-[#062650]" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5 text-[#062650]" />
                  )}
                </i>
              }
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          {errors.general && (
            <p className="text-red-500 text-sm">{errors.general}</p>
          )}
          <Button
            size="lg"
            type="submit"
            className="mt-6 bg-[#062650]"
            disabled={isSubmitting}
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

export default SignIn;
