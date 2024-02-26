import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className: string;
};

const HomeLayout = ({ children, className }: Props) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 px-8 md:px-12 lg:px-24 xl:px-32  ${className} `}
    >
      {children}
    </div>
  );
};

export default HomeLayout;
