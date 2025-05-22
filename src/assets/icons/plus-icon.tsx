import { type FC } from "react";
import type { IconProps } from "../../utils/types/login-types";

const PlusIcon: FC<IconProps> = () => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0001 4.6665V16.3332M4.16675 10.4998H15.8334"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
