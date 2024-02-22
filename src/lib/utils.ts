import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Dancing_Script,
  Inter,
  Merriweather,
  Montserrat,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont", // use can use this variable in css file
});
export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["italic", "normal"],
});

export const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
