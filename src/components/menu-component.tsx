import { type FC } from "react";
import { useNavigate } from "react-router-dom";
import type { IconProps } from "../utils/types/login-types";
import { useFormattedPathTitle } from "../hooks/use-formatted-path-title";

interface MenuComponentProps {
  icon: FC<IconProps>;
  text: string;
  textClassName?: string;
  path: string;
}

const MenuComponent = ({
  icon: Icon,
  text,
  textClassName,
  path,
}: MenuComponentProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  const capitalizedPathPart = useFormattedPathTitle();

  return (
    <div
      className={`flex items-center gap-3 py-[10px] px-3 cursor-pointer`}
      onClick={handleClick}
    >
      <Icon
        outlineColor={capitalizedPathPart === text ? "#014DAF" : "#808080"}
      />
      <p
        className={`text-xs ${
          textClassName
            ? textClassName
            : capitalizedPathPart === text
            ? "font-medium text-[#014DAF]"
            : "text-secondary"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default MenuComponent;
