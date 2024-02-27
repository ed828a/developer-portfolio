"use client";

import AnimatedText from "@/components/home/AnimatedText";
import HomeLayout from "@/components/home/Layout";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Metadata } from "next";
import Image from "next/image";
import { LegacyRef, useEffect, useRef } from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

// export const metadata: Metadata = {
//   title: "Edward | About Page",
//   description: "Brief about myself",
// };

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref: LegacyRef<HTMLSpanElement> = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest_value) => {
      // console.log("latest_value", latest_value);
      if (ref.current && latest_value.toFixed(0) <= value) {
        ref.current.textContent = latest_value.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span className="" ref={ref}></span>;
};

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className="flex w-full flex-col items-center justify-center relative">
      <HomeLayout className="pt-0 md:pb-16 relative">
        <AnimatedText
          text="Passion Fuels Purpose! "
          className="mb-4 md:my-16  relative text-2xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl text-center   "
        />
        <div className="grid w-full grid-cols-8 md:gap-16">
          <div className="col-span-8 order-1 sm:order-0 md:col-span-3 flex flex-col items-start justify-start p-8 md:p-0">
            <h2 className="mb-4 text-lg font-bold uppercase text-primary/75 ">
              Biography
            </h2>
            <p className="font-medium">
              Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 4 years of experience in the field. I am
              always looking for new and innovative ways to bring my
              clients&apos; visions to life.
            </p>
            <p className="font-medium my-4">
              I believe that design is about more than just making things look
              pretty – it&apos;s about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className="font-medium">
              Whether I&apos;m working on a website, mobile app, or other
              digital product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>
          <div className="col-span-8 order-0 md:order-1 md:col-span-3">
            <div className="w-1/2 mx-auto md:w-full h-max rounded-2xl border-2 border-solid border-primary bg-primary-foreground p-8 relative md:mx-4">
              <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-[2rem] bg-primary rounded-bl-[1.4rem] rounded-br-[1.5rem]" />
              <Image
                src={"/images/profile/developer-pic-2.jpg"}
                alt="developer pic"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="col-span-8 order-2 md:col-span-2 flex flex-row md:flex-col items-end justify-between px-8 md:px-0">
            <div className="flex flex-col items-end justify-center">
              <span className="text-3xl md:text-7xl font-bold inline-block">
                <AnimatedNumbers value={50} />+
              </span>
              <h2 className="text-sm md:text-xl font-medium capitalize text-primary/75">
                satisfied clients
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="text-3xl md:text-7xl font-bold inline-block">
                <AnimatedNumbers value={40} />+
              </span>
              <h2 className="text-sm md:text-xl font-medium capitalize text-primary/75">
                projects completed
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="text-3xl md:text-7xl font-bold inline-block">
                <AnimatedNumbers value={4} />+
              </span>
              <h2 className="text-sm md:text-xl font-medium capitalize text-primary/75">
                yearsof experience
              </h2>
            </div>
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </HomeLayout>
    </div>
  );
};

export default AboutPage;
