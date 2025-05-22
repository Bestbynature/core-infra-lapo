import React from "react";
import { ChevronRight } from "../assets/icons";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  required?: boolean;
  placeholder?: string;
}

const RHFSelect: React.FC<SelectProps> = ({
  id,
  label,
  value,
  onChange,
  options,
  required = false,
  placeholder = "Select an option",
}) => {
  return (
    <div className="mb-4 relative ">
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
        {required && <span className="text-[#344054]">*</span>}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className="shadow  appearance-none border bg-white border-gray-300 rounded w-full py-[10px] px-[14px] text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <span className="absolute rotate-90 right-3 top-[70%] transform -translate-y-[50%] pointer-events-none">
        <ChevronRight />
      </span>
    </div>
  );
};

export default RHFSelect;
