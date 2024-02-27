import Link from "next/link";
import HomeLayout from "../home/Layout";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full border-t-2 border-solid border-primary font-medium text-lg">
      <HomeLayout className="py-8 flex flex-col-reverse gap-2 md:flex-row items-center justify-between">
        <span className="">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
        <div className="flex items-center">
          Build with&nbsp; <span className="text-red-400">&#9825;&nbsp;</span>
          by&nbsp;
          <Link
            href={"https://devdreaming.com"}
            className="underline underline-offset-2"
            target="_blank"
          >
            CodeBucks
          </Link>
        </div>

        <Link
          href={"/"}
          className="underline underline-offset-2"
          target="_blank"
        >
          Say Hello
        </Link>
      </HomeLayout>
    </footer>
  );
};

export default Footer;
