import React from "react";
import { useNavigate } from "react-router-dom";

interface MenuComponentProps {
  icon: React.ReactElement;
  text: string;
  textClassName?: string;
  path: string;
}

const MenuComponent = ({
  icon,
  text,
  textClassName,
  path,
}: MenuComponentProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div
      className={`flex items-center gap-3 py-[10px] px-3 cursor-pointer`}
      onClick={handleClick}
    >
      {icon}
      <p className={`text-xs ${textClassName ?? "text-black/50"}`}>{text}</p>
    </div>
  );
};

export default MenuComponent;
