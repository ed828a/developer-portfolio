"use client";

import { motion } from "framer-motion";

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-primary text-primary-foreground px-1 py-1 md:px-6 md:py-3 shadow-primary cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="w-full ">
      <h2 className="font-bold text-3xl md:text-6xl lg:text-8xl mt-8 mb-2 md:mt-64 text-center">
        Skills
      </h2>
      <div className="w-full min-h-72 md:w-auto md:h-screen relative flex items-center justify-center rounded-full bg-circularLightSm dark:bg-circularDarkSm lg:bg-circularLight lg:dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-primary text-primary-foreground p-2 w-12 h-12 md:p-8 md:w-24 md:h-24 shadow-primary cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x={"-20vw"} y={"2vw"} />
        <Skill name="CSS" x={"-5vw"} y={"-10vw"} />
        <Skill name="Javascript" x={"20vw"} y={"6vw"} />
        <Skill name="ReactJS" x={"0vw"} y={"12vw"} />
        <Skill name="NextJS" x={"-20vw"} y={"-15vw"} />
        <Skill name="Gatsby" x={"15vw"} y={"-12vw"} />
        <Skill name="Web Design" x={"32vw"} y={"-5vw"} />
        <Skill name="Figma" x={"0vw"} y={"-20vw"} />
        <Skill name="Firebase" x={"-20vw"} y={"18vw"} />
      </div>
    </div>
  );
};

export default Skills;
