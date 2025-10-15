import { useState } from "preact/hooks";
import type { ComponentProps } from "preact";
import { twMerge } from "tailwind-merge";

type LinkButtonProps = {
  color: string;
  label: string;
  href: string;
} & Omit<ComponentProps<"a">, "href">;

export const LinkButton = ({
  className,
  color,
  label,
  href,
  ...props
}: LinkButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const mergedClassName = twMerge(
    "block relative flex items-center h-16 bg-white w-full p-0 text-left border-l-16 rounded-sm shadow cursor-pointer hover:shadow-lg transition-shadow",
    typeof className === "string" ? className : undefined
  );
  return (
    <a
      {...props}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={mergedClassName}
      style={{ borderLeftColor: color }}
      onMouseEnter={(event) => {
        props.onMouseEnter?.(event);
        setIsHovered(true);
      }}
      onMouseLeave={(event) => {
        props.onMouseLeave?.(event);
        setIsHovered(false);
      }}
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
        <p className="text-xs/4 font-semibold text-gray-600">{href}</p>
      </div>
    </a>
  );
};
