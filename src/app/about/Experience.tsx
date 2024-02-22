import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

type DetailsProps = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
};

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: DetailsProps) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className=""
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            className="capitalize text-purple-400"
            target="_blank"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-primary">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

type Props = {};

const Experience = (props: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 text-center">Experience</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-[34px] top-2 w-[4px] h-full bg-primary origin-top"
          style={{ scaleY: scrollYProgress }}
        ></motion.div>
        <ul className="">
          {experiences.map((exp, index) => (
            <Details
              position={exp.position}
              company={exp.company}
              companyLink={exp.companyLink}
              time={exp.time}
              address={exp.address}
              work={exp.work}
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;

const experiences = [
  {
    position: "Intern",
    company: "Facebook",
    companyLink: "https://facebook.com",
    time: "Summer 2021",
    address: "Menlo Park, CA",
    work: "Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.",
  },

  {
    position: "Software Developer",
    company: "Amazon",
    companyLink: "https://amazon.com",
    time: "2020-2021",
    address: "Seattle, WA.",
    work: "Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability.",
  },

  {
    position: "Software Developer Intern",
    company: "Microsoft",
    companyLink: "https://microsoft.com",
    time: "Summer 2019",
    address: "Redmond, WA",
    work: "Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component.",
  },

  {
    position: "Teaching Assistant",
    company: "MIT",
    companyLink: "",
    time: "Fall 2018",
    address: "Massachusetts Ave, Cambridge, MA",
    work: "Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.",
  },
];
