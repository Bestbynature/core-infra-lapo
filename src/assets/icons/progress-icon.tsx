import { type FC } from "react";
import type { IconProps } from "../../utils/types/login-types";

const ProgressIcon: FC<IconProps> = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_163_7408)">
        <path
          d="M10.0001 1.66699V5.00033M10.0001 15.0003V18.3337M5.00008 10.0003H1.66675M18.3334 10.0003H15.0001M15.8988 15.899L13.5417 13.542M15.8988 4.16694L13.5417 6.52397M4.10139 15.899L6.45841 13.542M4.10139 4.16694L6.45841 6.52397"
          stroke="white"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_163_7408">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ProgressIcon;
