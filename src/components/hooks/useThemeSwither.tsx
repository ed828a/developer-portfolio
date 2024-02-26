"use client";

import React, { useEffect, useState } from "react";

const useThemeSwither = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    // console.log("mediaQuery.matches", mediaQuery.matches);
    // console.log("userPref", userPref);
    if (userPref) {
      setMode(userPref);
      if (
        userPref === "dark" &&
        !document.documentElement.classList.contains("dark")
      ) {
        document.documentElement.classList.add("dark");
      }
    }

    const handleChange = () => {
      let check;
      if (userPref) {
        check = userPref === "dark" ? "dark" : "light";
      } else {
        check = mediaQuery.matches ? "dark" : "light";
      }

      setMode(check);
      if (
        check === "dark" &&
        !document.documentElement.classList.contains("dark")
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwither;
