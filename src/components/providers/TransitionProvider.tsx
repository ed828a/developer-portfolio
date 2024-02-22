"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Topbar from "../navs/Topbar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const TransitionProvider = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="w-screen h-screen ">
        <TransitionProvider>{children}</TransitionProvider>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
