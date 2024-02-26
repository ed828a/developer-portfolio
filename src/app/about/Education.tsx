"use client";

import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

type DetailsProps = {
  type: string;
  time: string;
  place: string;
  info: string;
};

const Details = ({ type, time, place, info }: DetailsProps) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between relative"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className=""
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-primary">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

type Props = {};

const Education = (props: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-[34px] top-2 w-[4px] h-full bg-primary origin-top"
          style={{ scaleY: scrollYProgress }}
        ></motion.div>
        <ul className="">
          {educations.map((exp, index) => (
            <Details
              type={exp.type}
              time={exp.time}
              place={exp.place}
              info={exp.info}
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;

const educations = [
  {
    type: "Bachelor Of Science In Computer Science",
    time: "2016-2020 ",
    place: "Massachusetts Institute Of Technology (MIT)",
    info: "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.",
  },
  {
    type: "Master Of Computer Science",
    time: "2020-2022",
    place: "Stanford University",
    info: "Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding.",
  },
  {
    type: "Online Coursework",
    time: "2016-2020",
    place: "Coursera And EdX",
    info: "Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering.",
  },
];
