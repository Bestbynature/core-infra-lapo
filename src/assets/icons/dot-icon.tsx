import { type FC } from "react";
import type { IconProps } from "../../utils/types/login-types";

const Dot: FC<IconProps> = () => {
  return (
    <svg
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4.5" r="4" fill="#014DAF" />
    </svg>
  );
};

export default Dot;
