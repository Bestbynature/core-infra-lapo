import { useLocation } from "react-router-dom";
import { PlusIcon, RefreshIcon } from "../assets/icons";
import SearchIcon from "../assets/icons/search-icon";
import BlueButton from "./blue-button";
import WhiteButton from "./white-button";

interface SearchRowProps {
  placeholderText: string;
  blueButtonLabel?: string;
}

const SearchRow = ({ placeholderText, blueButtonLabel }: SearchRowProps) => {
  const location = useLocation();

  const isBranches = location.pathname.includes("branches");
  return (
    <div className="flex flex-col gap-[10px]">
      <hr className="border border-gray-300 " />
      <div className="flex items-center justify-between">
        <div className=" cursor-pointer w-[25%] h-8 border border-gray-300 rounded-lg py-2 px-3 flex items-center gap-2">
          <SearchIcon />
          <input
            type="search"
            name="search"
            placeholder={placeholderText}
            className="w-full h-full outline-none bg-transparent text-xs text-[#344054] placeholder:text-[#344054]"
          />
        </div>
        <div className="flex items-center gap-3">
          <BlueButton
            label={blueButtonLabel || "Add Branch"}
            icon={<PlusIcon />}
            onClick={() => console.log("Add Branch clicked")}
          />

          {isBranches && (
            <WhiteButton
              icon={<RefreshIcon />}
              label="Update from Core"
              onClick={() => console.log("Update from Core clicked")}
            />
          )}
        </div>
      </div>

      <hr className="border border-gray-300 flex-1" />
    </div>
  );
};

export default SearchRow;
