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
    <div className="flex w-full flex-col items-center justify-center">
      <HomeLayout className="pt-0 pb-16">
        <AnimatedText text="Passion Fuels Purpose! " className="my-16" />
        <div className="grid w-full grid-cols-8 gap-15">
          <div className="col-span-3 flex flex-col items-start justify-start">
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
          <div className="col-span-3 raltive h-max rounded-2xl border-2 border-solid border-primary bg-primary-foreground p-8 relative mx-4">
            <div className="absolute top-0 -right-4 -z-10 w-[103%] h-[103%] rounded-[2rem] bg-primary" />
            <Image
              src={"/images/profile/developer-pic-2.jpg"}
              alt="developer pic"
              width={200}
              height={200}
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="col-span-2 flex flex-col items-end justify-between">
            <div className="flex flex-col items-end justify-center">
              <span className="text-7xl font-bold inline-block">
                <AnimatedNumbers value={50} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-primary/75">
                satisfied clients
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="text-7xl font-bold inline-block">
                <AnimatedNumbers value={40} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-primary/75">
                projects completed
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="text-7xl font-bold inline-block">
                <AnimatedNumbers value={4} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-primary/75">
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
