import { useState } from "react";
import { Header, RHFInput } from "../../components";

const CreateRole = () => {
  const [roleName, setRoleName] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoleName(e.target.value);
  };
  return (
    <main className="">
      <Header
        title="Create Role"
        description="Set role name, select privileges and permissions."
      />
      <div className="w-[40%]">
        <RHFInput
          id="role-name"
          label="Role Name"
          placeholder="Enter role name"
          onChange={handleInputChange}
          value={roleName}
          required={true}
        />
      </div>
      <RoleTable />
    </main>
  );
};

export default CreateRole;

type Permission = "Full" | "Create" | "Edit" | "View" | "Delete";

interface RolePermission {
  menuName: string;
  permissions: Permission[];
}

const rolePermissions: RolePermission[] = [
  {
    menuName: "Branch",
    permissions: ["Full", "Create", "Edit", "View", "Delete"],
  },
  {
    menuName: "User",
    permissions: ["Full", "Create", "Edit", "View", "Delete"],
  },
  {
    menuName: "Role",
    permissions: ["Full", "Create", "Edit", "View", "Delete"],
  },
  {
    menuName: "Cards",
    permissions: ["Full", "Create", "Edit", "View", "Delete"],
  },
  {
    menuName: "Card Request",
    permissions: ["Full", "Create", "Edit", "View", "Delete"],
  },
  {
    menuName: "Authorization List",
    permissions: ["Full", "Create", "Edit", "View", "Delete"],
  },
  {
    menuName: "Authorization Queue",
    permissions: ["Full", "Create", "Edit", "View", "Delete"],
  },
  {
    menuName: "Activity",
    permissions: ["Full", "Create", "Edit", "View", "Delete"],
  },
];

const allPermissions: Permission[] = [
  "Full",
  "Create",
  "Edit",
  "View",
  "Delete",
];

const RoleTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-[#EAECF0]">
        <thead>
          <tr className="bg-gray-50 text-xs font-medium text-[#475467]">
            <th className="text-left py-2 px-4 border border-[#EAECF0]">
              Menu Name
            </th>
            {allPermissions.map((perm) => (
              <th
                key={perm}
                className="text-center py-2 px-4 border border-[#EAECF0]"
              >
                {perm}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rolePermissions.map((item) => (
            <tr
              key={item.menuName}
              className="border-t border-[#EAECF0] bg-white text-[10px] text-[#475467]"
            >
              <td className="text-left py-2 px-4 border border-[#EAECF0]">
                {item.menuName}
              </td>
              {allPermissions.map((perm) => (
                <td
                  key={perm}
                  className="text-center py-2 px-4 border border-[#EAECF0]"
                >
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-2xl border border-red-700"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6">
        <button className="bg-[#014DAF] text-white font-semibold px-[18px] py-[10px] rounded">
          Create Role
        </button>
      </div>
    </div>
  );
};
