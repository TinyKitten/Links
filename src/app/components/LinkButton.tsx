import Link from "next/link";
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
  return (
    <Link
      href={href}
      type="button"
      target="_blank"
      {...props}
      className={twMerge(
        `block bg-white w-full p-0 text-left border-l-16 rounded-sm px-4 py-3 shadow cursor-pointer hover:shadow-lg transition-shadow`,
        className
      )}
      style={{ borderLeftColor: color }}
    >
      <p className="font-bold max-sm:text-sm/4">{label}</p>
      <p className="text-xs/4 font-semibold text-gray-500">{href}</p>
    </Link>
  );
};
