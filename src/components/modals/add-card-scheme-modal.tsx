import React, { useState } from "react";
import RHFInput from "../rhf-input";
import { CloseIcon, ReviewCardIcon } from "../../assets/icons";
import useModal from "../../utils/context/use-modal";

interface BranchFormData {
  schemeName: string;
  panLength: number;
}

interface FormField {
  id: keyof BranchFormData;
  label: string;
  placeholder: string;
  type?: string;
  required: boolean;
}

const AddCardSchemeModal: React.FC = () => {
  const [formData, setFormData] = useState<BranchFormData>({
    schemeName: "",
    panLength: 0,
  });

  const formFields: FormField[] = [
    {
      id: "schemeName",
      label: "Scheme Name",
      placeholder: "Enter scheme name",
      required: true,
    },
    {
      id: "panLength",
      label: "PAN Length",
      placeholder: "Enter PAN length",
      type: "number",
      required: true,
    },
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
    alert("Scheme added! Check console for data.");
    setFormData({
      schemeName: "",
      panLength: 0,
    });
    setIsAddCardSchemeModalOpen(false);
    setIsModalOpen(false);
  };

  const { setIsAddCardSchemeModalOpen, setIsModalOpen } = useModal();

  const handleClose = () => {
    setIsAddCardSchemeModalOpen(false);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative">
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
      >
        <CloseIcon />
      </button>

      <div className="flex items-center mb-6 border-b border-[#EAECF0] pb-4">
        <div className="bg-white p-3 rounded-[10px] border border-[#EAECF0] mr-4">
          <ReviewCardIcon outlineColor="#344054" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Add Card Scheme
          </h2>
          <p className="text-gray-500 text-sm">
            Fill in scheme name and PAN length.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        {formFields.map((field) => (
          <RHFInput
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            value={String(formData[field.id])}
            onChange={handleChange}
            placeholder={field.placeholder}
            required={field.required}
          />
        ))}

        <hr className="border border-gray-300 " />

        <button
          type="submit"
          className="w-full bg-[#014DAF] text-white text-base font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          Add Scheme
        </button>
      </form>
    </div>
  );
};

export default AddCardSchemeModal;
