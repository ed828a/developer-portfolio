import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className: string;
};

const HomeLayout = ({ children, className }: Props) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 px-16 lg:px-32 ${className} `}
    >
      {children}
    </div>
  );
};

export default HomeLayout;
