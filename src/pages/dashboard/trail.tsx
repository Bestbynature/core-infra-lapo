import { FilterIcon } from "../../assets/icons";
import SearchIcon from "../../assets/icons/search-icon";
import { Header, Pagination } from "../../components";
import React, { useState, useMemo } from "react";
import type { ChangeEvent } from "react";

const Trail = () => {
  return (
    <main className="">
      <Header
        title="Trail"
        description="View details of different card trails here."
      />
      <hr className="my-2 border-t border-[#98A2B3]" />
      <TrailTable />
    </main>
  );
};

export default Trail;

const ITEMS_PER_PAGE = 5;

const TrailTable: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  type TrailItem = {
    id: string;
    actor: string;
    event: string;
    state: string;
    device: string;
    timestamp: string;
  };

  const trailData: TrailItem[] = useMemo(() => [], []);

  const filteredItems = useMemo(() => {
    if (!searchText) return trailData;
    const lowercasedSearchText = searchText.toLowerCase();
    return trailData.filter(
      (item) =>
        item.actor.toLowerCase().includes(lowercasedSearchText) ||
        item.event.toLowerCase().includes(lowercasedSearchText)
    );
  }, [trailData, searchText]);

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
    { label: "Actor", alignment: "text-left" },
    { label: "Event", alignment: "text-center" },
    { label: "State", alignment: "text-center" },
    { label: "Device", alignment: "text-center" },
    { label: "Timestamp", alignment: "text-center" },
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
                      {item.actor}
                    </td>
                    <td className="py-3 px-4 text-[10px] text-[#475467] border border-[#EAECF0] text-center">
                      {item.event}
                    </td>
                    <td className="py-3 px-4 text-[10px] text-[#475467] border border-[#EAECF0] text-center">
                      {item.state}
                    </td>
                    <td className="py-3 px-4 text-[10px] text-[#475467] border border-[#EAECF0] text-center">
                      {item.device}
                    </td>
                    <td className="py-3 px-4 text-[10px] text-[#475467] border border-[#EAECF0] text-center">
                      {item.timestamp}
                    </td>

                    <td className="border border-[#EAECF0]">
                      <div className="flex items-center justify-center gap-2"></div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  {tableHeadings.map((_, index) => (
                    <td
                      key={index}
                      className=" whitespace-nowrap text-sm border border-[#EAECF0] text-gray-500 text-center"
                    >
                      <div className="h-10" />
                    </td>
                  ))}
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
