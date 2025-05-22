import { DeleteIcon, EditIcon } from "../../assets/icons";
import { Header, SearchRow } from "../../components";
import useModal from "../../utils/context/use-modal";

const Users = () => {
  const { setIsModalOpen, setIsCreateUserModalOpen } = useModal();

  const handleCreateUserClick = () => {
    setIsCreateUserModalOpen(true);
    setIsModalOpen(true);
  };

  return (
    <div className="">
      <Header
        title="Users"
        description="Manage your users, create users, view and edit users. Assign roles to users here."
      />
      <SearchRow
        placeholderText="Search user"
        blueButtonLabel="Create User"
        onBlueButtonClick={handleCreateUserClick}
      />
      <Table />
    </div>
  );
};

export default Users;

interface TableRowData {
  username: string;
  phone: string;
  email: string;
  dateAdded: string;
}

const Table: React.FC = () => {
  const tableHeadings = [
    { label: "Username", alignment: "text-left" },
    { label: "Phone", alignment: "text-center" },
    { label: "Email", alignment: "text-center" },
    { label: "Date Created", alignment: "text-center" },
    { label: "Action", alignment: "text-center" },
  ];

  const tableData: TableRowData[] = [
    {
      username: "RootUser",
      phone: "09012345678",
      email: "rootuser@example.com",
      dateAdded: "10/18/2024 14:39:58",
    },
    {
      username: "Admin",
      phone: "09012345679",
      email: "admin@example.com",
      dateAdded: "10/18/2024 14:39:58",
    },
    {
      username: "Admin",
      phone: "09012345680",
      email: "admin@example.com",
      dateAdded: "10/18/2024 14:39:58",
    },
    {
      username: "Admin",
      phone: "09012345681",
      email: "admin@example.com",
      dateAdded: "10/18/2024 14:39:58",
    },
    {
      username: "Admin",
      phone: "09012345682",
      email: "admin@example.com",
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
                {row.username}
              </td>

              <td className="py-2 px-4 border-b border-gray-200 text-[10px] text-[#475467] text-center">
                {row.phone}
              </td>

              <td className="py-2 px-4 border-b border-gray-200 text-[10px] text-[#475467] text-center">
                {row.email}
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
