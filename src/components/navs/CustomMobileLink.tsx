"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  href: string;
  title: string;
  className?: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomMobileLink = ({
  href,
  title,
  className = "",
  setIsOpen,
}: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
    setIsOpen(false);
  };

  return (
    <button onClick={handleClick} className={cn(className, "relative group")}>
      {title}
      <span
        className={cn(
          "h-[4px] inline-block w-0 bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300",
          { "w-full": pathname === href }
        )}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default CustomMobileLink;
