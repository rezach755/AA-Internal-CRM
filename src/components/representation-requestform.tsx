"use client";
import React from "react";
// import { Textarea } from "@material-tailwind/react";
import Input from "@/components/input";
import { useSectionInView } from "@/lib/hooks";
import { Textarea } from "./ui/textarea";

// const additionalProps = {
//   placeholder: "",
//   onPointerEnterCapture: () => {},
//   onPointerLeaveCapture: () => {},
// };

const inputLabel = [
  {
    titleFaName: "نام درخواست کننده/نام شرکت",
    titleEnName: "b",
    id: 2,
  },
  {
    titleFaName: "حوزه کاری",
    titleEnName: "a",
    id: 1,
  },
  {
    titleFaName: "آدرس شرکت",
    titleEnName: "c",
    id: 3,
  },
  {
    titleFaName: "شماره تماس",
    titleEnName: "e",
    id: 5,
  },
  // {
  //   titleFaName: "پیام و دلایل تمایل به نمایندگی",
  //   titleEnName: "f",
  //   id: 5,
  // },
];

export function RepresentationRequestForm() {
  const { ref } = useSectionInView("اخذ نمایندگی");
  return (
    <section
      ref={ref}
      id="representation"
      className="flex flex-col justify-center items-center bg-[#87B8CE] py-24"
    >
      <div className="flex w-full max-w-[38rem] flex-col rounded-3xl bg-[#87B8CE] text-[#062650] border border-[#062650] shadow-sm my-5 ">
        <div className="relative m-2.5 items-center flex flex-col justify-center text-[#062650] h-32 rounded-md bg-slate-800">
          <div className="mb-4 text-red">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-10 w-10 text-[#062650]"
            >
              <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z"></path>
              <path
                fillRule="evenodd"
                d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <h5 className="text-[#062650] text-xl">درخواست نمایندگی</h5>
        </div>
        <div className="p-6">
          <div className="block overflow-visible">
            <div className="w-full">
              <div className="relative right-0"></div>
            </div>
            <div className="  relative block w-full overflow-hidden !overflow-x-hidden bg-transparent">
              <div role="tabpanel" data-value="card">
                <form className="mt-8 flex flex-col">
                  {/* <div className="w-full min-w-[200px]"> */}
                  <div className="w-full mb-5">
                    {inputLabel.map((item) => (
                      <Input
                        key={item.id}
                        label={item.titleFaName}
                        inputClassName="!text-white"
                        parentClassName={
                          item.titleEnName === "d"
                            ? "w-2/3"
                            : item.titleEnName === "e"
                            ? "w-2/5"
                            : ""
                        }
                      />
                    ))}
                    <Textarea
                      placeholder="توضیحات"
                      className="w-full h-32 text-[#062650] border border-[#062650] rounded-xl py-2 mt-10 bg-[#87B8CE] active:!border active:!border-[#062650]  placeholder:text-[#4b5581] resize-none"
                    />
                  </div>

                  <button className="w-full mt-6 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm bg-[#062650] text-[#87B8CE] transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    ارسال درخواست
                  </button>
                  <p className=" flex flex-row  gap-0 mt-4 text-sm text-bold text-slate-500 font-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="-mt-0.5 h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    در صورت نیاز به راهنمایی و برقراری تماس به قسمت
                    <a
                      href="#contact"
                      className=" items-center justify-center px-2 border-b-2 border-[#062650] mb-0 text-sm transition-all ease-in-out cursor-pointer text-slate-600 bg-inherit"
                      data-tab-target=""
                      role="tab"
                      aria-selected="false"
                    >
                      تماس با ما
                    </a>
                    بروید.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RepresentationRequestForm;
