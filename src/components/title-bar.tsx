import { BellIcon, HomeIcon, Profile2Icon } from "../assets/icons";
import SearchBox from "./search-box";
import { sidebarItems } from "../utils/data";
import { useFormattedPathTitle } from "../hooks/use-formatted-path-title";
import React from "react";

const TitleBar = () => {
  const capitalizedPathPart = useFormattedPathTitle();

  const isDashboard = capitalizedPathPart === "Dashboard";

  const icon = sidebarItems.find(
    (item) => item.label === capitalizedPathPart
  )?.icon;

  return (
    <>
      <title>{capitalizedPathPart || "Dashboard"}</title>
      <div className="flex items-center justify-between border-b border-[#DEDEDF] bg-white px-5 py-4">
        <div className="flex items-center gap-3">
          {isDashboard ? (
            <HomeIcon />
          ) : icon ? (
            typeof icon === "function" ? (
              React.createElement(icon)
            ) : (
              icon
            )
          ) : null}
          <h1 className="text-xs font-medium text-[#001735]">
            {capitalizedPathPart || "Dashboard"}
          </h1>
        </div>
        <div className="flex items-center justify-between gap-4">
          {isDashboard && <SearchBox placeholderText="Search" />}
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
