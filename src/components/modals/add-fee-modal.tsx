import { CloseIcon, PlusInACircleIcon } from "../../assets/icons";
import useModal from "../../utils/context/use-modal";

const AddFeeModal = () => {
  const { setIsAddFeeModalOpen, setIsModalOpen } = useModal();

  const handleClose = () => {
    setIsAddFeeModalOpen(false);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative ">
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
      >
        <CloseIcon />
      </button>

      <div className="flex items-center mb-6">
        <div className="bg-white p-3 rounded-[10px] border border-[#EAECF0] mr-4">
          <PlusInACircleIcon outlineColor="#344054" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Add Fee</h2>
          <p className="text-gray-500 text-sm">Fill in fee details.</p>
        </div>
      </div>
      <hr className="border-b border-[#EAECF0] h-0.2" />

      <AddFeeForm handleClose={handleClose} />
    </div>
  );
};

export default AddFeeModal;

import { useState } from "react";
import RHFInput from "../rhf-input";
import { useForm } from "../../utils/context/use-form";

interface FeeFormData {
  feeName: string;
  value: number;
  currency: "NGN" | "USD" | "";
  feeFrequency: "One Off" | "Monthly" | "";
  feeImpact: "Issuance" | "Pin Reissue" | "";
  accountPad: "None" | "Branch Code Prefix" | "Branch Code Suffix" | "";
  account: string;
  time: string;
}

const AddFeeForm = ({ handleClose }: { handleClose: () => void }) => {
  const [feeName, setFeeName] = useState<string>("");
  const [value, setValue] = useState<number>(0);
  const [currency, setCurrency] = useState<"NGN" | "USD" | "">("NGN");
  const [feeFrequency, setFeeFrequency] = useState<"One Off" | "Monthly" | "">(
    ""
  );
  const [feeImpact, setFeeImpact] = useState<"Issuance" | "Pin Reissue" | "">(
    ""
  );
  const [accountPad, setAccountPad] = useState<
    "None" | "Branch Code Prefix" | "Branch Code Suffix" | ""
  >("None");
  const [account, setAccount] = useState<string>("");

  const { setFormData } = useForm();

  const handleSubmit = () => {
    const currentTime = new Date().toISOString();

    const formData: FeeFormData = {
      feeName,
      value,
      currency,
      feeFrequency,
      feeImpact,
      accountPad,
      account,
      time: currentTime,
    };

    setFormData([formData as unknown as Record<string, unknown>]);

    handleClose();
  };

  const radioLabelClass = "ml-2 text-sm text-gray-700";
  const radioGroupLabelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <form className="space-y-6 p-6 bg-white rounded-lg shadow-md">
      <RHFInput
        id="feeName"
        label="Fee Name"
        required
        value={feeName}
        onChange={(e) => setFeeName(e.target.value)}
      />

      <RHFInput
        id="value"
        label="Value"
        type="number"
        required
        value={value.toString()}
        onChange={(e) => setValue(parseFloat(e.target.value) || 0)}
      />

      <div>
        <span className={radioGroupLabelClass}>Currency</span>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="currency"
              value="NGN"
              checked={currency === "NGN"}
              onChange={() => setCurrency("NGN")}
              className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <span className={radioLabelClass}>NGN</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="currency"
              value="USD"
              checked={currency === "USD"}
              onChange={() => setCurrency("USD")}
              className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <span className={radioLabelClass}>USD</span>
          </label>
        </div>
      </div>

      <div>
        <span className={radioGroupLabelClass}>Fee Frequency</span>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="feeFrequency"
              value="One Off"
              checked={feeFrequency === "One Off"}
              onChange={() => setFeeFrequency("One Off")}
              className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <span className={radioLabelClass}>One Off</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="feeFrequency"
              value="Monthly"
              checked={feeFrequency === "Monthly"}
              onChange={() => setFeeFrequency("Monthly")}
              className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <span className={radioLabelClass}>Monthly</span>
          </label>
        </div>
      </div>

      <div>
        <span className={radioGroupLabelClass}>Fee Impact</span>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="feeImpact"
              value="Issuance"
              checked={feeImpact === "Issuance"}
              onChange={() => setFeeImpact("Issuance")}
              className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <span className={radioLabelClass}>Issuance</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="feeImpact"
              value="Pin Reissue"
              checked={feeImpact === "Pin Reissue"}
              onChange={() => setFeeImpact("Pin Reissue")}
              className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <span className={radioLabelClass}>Pin Reissue</span>
          </label>
        </div>
      </div>

      <div>
        <span className={radioGroupLabelClass}>Account Pad</span>
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="accountPad"
              value="None"
              checked={accountPad === "None"}
              onChange={() => setAccountPad("None")}
              className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <span className={radioLabelClass}>None</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="accountPad"
              value="Branch Code Prefix"
              checked={accountPad === "Branch Code Prefix"}
              onChange={() => setAccountPad("Branch Code Prefix")}
              className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <span className={radioLabelClass}>Branch Code Prefix</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="accountPad"
              value="Branch Code Suffix"
              checked={accountPad === "Branch Code Suffix"}
              onChange={() => setAccountPad("Branch Code Suffix")}
              className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <span className={radioLabelClass}>Branch Code Suffix</span>
          </label>
        </div>
      </div>

      <RHFInput
        id="account"
        label="Account"
        required
        value={account}
        onChange={(e) => setAccount(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        type="button"
        className="w-full px-4 py-2 text-sm font-medium text-white bg-[#014DAF] hover:bg-blue-700 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Fee
      </button>
    </form>
  );
};
