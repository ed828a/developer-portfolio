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
    (imgRef.current as any).style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event: any) {
    console.log("leave x ", event.pagex);
    (imgRef.current as any).style.display = "none";
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
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
        initial={{ opacity: 0 }}
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
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full px-4 py-6 my-4 rounded-xl flex items-center justify-between bg-primary-foreground text-primary first:mt-0 border border-solid border-primary border-r-8 border-b-8"
    >
      <MovingImage title={title} img={img} link={link} />

      <span className="text-purple-400 font-semibold pl-4">{date}</span>
    </motion.li>
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
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
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
    <div className="mb-16 flex flex-col items-center justify-center ">
      <HomeLayout className="pt-16">
        <AnimatedText text="Words Can Change The World! " className="mb-16" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-16 p-4 ">
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
          {articles.map((article, index) => (
            <Article
              key={index}
              title={article.title}
              date={article.date}
              link={article.link}
              img={article.img}
            />
          ))}
        </ul>
      </HomeLayout>
    </div>
  );
};

export default ArticlesPage;

const articles = [
  {
    title: "create loading screen in react js",
    date: "March 22, 2024",
    link: "/",
    img: "/images/articles/create loading screen in react js.jpg",
  },
  {
    title: "create modal component in react using react portals",
    date: "March 22, 2024",
    link: "/",
    img: "/images/articles/create modal component in react using react portals.png",
  },
  {
    title: "form validation in reactjs using custom react hook",
    date: "March 22, 2024",
    link: "/",
    img: "/images/articles/form validation in reactjs using custom react hook.png",
  },
  {
    title: "pagination component in reactjs",
    date: "March 22, 2024",
    link: "/",
    img: "/images/articles/pagination component in reactjs.jpg",
  },
  {
    title: "smooth scrolling in reactjs",
    date: "March 22, 2024",
    link: "/",
    img: "/images/articles/smooth scrolling in reactjs.png",
  },
  {
    title: "todo list app built using react redux and framer motion",
    date: "March 22, 2024",
    link: "/",
    img: "/images/articles/todo list app built using react redux and framer motion.png",
  },
  {
    title: "What is higher order component in React",
    date: "March 22, 2024",
    link: "/",
    img: "/images/articles/What is higher order component in React.jpg",
  },
  {
    title: "What is Redux with easy explanation",
    date: "March 22, 2024",
    link: "/",
    img: "/images/articles/What is Redux with easy explanation.png",
  },
];
