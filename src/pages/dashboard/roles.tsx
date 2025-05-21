import { DeleteIcon, EditIcon } from "../../assets/icons";
import { Header, SearchRow } from "../../components";

const Roles = () => {
  return (
    <div className="">
      <Header
        title="Roles"
        description="Manage your roles, create roles, view roles and edit roles. Select privileges and set account permissions here."
      />
      <SearchRow placeholderText="Search role" blueButtonLabel="Create Role" />
      <Table />
    </div>
  );
};

export default Roles;

interface TableRowData {
  name: string;
  dateAdded: string;
}

const Table: React.FC = () => {
  const tableHeadings = [
    { label: "Name", alignment: "text-left" },
    { label: "Date Created", alignment: "text-center" },
    { label: "Action", alignment: "text-center" },
  ];

  const tableData: TableRowData[] = [
    {
      name: "Admin",
      dateAdded: "10/18/2024 14:39:58",
    },
    {
      name: "Admin",
      dateAdded: "10/18/2024 14:39:58",
    },
    {
      name: "Admin",
      dateAdded: "10/18/2024 14:39:58",
    },
    {
      name: "Admin",
      dateAdded: "10/18/2024 14:39:58",
    },
    {
      name: "Admin",
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
              <td className="py-2 px-4 border-b border-gray-200 text-[10px] text-[#475467] text-left">
                {row.name}
              </td>

              <td className="py-2 px-4 border-b border-gray-200 text-[10px] text-[#475467] text-center">
                {row.dateAdded}
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
