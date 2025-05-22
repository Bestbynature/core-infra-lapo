import { type FC } from "react";
import type { IconProps } from "../../utils/types/login-types";

const GenerateReissuePinIcon: FC<IconProps> = ({ outlineColor }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.71572 5.28571C3.49117 4.16409 3.87889 3.60327 4.435 3.30164C4.9911 3 5.63731 3 6.92972 3H10.0573C11.9068 3 12.8315 3 13.4958 3.48152C13.7834 3.68997 14.0303 3.95783 14.2225 4.2698C14.6663 4.99044 14.6663 5.99363 14.6663 8C14.6663 10.0064 14.6663 11.0096 14.2225 11.7302C14.0303 12.0422 13.7834 12.31 13.4958 12.5185C12.8315 13 11.9068 13 10.0573 13H6.92972C5.63731 13 4.9911 13 4.435 12.6984C3.87889 12.3967 3.49117 11.8359 2.71572 10.7143L2.61696 10.5714C1.76099 9.33333 1.33301 8.71429 1.33301 8C1.33301 7.28571 1.76099 6.66667 2.61696 5.42857L2.71572 5.28571Z"
        stroke={outlineColor ?? "#808080"}
      />
      <path
        d="M5.99987 8H6.00586"
        stroke={outlineColor ?? "#808080"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66589 8H8.67188"
        stroke={outlineColor ?? "#808080"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3329 8H11.3389"
        stroke={outlineColor ?? "#808080"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GenerateReissuePinIcon;
