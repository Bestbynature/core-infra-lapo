import { type FC } from "react";
import type { IconProps } from "../../utils/types/login-types";

const ConfigureIcon: FC<IconProps> = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 8.35714L15.1786 8.35714M15.1786 8.35714C15.1786 9.9351 16.4578 11.2143 18.0357 11.2143C19.6137 11.2143 20.8929 9.9351 20.8929 8.35714C20.8929 6.77919 19.6137 5.5 18.0357 5.5C16.4578 5.5 15.1786 6.77919 15.1786 8.35714ZM9.46429 15.9762L20.8929 15.9762M9.46429 15.9762C9.46429 17.5541 8.1851 18.8333 6.60714 18.8333C5.02919 18.8333 3.75 17.5541 3.75 15.9762C3.75 14.3982 5.02919 13.119 6.60714 13.119C8.1851 13.119 9.46429 14.3982 9.46429 15.9762Z"
        stroke="#475467"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ConfigureIcon;
