interface PaginationProps {
  currentPage: number;
  totalPages: number;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
}
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  goToNextPage,
  goToPreviousPage,
}) => {
  return (
    <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200">
      <span className="text-sm font-medium text-gray-600">
        Page {currentPage} of {totalPages === 0 ? 1 : totalPages}
      </span>
      <div className="flex space-x-2">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1 || totalPages === 0}
          className={`py-2 px-4 border rounded-md text-sm font-medium transition-colors duration-200
                ${
                  currentPage === 1 || totalPages === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white hover:bg-gray-100 text-gray-700 border-gray-300"
                }`}
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages || totalPages === 0}
          className={`py-2 px-4 border rounded-md text-sm font-medium transition-colors duration-200
                ${
                  currentPage === totalPages || totalPages === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white hover:bg-gray-100 text-gray-700 border-gray-300"
                }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
