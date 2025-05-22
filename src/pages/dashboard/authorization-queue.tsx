import { FilterIcon } from "../../assets/icons";
import SearchIcon from "../../assets/icons/search-icon";
import { Header, Pagination } from "../../components";
import React, { useState, useMemo } from "react";
import type { ChangeEvent } from "react";

const AuthorizationQueue = () => {
  return (
    <main className="">
      <Header
        title="Authorization Queue"
        description="Shows the different requests for authorized roles."
      />
      <hr className="my-2 border-t border-[#98A2B3]" />
      <AuthorizationQueueTable />
    </main>
  );
};

export default AuthorizationQueue;

const ITEMS_PER_PAGE = 5;

const AuthorizationQueueTable: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const authorizationData = useMemo(
    () => [
      {
        id: "1",
        menu: "Branch",
        access: "Create",
        initiator: "Nazeer",
        dateRequested: "2023-01-01 10:27:43",
        status: "Pending",
      },
      {
        id: "2",
        menu: "Users",
        access: "Edit",
        initiator: "Nazeer",
        dateRequested: "2023-01-01 10:27:43",
        status: "Pending",
      },
      {
        id: "3",
        menu: "Roles",
        access: "Full",
        initiator: "Nazeer",
        dateRequested: "2023-01-01 10:27:43",
        status: "Pending",
      },
      {
        id: "4",
        menu: "Roles",
        access: "Create",
        initiator: "Nazeer",
        dateRequested: "2023-01-01 10:27:43",
        status: "Pending",
      },
      {
        id: "5",
        menu: "Permissions",
        access: "View",
        initiator: "Nazeer",
        dateRequested: "2023-01-01 10:27:43",
        status: "Pending",
      },
    ],
    []
  );

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

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const tableHeadings = [
    { label: "Initiator", alignment: "text-left" },
    { label: "Menu", alignment: "text-center" },
    { label: "Access", alignment: "text-center" },
    { label: "Date Requested", alignment: "text-center" },
    { label: "Status", alignment: "text-center" },
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

        <button className="flex items-center text-xs font-medium px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-gray-700">
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
                      {item.initiator}
                    </td>
                    <td className="py-3 px-4 text-[10px] text-[#475467] border border-[#EAECF0] text-center">
                      {item.menu}
                    </td>
                    <td className="py-3 px-4 text-[10px] text-[#475467] border border-[#EAECF0] text-center">
                      {item.access}
                    </td>
                    <td className="py-3 px-4 text-[10px] text-[#475467] border border-[#EAECF0] text-center">
                      {item.dateRequested}
                    </td>
                    <td className="py-3 px-4 text-[10px] text-[#B54708] border border-[#EAECF0] text-center">
                      <span className=" border border-[#FEDF89] bg-[#FFFAEB] py-2 px-3 rounded-full font-medium">
                        {item.status}
                      </span>
                    </td>
                    <td className="border border-[#EAECF0]">
                      <div className="flex items-center justify-center gap-2">
                        <button className="px-2 py-1 text-[10px] text-[#00984C] font-bold rounded-md hover:bg-green-600 hover:text-white transition duration-200">
                          Approve
                        </button>
                        <button className="px-2 py-1 text-[10px] text-[#D92D20] font-bold rounded-md hover:bg-red-600 hover:text-white transition duration-200">
                          Decline
                        </button>
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
