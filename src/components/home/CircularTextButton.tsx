"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const text = "Front-end Developer and UI Designer";

type Props = {
  text: string;
  className: string;
};

const CircularTextButton = ({ text, className }: Props) => {
  return (
    <div className={cn("", className)}>
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        viewBox="0 0 300 300"
        className="w-48 h-48 md:w-[300px] md:h-[300px] "
      >
        <defs>
          <path
            id="circlePath"
            d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
          />
        </defs>
        <text fill="currentColor">
          <textPath xlinkHref="#circlePath" className={cn("text-xl font-bold")}>
            {text}
          </textPath>
        </text>
      </motion.svg>
      <Link
        href="mailto:ed828a@gmail.com"
        className="w-14 h-14 md:w-24 md:h-24 absolute top-0 left-0 right-0 bottom-0 m-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-xs"
      >
        Hire Me
      </Link>
    </div>
  );
};

export default CircularTextButton;
