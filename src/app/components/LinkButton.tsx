"use client";

import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  color: string;
  label: string;
  href: string;
};

export const LinkButton = ({
  className,
  color,
  label,
  href,
  ...props
}: React.ComponentProps<typeof Link> & Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      type="button"
      target="_blank"
      {...props}
      className={twMerge(
        `block relative flex items-center h-16 bg-white w-full p-0 text-left border-l-16 rounded-sm shadow cursor-pointer hover:shadow-lg transition-shadow`,
        className
      )}
      style={{ borderLeftColor: color }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute w-[calc(100%-2px)] h-full rounded-r-sm transition-opacity duration-300"
        style={{
          backgroundColor: color,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative flex flex-col justify-center rounded-r-[2px] pl-4 z-10 bg-white w-full mr-1 h-[calc(100%-4px)]">
        <p className="font-bold max-sm:text-sm/4">{label}</p>
        <p className="text-xs/4 font-semibold text-gray-500">{href}</p>
      </div>
    </Link>
  );
};
