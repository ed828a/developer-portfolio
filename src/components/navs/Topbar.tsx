"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import CustomLink from "./CustomLink";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "../icons";
import { motion } from "framer-motion";
import useThemeSwither from "../hooks/useThemeSwither";
import { cn } from "@/lib/utils";
import CustomMobileLink from "./CustomMobileLink";

type Props = {};

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/articles", title: "Articles" },
];

const socials = [
  { icon: <GithubIcon />, href: "/github.com" },
  { icon: <LinkedInIcon />, href: "/linkedin.com" },
  { icon: <PinterestIcon />, href: "/pinterest.com" },
  { icon: <DribbbleIcon />, href: "/dribbble.com" },
  { icon: <TwitterIcon />, href: "/twitter.com" },
];

const Topbar = (props: Props) => {
  const [mode, setMode]: [
    mode: string,
    setMode: React.Dispatch<React.SetStateAction<string>>
  ] = useThemeSwither();

  const [isOpen, setIsOpen] = useState(false);

  // click outside of div
  const popRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e: any) => {
    if (popRef.current && !(popRef.current as any).contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <header className="w-full px-8 md:px-16 lg:px-32 py-8 font-medium flex items-center justify-between min-w-[300px] relativ">
      <button
        className="flex flex-col justify-center items-center lg:hidden z-50"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span
          className={cn(
            "bg-primary block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out",
            {
              "rotate-45 translate-y-1.5": isOpen,
              "-translate-y-0.5": !isOpen,
            }
          )}
        ></span>
        <span
          className={cn(
            "bg-primary block h-0.5 w-6 rounded-sm my-1 transition-all duration-300 ease-out",
            {
              "opacity-0": isOpen,
              "opacity-100": !isOpen,
            }
          )}
        ></span>
        <span
          className={cn(
            "bg-primary block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out",
            {
              "-rotate-45 -translate-y-1.5": isOpen,
              "translate-y-0.5": !isOpen,
            }
          )}
        ></span>
      </button>
      {/* make sure it locates centerly */}
      <Logo className="flex absolute right-0 sm:right-[50%] top-2 translate-x-[-50%] lg:translate-x-0 lg:hidden" />

      <div className="hidden lg:flex items-center justify-between w-full">
        <nav className="flex">
          {links.map((link) => (
            <CustomLink
              href={link.url}
              key={link.url}
              title={link.title}
              className="mx-4"
            />
          ))}
        </nav>
        <Logo className="flex" />

        <nav className="flex gap-2">
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            className="w-8"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 1.5 }}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com"
            target={"_blank"}
            className="w-8"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 1.5 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target={"_blank"}
            className="w-8"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 1.5 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://pinterest.com"
            target={"_blank"}
            className="w-8 dark:bg-white rounded-full"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 1.5 }}
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="https://dribbble.com"
            target={"_blank"}
            className="w-8"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 1.5 }}
          >
            <DribbbleIcon />
          </motion.a>

          <button
            className="ml-3 flex items-center rounded-full p-1"
            onClick={() =>
              setMode((prev: string) => (prev === "dark" ? "light" : "dark"))
            }
          >
            {mode === "dark" ? (
              <SunIcon className="fill-primary" />
            ) : (
              <MoonIcon className="fill-primary" />
            )}
          </button>
        </nav>
      </div>

      {/* mobile menu */}
      <motion.div
        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.5 },
          // translateX: "-50%",
          // translateY: "-50%",
        }}
        className={cn(
          "min-w-[70vw] flex-col justify-between items-center z-30 fixed top-1/2 left-1/2  lg:hidden bg-primary/60 text-primary-foreground rounded-lg backdrop-blur-md py-32 gap-4 m-auto",
          {
            hidden: !isOpen,
            flex: isOpen,
          }
        )}
        ref={popRef}
      >
        <nav className="flex items-start flex-col justify-center gap-2">
          {links.map((link) => (
            <CustomMobileLink
              href={link.url}
              key={link.url}
              title={link.title}
              className="mx-4"
              setIsOpen={setIsOpen}
            />
          ))}
        </nav>

        <nav className="flex gap-4 flex-wrap px-4 justify-center items-center">
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            className="w-8"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 1.5 }}
            onClick={() => setIsOpen(false)}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com"
            target={"_blank"}
            className="w-8"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 1.5 }}
            onClick={() => setIsOpen(false)}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target={"_blank"}
            className="w-8"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 1.5 }}
            onClick={() => setIsOpen(false)}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://pinterest.com"
            target={"_blank"}
            className="w-8 dark:bg-white rounded-full"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 1.5 }}
            onClick={() => setIsOpen(false)}
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="https://dribbble.com"
            target={"_blank"}
            className="w-8"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 1.5 }}
            onClick={() => setIsOpen(false)}
          >
            <DribbbleIcon />
          </motion.a>

          <button
            className="flex items-center rounded-full p-1 bg-primary"
            onClick={() => {
              setMode((prev: string) => (prev === "dark" ? "light" : "dark"));
              setIsOpen(false);
            }}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-primary" />
            ) : (
              <MoonIcon className="fill-primary" />
            )}
          </button>
        </nav>
      </motion.div>
    </header>
  );
};

export default Topbar;
