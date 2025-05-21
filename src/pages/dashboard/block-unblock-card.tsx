import { Header } from "../../components";
import React, { useState, useMemo } from "react";
import type { ChangeEvent } from "react";

const BlockUnblockCard = () => {
  return (
    <main className="">
      <Header
        title="Block/Unblock Card"
        description="Attend to card block and unblock requests here."
      />
      <AvailableCardsTable />
    </main>
  );
};

export default BlockUnblockCard;

interface Card {
  id: string;
  maskedPan: string;
  dateIssued: string;
  expiry: string;
  batch: string;
  isBlocked: boolean;
}

const ITEMS_PER_PAGE = 3;

const AvailableCardsTable: React.FC = () => {
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [cards, setCards] = useState<Card[]>([
    {
      id: "1",
      maskedPan: "506012******6382",
      dateIssued: "11/14/2024 10:27:43",
      expiry: "32 months",
      batch: "847264905",
      isBlocked: true,
    },
    {
      id: "2",
      maskedPan: "506012******6382",
      dateIssued: "11/14/2024 10:27:43",
      expiry: "32 months",
      batch: "847264905",
      isBlocked: true,
    },
    {
      id: "3",
      maskedPan: "506012******6382",
      dateIssued: "11/14/2024 10:27:43",
      expiry: "32 months",
      batch: "847264905",
      isBlocked: false,
    },
    {
      id: "4",
      maskedPan: "411122******1234",
      dateIssued: "11/15/2024 09:00:00",
      expiry: "24 months",
      batch: "987654321",
      isBlocked: false,
    },
    {
      id: "5",
      maskedPan: "506012******6382",
      dateIssued: "11/16/2024 11:30:00",
      expiry: "30 months",
      batch: "123456789",
      isBlocked: true,
    },
    {
      id: "6",
      maskedPan: "999988******7777",
      dateIssued: "11/17/2024 14:00:00",
      expiry: "18 months",
      batch: "555555555",
      isBlocked: false,
    },
  ]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredCards = useMemo(() => {
    if (!accountNumber) {
      return [];
    }
    return cards.filter((card) => card.maskedPan.includes(accountNumber));
  }, [accountNumber, cards]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCards = filteredCards.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleAccountNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAccountNumber(e.target.value);
    setCurrentPage(1);
  };

  const handleToggleBlockStatus = (cardId: string) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, isBlocked: !card.isBlocked } : card
      )
    );
    console.log(`Toggled block status for card ID: ${cardId}`);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const tableHeadings = [
    { label: "Masked PAN", alignment: "text-center" },
    { label: "Date Issued", alignment: "text-center" },
    { label: "Expiry", alignment: "text-center" },
    { label: "Batch", alignment: "text-center" },
    { label: "Block Status", alignment: "text-center" },
  ];

  return (
    <div className="mx-auto mt-[10px] min-h-screen">
      <div className="mb-8">
        <label
          htmlFor="accountNumber"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Account Number*
        </label>
        <input
          type="text"
          id="accountNumber"
          value={accountNumber}
          onChange={handleAccountNumberChange}
          placeholder="0123456789"
          className=" border border-gray-300 bg-white rounded w-1/3 py-2 px-3 text-[#101828] text-base leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {accountNumber && filteredCards.length > 0 && (
        <div className="rounded-lg ">
          <h2 className="text-sm font-medium text-[#344054] bg-[#F9FAFB] p-4 rounded-t-lg">
            Available Cards
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white table-auto border-separate border-spacing-y-[2px]">
              <thead>
                <tr>
                  {tableHeadings.map((heading, index) => (
                    <th
                      key={index}
                      className={`py-3 px-4 font-medium text-xs text-[#475467] border border-gray-200 bg-[#F9FAFB] ${heading.alignment}`}
                    >
                      {heading.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentCards.map((card) => (
                  <tr key={card.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border border-[#EAECF0] text-center text-[10px] text-[#475467]">
                      {card.maskedPan}
                    </td>
                    <td className="py-3 px-4 border border-[#EAECF0] text-center text-[10px] text-[#475467]">
                      {card.dateIssued}
                    </td>
                    <td className="py-3 px-4 border border-[#EAECF0] text-center text-[10px] text-[#475467]">
                      {card.expiry}
                    </td>
                    <td className="py-3 px-4 border border-[#EAECF0] text-center text-[10px] text-[#475467]">
                      {card.batch}
                    </td>
                    <td className="py-3 px-4 border border-[#EAECF0] text-center text-[10px] text-[#475467]">
                      <label
                        htmlFor={`toggle-${card.id}`}
                        className="flex items-center cursor-pointer justify-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id={`toggle-${card.id}`}
                            className="sr-only"
                            checked={card.isBlocked}
                            onChange={() => handleToggleBlockStatus(card.id)}
                          />
                          <div
                            className={`block w-10 h-6 rounded-full ${
                              card.isBlocked ? "bg-[#007129]" : "bg-[#F2F4F7]"
                            }`}
                          ></div>
                          <div
                            className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ease-in-out ${
                              card.isBlocked
                                ? "translate-x-full"
                                : "translate-x-0"
                            }`}
                          ></div>
                        </div>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center text-sm text-[#344054] bg-white border border-[#EAECF0] p-4 rounded-b-lg font-medium">
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={`py-2 px-4 border rounded-md ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white hover:bg-gray-100 text-gray-700 border-gray-300"
                }`}
              >
                Previous
              </button>
              <button
                onClick={goToNextPage}
                disabled={
                  currentPage === totalPages || filteredCards.length === 0
                }
                className={`py-2 px-4 border rounded-md ${
                  currentPage === totalPages || filteredCards.length === 0
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white hover:bg-gray-100 text-gray-700 border-gray-300"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {accountNumber && filteredCards.length === 0 && (
        <div className="bg-white shadow-md rounded-lg p-6 text-center text-gray-600">
          No cards found matching the account number.
        </div>
      )}
    </div>
  );
};
