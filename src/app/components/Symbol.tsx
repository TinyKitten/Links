import { twMerge } from "tailwind-merge";

export const Symbol = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={twMerge(
        "bg-[#008ffe] aspect-square w-1/3 h-auto flex items-center justify-center rounded-bl-3xl",
        props.className
      )}
    >
      <svg
        width="449"
        height="314"
        viewBox="0 0 449 314"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-3/5 h-auto"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M85.8 167.6L13.2 313.3L0 306.7L144 17.7L150.4 5L152.2 0.5L154.2 5L160.5 17.7L152.3 34.2L93.5 152.2H211.1L152.3 34.2L160.5 17.7L224.3 145.5L220.9 152.2L224.3 145.5L288 17.7L296.3 34.2L237.4 152.2H355.1L296.3 34.2L288 17.7L294.3 5L296.3 0.600006L298.2 5L448.6 306.7L435.4 313.3L362.7 167.6H235.3L304.6 306.7L291.4 313.3L224.3 178.6L157.1 313.3L143.9 306.7L213.3 167.6H85.8Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
