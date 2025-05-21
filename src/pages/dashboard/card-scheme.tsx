import { DeleteIcon, EditIcon } from "../../assets/icons";
import { Header, SearchRow } from "../../components";

const CardScheme = () => {
  return (
    <div className="">
      <Header
        title="Card Scheme"
        description="Add, view and edit card schemes here."
      />
      <SearchRow
        placeholderText="Search by scheme name"
        blueButtonLabel="Add Scheme"
      />
      <Table />
    </div>
  );
};

export default CardScheme;

interface TableRowData {
  schemeName: string;
  PANlength: string;
}

const Table: React.FC = () => {
  const tableHeadings = [
    { label: "Scheme Name", alignment: "text-left" },
    { label: "PAN Length", alignment: "text-center" },
    { label: "Action", alignment: "text-center" },
  ];

  const tableData: TableRowData[] = [
    {
      schemeName: "Admin",
      PANlength: "10",
    },
    {
      schemeName: "Admin",
      PANlength: "10",
    },
    {
      schemeName: "Admin",
      PANlength: "10",
    },
    {
      schemeName: "Admin",
      PANlength: "10",
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
              <td className="py-2 px-4 border-b border-gray-200 text-[10px] text-[#475467] text-left">
                {row.schemeName}
              </td>

              <td className="py-2 px-4 border-b border-gray-200 text-[10px] text-[#475467] text-center">
                {row.PANlength}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-[10px] text-[#475467] text-center">
                <div className="flex items-center justify-center space-x-2">
                  <span className="cursor-pointer">
                    <DeleteIcon />
                  </span>
                  <span className="cursor-pointer">
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
