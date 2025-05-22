import React, { useState } from "react";
import RHFInput from "../rhf-input";
import { AddBranchIcon, CloseIcon } from "../../assets/icons";
import useModal from "../../utils/context/use-modal";

interface BranchFormData {
  name: string;
  code: string;
  address: string;
  zone: string;
  area: string;
}

interface FormField {
  id: keyof BranchFormData;
  label: string;
  placeholder: string;
  type?: string;
  required: boolean;
}

const AddBranchModal: React.FC = () => {
  const [formData, setFormData] = useState<BranchFormData>({
    name: "",
    code: "",
    address: "",
    zone: "",
    area: "",
  });

  const formFields: FormField[] = [
    { id: "name", label: "Name", placeholder: "Head Office", required: true },
    { id: "code", label: "Code", placeholder: "000", required: true },
    { id: "address", label: "Address", placeholder: "Lekki", required: true },
    { id: "zone", label: "Zone", placeholder: "LG", required: true },
    { id: "area", label: "Area", placeholder: "SW", required: true },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted with values:", formData);
    alert("Branch added! Check console for data.");
    setFormData({
      name: "",
      code: "",
      address: "",
      zone: "",
      area: "",
    });
    setIsAddBranchModalOpen(false);
    setIsModalOpen(false);
  };

  const { setIsAddBranchModalOpen, setIsModalOpen } = useModal();

  const handleClose = () => {
    setIsAddBranchModalOpen(false);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative">
      <button
        onClick={handleClose}
        className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
      >
        <CloseIcon />
      </button>

      <div className="flex items-center mb-6">
        <div className="bg-white p-3 rounded-[10px] border border-[#EAECF0] mr-4">
          <AddBranchIcon />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Add Branch</h2>
          <p className="text-gray-500 text-sm">Fill in branch details.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {formFields.map((field) => (
          <RHFInput
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            value={formData[field.id]}
            onChange={handleChange}
            placeholder={field.placeholder}
            required={field.required}
          />
        ))}

        <hr className="border border-gray-300 " />

        <button
          type="submit"
          className="w-fit bg-[#014DAF] text-white text-base font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          Add Branch
        </button>
      </form>
    </div>
  );
};

export default AddBranchModal;
