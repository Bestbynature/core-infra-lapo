import { type FC } from "react";
import type { IconProps } from "../../utils/types/login-types";

const ComplaintsResolveIcon: FC<IconProps> = ({ outlineColor }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.66602 12.0007C8.66602 12.0007 9.33268 12.0007 9.99935 13.334C9.99935 13.334 12.117 10.0007 13.9993 9.33398"
        stroke={outlineColor ?? "#808080"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33398 14.668H7.15217C4.97803 14.668 3.89096 14.668 3.13603 14.1361C2.91973 13.9837 2.72771 13.803 2.56579 13.5994C2.00065 12.8889 2.00065 11.8657 2.00065 9.81948V8.12251C2.00065 6.14707 2.00065 5.15934 2.31328 4.37047C2.81586 3.10225 3.87874 2.10189 5.22623 1.62887C6.0644 1.33464 7.11386 1.33464 9.21277 1.33464C10.4122 1.33464 11.0118 1.33463 11.4908 1.50277C12.2608 1.77307 12.8682 2.3447 13.1553 3.0694C13.334 3.52018 13.334 4.0846 13.334 5.21342V6.66797"
        stroke={outlineColor ?? "#808080"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.99935 8C1.99935 6.7727 2.99427 5.77778 4.22157 5.77778C4.66543 5.77778 5.18871 5.85555 5.62026 5.73992C6.00369 5.63718 6.30319 5.33768 6.40593 4.95424C6.52157 4.52269 6.44379 3.99941 6.44379 3.55556C6.44379 2.32826 7.43872 1.33333 8.66602 1.33333"
        stroke={outlineColor ?? "#808080"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ComplaintsResolveIcon;
