import { useState } from "react";
import { CloseIcon, FilterIcon } from "../../assets/icons";
import useModal from "../../utils/context/use-modal";
import RHFInput from "../rhf-input";
import RHFSelect from "../rhf-select";

interface GeneratePinModalProps {
  title: string;
  instructions: string;
}

const ResolveFilterModal = ({ title, instructions }: GeneratePinModalProps) => {
  const [filterData, setFilterData] = useState({
    category: "",
    accountNumber: "",
    customerName: "",
  });

  const { setIsModalOpen, setIsResolveFilterModalOpen } = useModal();

  const handleClose = () => {
    setIsModalOpen(false);
    setIsResolveFilterModalOpen(false);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl w-[500px] max-w-xl p-6 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
        >
          <CloseIcon />
        </button>

        <div className="flex items-center mb-6 border-b border-[#EAECF0] pb-4">
          <div className="bg-white p-3 rounded-[10px] border border-[#EAECF0] mr-4">
            <FilterIcon outlineColor="#344054" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-500 text-sm">{instructions}</p>
          </div>
        </div>

        <div className="pb-4 border-b border-gray-300 flex flex-col gap-2 ">
          <RHFSelect
            label="Category"
            id="category"
            placeholder="Select category from dropdown"
            options={[
              { value: "complaint", label: "Complaint" },
              { value: "feedback", label: "Feedback" },
              { value: "inquiry", label: "Inquiry" },
            ]}
            onChange={(e) =>
              setFilterData({ ...filterData, category: e.target.value })
            }
            value={filterData.category}
          />

          <RHFInput
            id="accountNumber"
            type="text"
            label="Account Number"
            placeholder="Enter account number"
            onChange={(e) =>
              setFilterData({ ...filterData, accountNumber: e.target.value })
            }
            value={filterData.accountNumber}
          />

          <RHFInput
            id="customerName"
            type="text"
            label="Customer Name"
            placeholder="Enter customer name"
            onChange={(e) =>
              setFilterData({ ...filterData, customerName: e.target.value })
            }
            value={filterData.customerName}
          />
          <button
            onClick={handleClose}
            className="text-base font-bold text-white bg-[#014DAF] py-2 px-4 rounded-lg"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResolveFilterModal;
{
  /*
   */
}
