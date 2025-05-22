import { DeleteIcon, EditIcon } from "../../assets/icons";
import { Header, SearchRow } from "../../components";
import useModal from "../../utils/context/use-modal";

const Branches = () => {
  const { setIsAddBranchModalOpen, setIsModalOpen } = useModal();

  const handleAddBranchClick = () => {
    setIsAddBranchModalOpen(true);
    setIsModalOpen(true);
  };

  return (
    <main className="">
      <Header
        title="Branches"
        description="Add branches, view branches and edit branches."
      />
      <SearchRow
        placeholderText="Search branch"
        blueButtonLabel="Add Branch"
        onBlueButtonClick={handleAddBranchClick}
      />
      <Table />
    </main>
  );
};

export default Branches;

interface TableRowData {
  name: string;
  code: string;
  address: string;
  zone: string;
  dateAdded: string;
}

const Table: React.FC = () => {
  const tableHeadings = [
    { label: "Name", alignment: "text-left" },
    { label: "Code", alignment: "text-center" },
    { label: "Address", alignment: "text-center" },
    { label: "Zone", alignment: "text-center" },
    { label: "Date Added", alignment: "text-center" },
    { label: "Action", alignment: "text-center" },
  ];

  const tableData: TableRowData[] = [
    {
      name: "Head Office",
      code: "202",
      address: "Lekki",
      zone: "Lagos",
      dateAdded: "10/18/2024 14:39:58",
    },
    {
      name: "Head Office",
      code: "202",
      address: "Lekki",
      zone: "Lagos",
      dateAdded: "10/18/2024 14:39:58",
    },
    {
      name: "Head Office",
      code: "202",
      address: "Lekki",
      zone: "Lagos",
      dateAdded: "10/18/2024 14:39:58",
    },
  ];

  return (
    <div className="overflow-x-auto mt-[10px] border border-[#EAECF0]">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            {tableHeadings.map((heading, index) => (
              <th
                key={index}
                className={`py-3 px-4  font-medium text-xs bg-[#F9FAFB] text-[#475467] border-b border-gray-200 ${heading.alignment}`}
              >
                {heading.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-white hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 text-[10px] text-[#475467] text-left">
                {row.name}
              </td>
              <td className="py-3 px-4 border-b border-gray-200 text-[10px] text-[#475467] text-center">
                {row.code}
              </td>
              <td className="py-3 px-4 border-b border-gray-200 text-[10px] text-[#475467] text-center">
                {row.address}
              </td>
              <td className="py-3 px-4 border-b border-gray-200 text-[10px] text-[#475467] text-center">
                {row.zone}
              </td>
              <td className="py-3 px-4 border-b border-gray-200 text-[10px] text-[#475467] text-center">
                {row.dateAdded}
              </td>
              <td className="py-3 px-4 border-b border-gray-200 text-[10px] text-[#475467] text-center">
                <div className="flex items-center justify-center space-x-2">
                  <span className=" cursor-pointer">
                    <DeleteIcon />
                  </span>
                  <span className=" cursor-pointer">
                    <EditIcon />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
