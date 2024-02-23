"use client";

import AnimatedText from "@/components/home/AnimatedText";
import HomeLayout from "@/components/home/Layout";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import article1 from "../../../public/images/articles/pagination component in reactjs.jpg";
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";

type MovingImagProps = {
  title: string;
  img: string;
  link: string;
};
const MovingImage = ({ title, img, link }: MovingImagProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event: any) {
    console.log("x", event.pagex);
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event: any) {
    console.log("leave x ", event.pagex);
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
        width={1280}
        height={720}
        ref={imgRef}
        style={{ x, y }}
      />
    </Link>
  );
};

type ArticleProps = {
  img: string;
  title: string;
  date: string;
  link: string;
};

const Article = ({ img, title, date, link }: ArticleProps) => {
  return (
    <li className="relative w-full px-4 py-6 my-4 rounded-xl flex items-center justify-between bg-primary-foreground text-primary first:mt-0 border border-solid border-primary border-r-4 border-b-4">
      <MovingImage title={title} img={img} link={link} />

      <span className="text-purple-400 font-semibold pl-4">{date}</span>
    </li>
  );
};

const FramerImage = motion(Image);

type FeaturedArticleProps = {
  img: StaticImageData | string;
  title: string;
  time: string;
  summary: string;
  link: string;
};

const FeaturedArticle = ({
  img,
  title,
  time,
  summary,
  link,
}: FeaturedArticleProps) => {
  return (
    <li className="col-span-1 w-full p-4 bg-primary-foreground border border-primary rounded-2xl relative">
      <div className="absolute top-0 -right-4 -z-10 w-[103%] h-[103%] rounded-[2rem] rounded-br-[1.5rem] bg-primary" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
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
      <Link href={link} target="_blank" className="">
        <h2 className="capitalize text-2xl font-bold mt-4 mb-2 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-purple-400 font-semibold">{time}</span>
    </li>
  );
};

type Props = {};

const ArticlesPage = (props: Props) => {
  return (
    <div className="mb-16 flex flex-col items-center justify-center overflow-hidden">
      <HomeLayout className="pt-16">
        <AnimatedText text="Words Can Change The World! " className="mb-16" />
        <ul className="grid grid-cols-2 gap-16 p-4 ">
          <FeaturedArticle
            title="Build A Custom Pagination Component In Reactjs From Scratch"
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            time="9 min read"
            link="/articles"
            img={article1}
          />
          <FeaturedArticle
            title="Build A Custom Pagination Component In Reactjs From Scratch"
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            time="9 min read"
            link="/"
            img="/images/articles/create loading screen in react js.jpg"
          />
        </ul>
        <h2 className="font-bold text-4xl w-full text-center my-16">
          All Articles
        </h2>
        <ul className="">
          <Article
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            date="March 22, 2023"
            link="/articles"
            img="/images/articles/create modal component in react using react portals.png"
          />
          <Article
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            date="March 22, 2023"
            link="/articles"
            img="/images/articles/create modal component in react using react portals.png"
          />
          <Article
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            date="March 22, 2023"
            link="/articles"
            img="/images/articles/create modal component in react using react portals.png"
          />
          <Article
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            date="March 22, 2023"
            link="/articles"
            img="/images/articles/create modal component in react using react portals.png"
          />
          <Article
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            date="March 22, 2023"
            link="/articles"
            img="/images/articles/create modal component in react using react portals.png"
          />
          <Article
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            date="March 22, 2023"
            link="/articles"
            img="/images/articles/create modal component in react using react portals.png"
          />
          <Article
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            date="March 22, 2023"
            link="/articles"
            img="/images/articles/create modal component in react using react portals.png"
          />
          <Article
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            date="March 22, 2023"
            link="/articles"
            img="/images/articles/create modal component in react using react portals.png"
          />
        </ul>
      </HomeLayout>
    </div>
  );
};

export default ArticlesPage;
