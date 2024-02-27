"use client";

import { motion, useScroll } from "framer-motion";
import { MutableRefObject } from "react";

type Props = {
  reference: MutableRefObject<null>;
};

const LiIcon = ({ reference }: Props) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
    // layoutEffect: false,
  });

  return (
    <figure className="absolute left-0  stroke-primary -rotate-90">
      <svg width={"75"} height={"75"} viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r={"20"}
          className="stroke-purple-400 dark:stroke-green-400 stroke-1 fill-none "
        />
        <motion.circle
          cx="75"
          cy="50"
          r={"20"}
          className="stroke-[5px] fill-primary-foreground"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r={"10"}
          className=" stroke-1 fill-purple-400 dark:fill-green-400 animate-pulse"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
