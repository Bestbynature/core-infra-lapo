import { Pagination, Header } from "../../components";

const ComplaintsResolve = () => {
  return (
    <main className="">
      <Header
        title="Complaints: Resolve"
        description="View details of treated complaints and resolve pending ones here."
      />
      <AdvancedCardsTable />
    </main>
  );
};

export default ComplaintsResolve;

import React, { useState, useMemo } from "react";
import type { ChangeEvent } from "react";
import { CalendarIcon, DotIcon, FilterIcon } from "../../assets/icons";
import SearchIcon from "../../assets/icons/search-icon";
import useModal from "../../utils/context/use-modal";

interface Complaint {
  id: string;
  accountNumber: string;
  customerName: string;
  submissionDate: string;
  category: string;
  type: "Pending" | "Treated";
}

const ITEMS_PER_PAGE = 10;

const AdvancedCardsTable: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<Complaint["type"] | "All">(
    "Pending"
  );
  const [sortByDate, setSortByDate] = useState<"asc" | "desc" | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const allCards: Complaint[] = useMemo(() => {
    const data: Complaint[] = [];
    const types: Complaint["type"][] = ["Pending", "Treated"];
    const now = new Date();

    for (let i = 1; i <= 50; i++) {
      const type = types[Math.floor(Math.random() * types.length)];

      const randomDays = Math.floor(Math.random() * 365);
      const issueDate = new Date(
        now.getTime() - randomDays * 24 * 60 * 60 * 1000
      );
      const formattedDate = issueDate
        .toLocaleString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
        .replace(",", "");

      data.push({
        id: `card-${i}`,
        customerName: `Nazeer Ajibola ${String.fromCharCode(
          65 + Math.floor(Math.random() * 26)
        )}`,
        submissionDate: formattedDate,
        category: `Card Dispute`,
        accountNumber: `1234-5678-9012-${String(
          Math.floor(Math.random() * 10000)
        ).padStart(4, "0")}`,
        type: type,
      });
    }
    return data;
  }, []);

  // --- Filtered and Sorted Cards ---
  const filteredAndSortedCards = useMemo(() => {
    let result = [...allCards];

    if (searchText) {
      const lowercasedSearchText = searchText.toLowerCase();
      result = result.filter(
        (card) =>
          card.accountNumber.toLowerCase().includes(lowercasedSearchText) ||
          card.customerName.toLowerCase().includes(lowercasedSearchText) ||
          card.category.toLowerCase().includes(lowercasedSearchText)
      );
    }

    if (activeFilter !== "All") {
      result = result.filter((card) => card.type === activeFilter);
    }

    if (sortByDate) {
      result.sort((a, b) => {
        const dateA = new Date(a.submissionDate);
        const dateB = new Date(b.submissionDate);

        if (sortByDate === "asc") {
          return dateA.getTime() - dateB.getTime();
        } else {
          return dateB.getTime() - dateA.getTime();
        }
      });
    }

    return result;
  }, [allCards, searchText, activeFilter, sortByDate]);

  // --- Pagination Logic ---
  const totalPages = Math.ceil(filteredAndSortedCards.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCards = filteredAndSortedCards.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // --- Handlers ---
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterClick = (filterType: Complaint["type"] | "All") => {
    setActiveFilter(filterType);
    setCurrentPage(1);
  };

  const handleSortByDate = () => {
    setSortByDate((prevSort) => {
      if (prevSort === "asc") return "desc";
      if (prevSort === "desc") return null;
      return "asc";
    });
    setCurrentPage(1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // --- Table Headings ---
  const tableHeadings = [
    { label: "Account Number", alignment: "justify-start" },
    { label: "Customer Name", alignment: "justify-center" },
    {
      label: "Submission date",
      alignment: "justify-center",
      sortable: true,
    },
    { label: "Category", alignment: "justify-center" },
  ];

  // --- Filter Handler ---

  const { setIsModalOpen, setIsResolveFilterModalOpen } = useModal();

  const handleFilter = () => {
    setIsModalOpen(true);
    setIsResolveFilterModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Top Navigation / Filter Buttons */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
        <div className="flex border border-gray-300 rounded-lg">
          {["Pending", "Treated"].map((type, index) => (
            <button
              key={type}
              onClick={() => handleFilterClick(type as Complaint["type"])}
              className={`py-2 flex items-center gap-2 border border-gray-300 px-4 text-sm font-medium transition-colors duration-200
                ${
                  activeFilter === type
                    ? "bg-[#F9FAFB] text-[#1D2939]"
                    : "bg-white text-[#344054] hover:bg-gray-300"
                }
                
                ${index === 0 ? "rounded-l-lg" : ""}
                ${index === 3 ? "rounded-r-lg" : ""}`}
            >
              {activeFilter === type && <DotIcon />}
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Search and Filter Row */}
      <div className="flex items-center justify-between bg-[#F9FAFB] border border-[#EAECF0] p-2 rounded-lg">
        <div className=" cursor-pointer w-[25%] h-8 border border-gray-300 bg-white rounded-lg py-2 px-3 flex items-center gap-2">
          <SearchIcon />
          <input
            type="search"
            name="search"
            placeholder="Search complaint"
            value={searchText}
            onChange={handleSearchChange}
            className="w-full h-full outline-none bg-transparent text-xs text-[#344054] placeholder:text-[#344054]"
          />
        </div>

        <div className="flex space-x-2">
          {/* Date Picker Placeholder */}
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-gray-700">
            <span className="mr-2">
              <CalendarIcon />
            </span>
            Date
          </button>
          <button
            className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-gray-700"
            onClick={handleFilter}
          >
            <span className="mr-2">
              <FilterIcon />
            </span>
            Filter
          </button>
        </div>
      </div>

      {/* Main Table Section */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                {tableHeadings.map((heading, index) => (
                  <th
                    key={index}
                    className={`py-3 px-4 font-medium text-xs text-[#475467] bg-[#F9FAFB] border border-[#EAECF0] 
                      ${
                        heading.sortable
                          ? "cursor-pointer hover:bg-gray-50"
                          : ""
                      }`}
                    onClick={heading.sortable ? handleSortByDate : undefined}
                  >
                    <div className={`flex items-center ${heading.alignment}`}>
                      {heading.label}
                      {heading.sortable && (
                        <span className="ml-2 text-gray-400">
                          {sortByDate === "asc" && "▲"}
                          {sortByDate === "desc" && "▼"}
                          {sortByDate === null && "↕"}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentCards.length > 0 ? (
                currentCards.map((card) => (
                  <tr key={card.id} className="hover:bg-gray-50 text-[10px]">
                    <td className="py-3 px-4 border border-[#EAECF0] text-left">
                      {card.accountNumber}
                    </td>
                    <td className="py-3 px-4 border border-[#EAECF0] text-center">
                      {card.customerName}
                    </td>
                    <td className="py-3 px-4 border border-[#EAECF0] text-center">
                      {card.submissionDate}
                    </td>
                    <td className="py-3 px-4 border border-[#EAECF0] text-center">
                      {card.category}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={tableHeadings.length}
                    className="py-8 text-center text-gray-500"
                  >
                    No complaints found matching your criteria.
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
