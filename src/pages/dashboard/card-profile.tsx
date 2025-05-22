import { useNavigate } from "react-router-dom";
import { DeleteIcon, EditIcon } from "../../assets/icons";
import { Header, SearchRow } from "../../components";
import { routePaths } from "../../routes/routes-config";

const CardProfile = () => {
  const navigate = useNavigate();

  const handleAddProfile = () => {
    navigate(routePaths.createProfile);
  };

  return (
    <main className="">
      <Header
        title="Card Profile"
        description="Create, view and edit card profiles here."
      />
      <SearchRow
        placeholderText="Search by card name"
        blueButtonLabel="Add Profile"
        onBlueButtonClick={handleAddProfile}
      />
      <Table />
    </main>
  );
};

export default CardProfile;

interface TableRowData {
  cardName: string;
  currency: string;
  expiration: string;
  binPrefix: string;
  dateAdded: string;
}

const Table: React.FC = () => {
  const tableHeadings = [
    { label: "Card Name", alignment: "text-left" },
    { label: "Currency", alignment: "text-center" },
    { label: "Expiration", alignment: "text-center" },
    { label: "BIN Prefix", alignment: "text-center" },
    { label: "Date Added", alignment: "text-center" },
    { label: "Action", alignment: "text-center" },
  ];

  const tableData: TableRowData[] = [
    {
      cardName: "Verve-1",
      currency: "NGN",
      expiration: "40 months",
      binPrefix: "50611234",
      dateAdded: "10/18/2024 14:39:58",
    },
    {
      cardName: "Verve-1",
      currency: "NGN",
      expiration: "40 months",
      binPrefix: "50611234",
      dateAdded: "10/18/2024 14:39:58",
    },
    {
      cardName: "Verve-1",
      currency: "NGN",
      expiration: "40 months",
      binPrefix: "50611234",
      dateAdded: "10/18/2024 14:39:58",
    },
    {
      cardName: "Verve-1",
      currency: "NGN",
      expiration: "40 months",
      binPrefix: "50611234  ",
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
                {row.cardName}
              </td>
              <td className="py-3 px-4 border-b border-gray-200 text-[10px] text-[#475467] text-center">
                {row.currency}
              </td>
              <td className="py-3 px-4 border-b border-gray-200 text-[10px] text-[#475467] text-center">
                {row.expiration}
              </td>
              <td className="py-3 px-4 border-b border-gray-200 text-[10px] text-[#475467] text-center">
                {row.binPrefix}
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
