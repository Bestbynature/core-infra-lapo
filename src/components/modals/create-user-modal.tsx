import React, { useState } from "react";
import RHFInput from "../rhf-input";
import RHFSelect from "../rhf-select";
import { AddUserIcon, CloseIcon } from "../../assets/icons";
import useModal from "../../utils/context/use-modal";

interface UserFormData {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  accessLevel: string;
  branch: string;
  assignRole: string;
}

interface FormField {
  id: keyof UserFormData;
  label: string;
  placeholder: string;
  type?: string;
  required: boolean;
}

const CreateUserModal: React.FC = () => {
  const [formData, setFormData] = useState<UserFormData>({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    accessLevel: "",
    branch: "",
    assignRole: "",
  });

  const inputFields: FormField[] = [
    {
      id: "username",
      label: "Username",
      placeholder: "johndoe",
      required: true,
    },
    {
      id: "firstname",
      label: "First Name",
      placeholder: "John",
      required: true,
    },
    { id: "lastname", label: "Last Name", placeholder: "Doe", required: true },
    {
      id: "email",
      label: "Email",
      placeholder: "john@example.com",
      required: true,
    },
    {
      id: "password",
      label: "Password",
      placeholder: "********",
      type: "password",
      required: true,
    },
    {
      id: "phone",
      label: "Phone Number",
      placeholder: "+1234567890",
      required: true,
    },
  ];

  const selectFields = [
    {
      id: "accessLevel",
      label: "Access Level",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
    {
      id: "branch",
      label: "Branch",
      options: [
        { label: "Lagos", value: "lagos" },
        { label: "Abuja", value: "abuja" },
        { label: "Ilorin", value: "ilorin" },
      ],
    },
    {
      id: "assignRole",
      label: "Assign Role",
      options: [
        { label: "Manager", value: "manager" },
        { label: "Support", value: "support" },
        { label: "Developer", value: "developer" },
      ],
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted with values:", formData);
    alert("User added! Check console for data.");
    setFormData({
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      accessLevel: "",
      branch: "",
      assignRole: "",
    });
    setIsCreateUserModalOpen(false);
    setIsModalOpen(false);
  };

  const { setIsCreateUserModalOpen, setIsModalOpen } = useModal();

  const handleClose = () => {
    setIsCreateUserModalOpen(false);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative">
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
      >
        <CloseIcon />
      </button>

      <div className="flex items-center mb-6">
        <div className="bg-white p-3 rounded-[10px] border border-[#EAECF0] mr-4">
          <AddUserIcon />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Create User</h2>
          <p className="text-gray-500 text-sm">
            Fill in user details and assign role.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {inputFields.map((field) => (
          <RHFInput
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            value={formData[field.id as keyof UserFormData]}
            onChange={handleChange}
            placeholder={field.placeholder}
            required={field.required}
          />
        ))}

        {selectFields.map((field) => {
          const id = field.id as keyof UserFormData;
          return (
            <RHFSelect
              key={field.id}
              id={field.id}
              label={field.label}
              value={formData[id]}
              onChange={handleChange}
              options={field.options}
            />
          );
        })}

        <hr className="border border-gray-300 " />

        <button
          type="submit"
          className=" bg-[#014DAF] text-white text-base font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUserModal;
