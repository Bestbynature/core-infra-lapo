import { type FC } from "react";
import type { IconProps } from "../../utils/types/login-types";

const CloudUploadIcon: FC<IconProps> = () => {
  return (
    <svg
      width="44"
      height="45"
      viewBox="0 0 44 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_6172_450)">
        <rect x="2" y="1.5" width="40" height="40" rx="8" fill="white" />
        <rect x="2.5" y="2" width="39" height="39" rx="7.5" stroke="#EAECF0" />
        <path
          d="M18.6665 24.8333L21.9998 21.5M21.9998 21.5L25.3332 24.8333M21.9998 21.5V29M28.6665 25.4524C29.6844 24.6117 30.3332 23.3399 30.3332 21.9167C30.3332 19.3854 28.2811 17.3333 25.7498 17.3333C25.5677 17.3333 25.3974 17.2383 25.3049 17.0814C24.2182 15.2374 22.2119 14 19.9165 14C16.4647 14 13.6665 16.7982 13.6665 20.25C13.6665 21.9718 14.3627 23.5309 15.489 24.6613"
          stroke="#475467"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_6172_450"
          x="0"
          y="0.5"
          width="44"
          height="44"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_6172_450"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_6172_450"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CloudUploadIcon;
