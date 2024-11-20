import { useSectionInView } from "@/lib/hooks";
import { Typography, Button, Input } from "@material-tailwind/react";
const additionalProps = {
  placeholder: "",
  // onPointerEnterCapture: () => {},
  // onPointerLeaveCapture: () => {},
};

const LINKS = [
  {
    title: "دسترسی سریع",
    items: ["خانه", "فروشگاه ها", "درباره آیکارت", "پروپوزال"],
  },
  {
    title: "پروژه های مرتبط",
    items: [
      "شبکه ملی ساماندهی شمس",
      "خدمات ویژه شهروندی",
      "اعتبارسنجی",
      "سیپ توکن ها",
      "مرکز تماس",
      "نمایندگی ها",
      "توکن Gold Card",
    ],
  },
  {
    title: "ارتباط با آیکارت",
    items: [
      "شیراز, خیابان فلسطین, نبش فلسطین ۵, ساختمان آیکارت",
      "پشتیبانی :۱۷۷۰ ۹۱۳۰ ۰۷۱_۱۷۷۰ ۹۱۳۰ ۰۲۱",
      "info@icarts.ir",
    ],
  },
];

const content = [
  {
    title: "اشتراک بگیرید",
    a: "برای اطلاع از جدیدترین اخبار در خبرنامه آیکارت عضو شوید.",
    email: "ایمیل شما",
    button: "تایید",
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const { ref } = useSectionInView("تماس با ما");
  return (
    <footer
      ref={ref}
      id="contact"
      className="px-8 pt-24 pb-8 bg-[#87B8CE] !text-red-600"
    >
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  {...additionalProps}
                  variant="h6"
                  className="mb-4 !text-[#062650] whitespace-nowrap"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      {...additionalProps}
                      as="a"
                      href="#"
                      className="py-1 font-normal !text-[#062650] transition-colors hover:!text-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="pr-24 w-full">
            <Typography
              {...additionalProps}
              variant="h6"
              className="mb-3  text-right !text-[#062650]"
            >
              {content[0].title}
            </Typography>
            <Typography
              {...additionalProps}
              className="!text-[#062650] font-normal mb-4 text-base"
            >
              {content[0].a}
            </Typography>
            {/* <Typography
              {...additionalProps}
              variant="small"
              className="font-medium mb-2 text-left !text-[#062650]"
            ></Typography> */}
            <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                {/* @ts-ignore */}
                <Input label="ایمیل" color="gray-blue" />
                <Typography
                  {...additionalProps}
                  className="font-medium mt-3 !text-sm !text-[#062650] text-right"
                >
                  <a
                    href="#"
                    className="font-bold underline hover:!text-[#062650] transition-colors"
                  >
                    قوانین و مقرارت را مطالعه کردم و می پذیرم{" "}
                  </a>
                </Typography>
              </div>
              <Button
                {...additionalProps}
                className="w-full lg:w-fit bg-[#062650]"
                size="lg"
              >
                {content[0].button}
              </Button>
            </div>
          </div>
        </div>
        <Typography
          {...additionalProps}
          className="md:text-center mt-16 font-normal !text-[#062650]"
        >
          کلیه حقوق مادی و معنوی متعلق به
          <a href="https://www.creative-tim.com" target="_blank">
            <span />
            آیکارت&copy;
          </a>
          میباشد.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
