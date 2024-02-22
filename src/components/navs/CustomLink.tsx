"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  title: string;
  className?: string;
};

const CustomLink = ({ href, title, className = "" }: Props) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={cn(className, "relative group")}>
      {title}
      <span
        className={cn(
          "h-[4px] inline-block w-0 bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300",
          { "w-full": pathname === href }
        )}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
