import { ConfigureIcon, FilterIcon } from "../../assets/icons";
import SearchIcon from "../../assets/icons/search-icon";
import { Header, Pagination } from "../../components";
import React, { useState, useMemo } from "react";
import type { ChangeEvent } from "react";

const AuthorizationList = () => {
  return (
    <main className="">
      <Header
        title="Authorization List"
        description="Shows list of all users with authorized roles."
      />
      <hr className="my-2 border-t border-[#98A2B3]" />
      <AuthorizationListTable />
    </main>
  );
};

export default AuthorizationList;

interface AuthorizationItem {
  id: string;
  menu: string;
  access: string;
  enabled: boolean;
}

const ITEMS_PER_PAGE = 5;

const AuthorizationListTable: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [authorizationData, setAuthorizationData] = useState<
    AuthorizationItem[]
  >([
    { id: "1", menu: "Users", access: "Create", enabled: true },
    { id: "2", menu: "Users", access: "Edit", enabled: true },
    { id: "3", menu: "Roles", access: "Full", enabled: true },
    { id: "4", menu: "Roles", access: "Create", enabled: false },
    { id: "5", menu: "Permissions", access: "View", enabled: true },
    { id: "6", menu: "Permissions", access: "Delete", enabled: false },
    { id: "7", menu: "Reports", access: "Generate", enabled: true },
    { id: "8", menu: "Settings", access: "Admin", enabled: false },
    { id: "9", menu: "Audit Log", access: "View", enabled: true },
    { id: "10", menu: "Dashboard", access: "Full", enabled: true },
    { id: "11", menu: "Users", access: "Delete", enabled: false },
    { id: "12", menu: "Roles", access: "View", enabled: true },
  ]);

  const filteredItems = useMemo(() => {
    if (!searchText) return authorizationData;
    const lowercasedSearchText = searchText.toLowerCase();
    return authorizationData.filter(
      (item) =>
        item.menu.toLowerCase().includes(lowercasedSearchText) ||
        item.access.toLowerCase().includes(lowercasedSearchText)
    );
  }, [authorizationData, searchText]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  };

  const handleToggleEnabledStatus = (itemId: string) => {
    setAuthorizationData((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, enabled: !item.enabled } : item
      )
    );
    console.log(`Toggled enabled status for item ID: ${itemId}`);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const tableHeadings = [
    { label: "Menu", alignment: "text-left" },
    { label: "Access", alignment: "text-center" },
    { label: "Enabled", alignment: "text-center" },
    { label: "Action", alignment: "text-center" },
  ];

  return (
    <div className=" min-h-screen">
      <div className="flex items-center justify-between bg-[#F9FAFB] border border-[#EAECF0] p-2 rounded-lg">
        <div className=" cursor-pointer w-[25%] h-8 border border-gray-300 bg-white rounded-lg py-2 px-3 flex items-center gap-2">
          <SearchIcon />
          <input
            type="search"
            name="search"
            placeholder="Search User"
            value={searchText}
            onChange={handleSearchChange}
            className="w-full h-full outline-none bg-transparent text-xs text-[#344054] placeholder:text-[#344054]"
          />
        </div>

        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-gray-700">
          <span className="mr-2">
            <FilterIcon />
          </span>
          Filter
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                {tableHeadings.map((heading, index) => (
                  <th
                    key={index}
                    className={`py-3 px-4 font-medium text-xs text-[#475467] bg-[#F9FAFB] border border-[#EAECF0] ${heading.alignment}`}
                  >
                    {heading.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-[10px] text-[#475467] border border-[#EAECF0] text-left">
                      {item.menu}
                    </td>
                    <td className="py-3 px-4 text-[10px] text-[#475467] border border-[#EAECF0] text-center">
                      {item.access}
                    </td>
                    <td className="py-3 px-4 text-[10px] text-[#475467] border border-[#EAECF0] text-center">
                      <label
                        htmlFor={`toggle-${item.id}`}
                        className="flex items-center cursor-pointer justify-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id={`toggle-${item.id}`}
                            className="sr-only"
                            checked={item.enabled}
                            onChange={() => handleToggleEnabledStatus(item.id)}
                          />
                          <div
                            className={`block w-10 h-6 rounded-full ${
                              item.enabled ? "bg-[#014DAF]" : "bg-[#F2F4F7]"
                            }`}
                          ></div>
                          <div
                            className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ease-in-out ${
                              item.enabled
                                ? "translate-x-full"
                                : "translate-x-0"
                            }`}
                          ></div>
                        </div>
                      </label>
                    </td>
                    <td className="py-3 px-4 text-[10px] text-[#475467] border border-[#EAECF0] text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <span>Configure</span>
                        <span className="text-gray-500">
                          <ConfigureIcon />
                        </span>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={tableHeadings.length}
                    className="py-8 text-center text-gray-500"
                  >
                    No matching authorization items found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
        />
      </div>
    </div>
  );
};
