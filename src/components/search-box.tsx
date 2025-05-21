import SearchIcon from "../assets/icons/search-icon";

interface SearchBoxProps {
  placeholderText: string;
}

const SearchBox = ({ placeholderText }: SearchBoxProps) => {
  return (
    <div className=" cursor-pointer flex-1 h-8 border border-gray-300 rounded-full py-2 px-3 flex items-center gap-2">
      <SearchIcon />
      <input
        type="search"
        name="search"
        placeholder={placeholderText}
        className="w-full h-full outline-none bg-transparent text-xs text-[#344054] placeholder:text-[#344054]"
      />
    </div>
  );
};

export default SearchBox;
