"use client";

import React from "react";
import Logo from "./Logo";
import CustomLink from "./CustomLink";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "../icons";
import { motion } from "framer-motion";

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
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
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
      {/* make sure it locates centerly */}
      {/* <div className="absolute left-[50%] top-2 translate-x-[-50%]"> */}
      <Logo />
      {/* </div> */}

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
          className="w-8"
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
      </nav>
    </header>
  );
};

export default Topbar;
