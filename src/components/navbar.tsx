import React from "react";
import { motion } from "framer-motion";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
// import {
//   RectangleStackIcon,
//   UserCircleIcon,
//   CommandLineIcon,
//   Squares2X2Icon,
//   XMarkIcon,
//   Bars3Icon,
// } from "@heroicons/react/24/solid";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

const additionalProps = {
  placeholder: "",
  // onPointerEnterCapture: () => {},
  // onPointerLeaveCapture: () => {},
};

export const NAV_MENU = [
  {
    name: "خانه",
    hash: "#home",
  },
  {
    name: "آمار ها",
    hash: "#stats",
  },
  {
    name: "پروژه ها",
    hash: "#projects",
  },
  {
    name: "اخذ نمایندگی",
    hash: "#representation",
  },
  {
    name: "درباره ما",
    hash: "#about",
  },
  {
    name: "تماس با ما",
    hash: "#contact",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <ul className="flex w-[50rem] flex-wrap item-center justify-center whitespace-nowrap gap-y-1 text-[0.9rem] font-medium text-[#062650] sm:w-[initial] sm:flex-nowrap sm:gap-5">
      {NAV_MENU.map((link) => (
        <motion.li
          className="relative h-3/4 flex items-center justify-center"
          key={link.hash}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Link
            className={clsx(
              "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
              {
                "text-[#87B8CE] dark:text-gray-200":
                  activeSection === link.name,
              }
            )}
            href={link.hash}
            onClick={() => {
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
            }}
          >
            {link.name}
            {link.name === activeSection && (
              <motion.span
                className="bg-[#062650] rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              ></motion.span>
            )}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <div className="px-10 sticky top-4 z-50">
      <div className="mx-auto container">
        <MTNavbar
          {...additionalProps}
          blurred
          className="z-50 mt-6 border-0 rounded-full relative pr-3 py-3 pl-6 bg-[#87B8CE]"
        >
          <div className="flex items-center justify-between">
            <Typography
              {...additionalProps}
              className="text-lg font-bold text-[#062650]"
            >
              مدیریت پیشرو هوشمند آرش و آرین
            </Typography>
            {/* <ul className="ml-10 hidden items-center gap-8 lg:flex"> */}
            {/* {NAV_MENU.map(({ name }) => ( */}
            {/* <NavItem>{name}</NavItem> */}
            {NavItem()}
            {/* ))} */}
            {/* </ul> */}
            <div className="hidden items-center gap-4 lg:flex">
              <Link href="/Login">
                <Button
                  {...additionalProps}
                  className="bg-white text-[#062650] text-md rounded-full outline-none  hover:scale-110"
                >
                  ورود
                </Button>
              </Link>
              <Link href="/contactus">
                <Button
                  {...additionalProps}
                  className="rounded-full text-md outline-none  hover:scale-110 active:scale-105 bg-[#062650]"
                >
                  دریافت نمایندگی
                </Button>
              </Link>
            </div>
            {/* <IconButton
              variant="text"
              color="red"
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden"
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton> */}
          </div>
        </MTNavbar>
      </div>
    </div>
  );
}

export default Navbar;
