import { useState, type ChangeEvent } from "react";
import { CloseIcon, GeneratePinModalIcon } from "../../assets/icons";
import useModal from "../../utils/context/use-modal";
import RHFInput from "../rhf-input";

interface GeneratePinModalProps {
  title: string;
  instructions: string;
}

const GenerateSendEmailModal = ({
  title,
  instructions,
}: GeneratePinModalProps) => {
  const [email, setEmail] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const {
    setIsModalOpen,
    setIsGenerateSendEmailModalOpen,
    setIsReissueSendEmailModalOpen,
  } = useModal();

  const handleClose = () => {
    setIsModalOpen(false);
    setIsGenerateSendEmailModalOpen(false);
    setIsReissueSendEmailModalOpen(false);
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
            <GeneratePinModalIcon outlineColor="#344054" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-500 text-sm">{instructions}</p>
          </div>
        </div>

        <div className="pb-4 border-b border-gray-300 flex flex-col gap-2 ">
          <RHFInput
            id="email"
            type="email"
            label="Email Address"
            placeholder="Enter email address"
            onChange={handleChange}
            value={email}
          />
          <button
            onClick={handleClose}
            className="text-base font-bold text-white bg-[#014DAF] py-2 px-4 rounded-lg"
          >
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateSendEmailModal;
{
  /*
   */
}
