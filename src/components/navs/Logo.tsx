"use client";

import { cn, dancingScript } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <div className={cn("items-center justify-center mt-2", className)}>
      <MotionLink
        href={"/"}
        className={`w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center rounded-full text-3xl font-bold ${dancingScript.className} `}
        whileHover={{
          scale: 1.05,
          backgroundColor: [
            "#D42121",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "#CC0D0D",
          ],
          color: ["#fff"],
          transition: {
            duration: 1,
            repeat: Infinity,
          },
        }}
      >
        ED
      </MotionLink>
    </div>
  );
};

export default Logo;
