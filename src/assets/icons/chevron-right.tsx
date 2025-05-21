import { type FC } from "react";
import type { IconProps } from "../../utils/types/login-types";

const ChevronRight: FC<IconProps> = () => {
  return (
    <svg
      width="5"
      height="10"
      viewBox="0 0 5 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 9L4.5 5L0.5 1"
        stroke="#808080"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronRight;
