import Link from "next/link";
import { CircularText } from "../icons";
import Image from "next/image";

type Props = {};

const HireMe = (props: Props) => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className="fill-primary animate-spin-slow " />
        <Link
          href={"mailto:ed828dev@gmail.com"}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground shadow-md border border-solid border-primary w-20 h-20 rounded-full font-semibold hover:text-primary hover:bg-primary-foreground"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
