"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const quote = {
  initial: { opacity: 1 },
  animate: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.1 } },
};

const singleWord = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

type Props = {
  text: string;
  className: string;
};

const AnimatedText = ({ text, className }: Props) => {
  return (
    <div
      className={cn(
        "w-full mx-auto py-2 flex items-center justify-center text-center"
      )}
    >
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={cn(
          "inline-block w-full text-primary font-bold capitalize text-8xl",
          className
        )}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            variants={singleWord}
            key={word + "-" + index}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
