import {
  BellIcon,
  ChevronRight,
  HomeIcon,
  Profile2Icon,
} from "../assets/icons";
import SearchBox from "./search-box";
import { sidebarItems } from "../utils/data";
import { useFormattedPathTitle } from "../hooks/use-formatted-path-title";
import React from "react";
import { routePaths } from "../routes/routes-config";
import { useLocation } from "react-router-dom";

const TitleBar = () => {
  const capitalizedPathPart = useFormattedPathTitle();

  const isDashboard = capitalizedPathPart === "Dashboard";

  const icon = sidebarItems.find(
    (item) => item.label === capitalizedPathPart
  )?.icon;

  const { pathname } = useLocation();

  const pathParts = pathname.split("/");
  const lastPathPart = pathParts[pathParts.length - 1];

  const capitalizedLastPathPart = lastPathPart
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const isSpecialPath = [
    routePaths.createRole,
    routePaths.createProfile,
  ].includes(pathname);

  const handleNavigate = () => {
    const previous = sidebarItems.find(
      (item) => item.label === capitalizedPathPart
    )?.path;

    if (previous) {
      window.history.pushState({}, "", previous);
      window.dispatchEvent(new Event("popstate"));
    }
  };

  return (
    <>
      <title>{capitalizedPathPart || "Dashboard"}</title>
      <div className="flex items-center justify-between border-b border-[#DEDEDF] bg-white px-5 py-3">
        {!isSpecialPath ? (
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
        ) : (
          <div className="flex items-center gap-3">
            <button
              className="flex items-center gap-3 cursor-pointer"
              onClick={handleNavigate}
            >
              <span className="transform rotate-180">
                <ChevronRight />
              </span>
              <span className="text-xs font-medium text-[#475467]">Back</span>
              <span className="">
                {typeof icon === "function" ? React.createElement(icon) : icon}
              </span>
            </button>
            <p className="flex items-center gap-3">
              <span className="">
                <ChevronRight />
              </span>
              <span className="text-xs font-medium text-[#475467]">
                {capitalizedPathPart}
              </span>
              <span className="">
                <ChevronRight />
              </span>
            </p>
            <span className="text-xs font-bold text-[#001735]">
              {capitalizedLastPathPart}
            </span>
          </div>
        )}
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
