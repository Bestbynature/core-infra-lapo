import { useLocation } from "react-router-dom";
import { UploadIcon } from "../assets/icons";
import WhiteButton from "./white-button";

const Header = () => {
  const location = useLocation();

  const isBranches = location.pathname.includes("branches");

  return (
    <div className="flex items-end pb-[10px] ">
      <div className="flex-1 flex flex-col gap-1">
        <h1 className="text-lg font-bold text-[#101828]">Branches</h1>
        <p className="text-[#475467] text-sm">
          Add branches, view branches and edit branches.
        </p>
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
