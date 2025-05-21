import { useLocation } from "react-router-dom";
import { BellIcon, HomeIcon, Profile2Icon } from "../assets/icons";
import SearchIcon from "../assets/icons/search-icon";

const TitleBar = () => {
  const location = useLocation();
  const path = location.pathname;
  const pathParts = path.split("/");
  const lastPathPart = pathParts[pathParts.length - 1];
  const capitalizedPathPart =
    lastPathPart.charAt(0).toUpperCase() + lastPathPart.slice(1);

  return (
    <>
      <title>{capitalizedPathPart || "Dashboard"}</title>
      <div className="flex items-center justify-between border-b border-[#DEDEDF] bg-white px-5 py-4">
        <div className="flex items-center gap-3">
          <HomeIcon />
          <h1 className="text-xs font-medium text-[#001735]">
            {capitalizedPathPart || "Dashboard"}
          </h1>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className=" cursor-pointer flex-1 h-8 border border-gray-300 rounded-full py-2 px-3 flex items-center gap-2">
            <SearchIcon />
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="w-full h-full outline-none bg-transparent text-xs text-[#344054] placeholder:text-[#344054]"
            />
          </div>
          <span className="cursor-pointer">
            <BellIcon />
          </span>

          <div className="w-8 h-8 rounded-full bg-[#F2F4F7] flex items-center justify-center cursor-pointer">
            <Profile2Icon />
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleBar;
