import { useLocation } from "react-router-dom";
import { UploadIcon } from "../assets/icons";
import WhiteButton from "./white-button";

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  const location = useLocation();

  const isBranches = location.pathname.includes("branches");

  return (
    <div className="flex items-end pb-[10px] ">
      <div className="flex-1 flex flex-col gap-1">
        <h1 className="text-lg font-bold text-[#101828]">{title}</h1>
        <p className="text-[#475467] text-sm">{description}</p>
      </div>
      {isBranches && (
        <div>
          <WhiteButton icon={<UploadIcon />} label="Upload File" />
        </div>
      )}
    </div>
  );
};

export default Header;
