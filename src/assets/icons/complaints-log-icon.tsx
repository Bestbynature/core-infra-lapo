import { type FC } from "react";
import type { IconProps } from "../../utils/types/login-types";

const ComplaintsLogIcon: FC<IconProps> = ({ outlineColor }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.668 11.334L6.0013 11.334"
        stroke={outlineColor ?? "#808080"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.668 8.66797L8.66797 8.66797"
        stroke={outlineColor ?? "#808080"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.668 9.33464C13.668 11.8488 13.668 13.1059 12.8381 13.8869C12.0082 14.668 10.6726 14.668 8.0013 14.668H7.48615C5.31201 14.668 4.22494 14.668 3.47001 14.1361C3.25371 13.9837 3.06169 13.803 2.89977 13.5994C2.33463 12.8889 2.33463 11.8657 2.33463 9.81948V8.12251C2.33463 6.14707 2.33463 5.15934 2.64726 4.37047C3.14984 3.10225 4.21273 2.10189 5.56021 1.62887C6.39839 1.33464 7.44784 1.33464 9.54676 1.33464C10.7461 1.33464 11.3458 1.33463 11.8248 1.50277C12.5948 1.77307 13.2021 2.3447 13.4893 3.0694C13.668 3.52018 13.668 4.0846 13.668 5.21342V9.33464Z"
        stroke={outlineColor ?? "#808080"}
        strokeLinejoin="round"
      />
      <path
        d="M2.33333 8C2.33333 6.7727 3.32826 5.77778 4.55556 5.77778C4.99941 5.77778 5.52269 5.85555 5.95424 5.73992C6.33768 5.63718 6.63718 5.33768 6.73992 4.95424C6.85555 4.52269 6.77778 3.99941 6.77778 3.55556C6.77778 2.32826 7.7727 1.33333 9 1.33333"
        stroke={outlineColor ?? "#808080"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ComplaintsLogIcon;
