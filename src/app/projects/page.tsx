"use client";

import AnimatedText from "@/components/home/AnimatedText";
import HomeLayout from "@/components/home/Layout";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

type FeaturedProjectProps = {
  type: string;
  title: string;
  summary: string;
  img: string;
  link: string;
  github: string;
};

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: FeaturedProjectProps) => {
  return (
    <article className="w-full flex flex-col md:flex-row items-center justify-between  bg-primary-foreground relative shadow-2xl p-8 md:p-12 rounded-2xl md:rounded-3xl rounded-br-2xl border border-solid border-primary ">
      <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[1.5rem] rounded-br-[1.5rem] bg-primary" />
      <Link
        href={link}
        target="_blank"
        className="w-full md:w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          width={1280}
          height={720}
          alt={title}
          className="w-full h-auto"
          priority
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </Link>

      <div className="w-full md:w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-purple-400 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-8 "
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-primary">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank">
            <GithubIcon className="w-10 h-10" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-primary text-primary-foreground py-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

type ProjectProps = {
  title: string;
  type: string;
  img: string;
  link: string;
  github: string;
};
const Project = ({ title, type, img, link, github }: ProjectProps) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-primary bg-primary-foreground p-6 relative">
      <div className="absolute top-0 -right-4 -z-10 w-[103%] h-[103%] rounded-[1.2rem] rounded-br-[1.5rem] bg-primary" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          width={1280}
          height={720}
          alt={title}
          className="w-full h-auto"
          priority
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-purple-400 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-8 "
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank">
            <GithubIcon className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </article>
  );
};

type Props = {};

const ProjectsPage = (props: Props) => {
  return (
    <div className="mb-16 flex flex-col items-center justify-center ">
      <HomeLayout className="pt-16 relative">
        <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />
        <div className="grid grid-cols-12 md:gap-x-4 lg:gap-x-8 xl:gap-x-16 2xl:gap-x-24 gap-y-8 md:gap-y-16 lg:gap-y-24">
          <div className="col-span-12">
            <FeaturedProject
              title="Crypto Screener Application"
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
              link="/"
              type="Featured Project"
              img="/images/projects/crypto-screener-cover-image.jpg"
              github="github.com"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Project
              title="Crypto Screener Application"
              link="/"
              type="Featured Project"
              img="/images/projects/crypto-screener-cover-image.jpg"
              github="github.com"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Project
              title="Crypto Screener Application"
              link="/"
              type="Featured Project"
              img="/images/projects/crypto-screener-cover-image.jpg"
              github="github.com"
            />
          </div>
          <div className="col-span-12">
            <FeaturedProject
              title="Crypto Screener Application"
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
              link="/"
              type="Featured Project"
              img="/images/projects/crypto-screener-cover-image.jpg"
              github="github.com"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Project
              title="Crypto Screener Application"
              link="/"
              type="Featured Project"
              img="/images/projects/crypto-screener-cover-image.jpg"
              github="github.com"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Project
              title="Crypto Screener Application"
              link="/"
              type="Featured Project"
              img="/images/projects/crypto-screener-cover-image.jpg"
              github="github.com"
            />
          </div>
        </div>
      </HomeLayout>
    </div>
  );
};

export default ProjectsPage;
