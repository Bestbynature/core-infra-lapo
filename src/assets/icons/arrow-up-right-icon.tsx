import { type FC } from "react";
import type { IconProps } from "../../utils/types/login-types";

const ArrowUpRightIcon: FC<IconProps> = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 9L9 3M9 3H5M9 3V7"
        stroke="#29A174"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpRightIcon;
