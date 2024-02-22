"use client";

import AnimatedText from "@/components/home/AnimatedText";
import HomeLayout from "@/components/home/Layout";

type Props = {};

const ProjectsPage = (props: Props) => {
  return (
    <div className="">
      <HomeLayout className="">
        <AnimatedText text="Imagination Trumps Knowledge!" className="" />
      </HomeLayout>
    </div>
  );
};

export default ProjectsPage;
