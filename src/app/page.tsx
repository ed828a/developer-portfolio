import AnimatedText from "@/components/home/AnimatedText";
import CircularTextButton from "@/components/home/CircularTextButton";
import HireMe from "@/components/home/HireMe";
import HomeLayout from "@/components/home/Layout";
import { LinkArrow } from "@/components/icons";
import Topbar from "@/components/navs/Topbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center text-primary w-full min-h-screen relative">
      <HomeLayout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2 ">
            <Image
              src={"/images/profile/developer-pic-1.png"}
              width={512}
              height={512}
              alt="profile"
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text={"Turning Vision Into Reality With Code And Design."}
              className="text-6xl text-left"
            />
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start">
              <Link
                href={"/dummy.pdf"}
                target={"_blank"}
                className="text-center bg-primary text-primary-foreground py-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-primary-foreground hover:text-primary border-2 border-transparent hover:border-primary flex items-center"
                download={true}
              >
                Resume <LinkArrow className="w-6 ml-1" />
              </Link>
              <Link
                href={"mailto:ed828dev@gmail.com"}
                target="_blank"
                className="ml-4 text-lg font-medium capitalize text-primary underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </HomeLayout>
      <CircularTextButton
        text={"Front-end Developer and UI Designer"}
        className="fixed bottom-0 left-0"
      />
      {/* <HireMe /> */}
      <div className="absolute right-8 bottom-8 inline-block w-24">
        <Image
          src={"/images/svgs/miscellaneous_icons_1.svg"}
          width={200}
          height={200}
          alt=""
          className="w-full h-auto"
        />
      </div>
    </main>
  );
}
