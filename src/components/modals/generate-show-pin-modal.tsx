import { CloseIcon, GeneratePinModalIcon } from "../../assets/icons";
import useModal from "../../utils/context/use-modal";

interface GeneratePinModalProps {
  title: string;
  instructions: string;
}

const GenerateShowPinModal = ({
  title,
  instructions,
}: GeneratePinModalProps) => {
  const {
    setIsModalOpen,
    setIsGenerateShowPinModalOpen,
    setIsReissueShowPinModalOpen,
  } = useModal();

  const handleClose = () => {
    setIsModalOpen(false);
    setIsGenerateShowPinModalOpen(false);
    setIsReissueShowPinModalOpen(false);
  };

  const actionButtons = [
    {
      label: "1",
      value: 1,
    },
    {
      label: "2",
      value: 2,
    },
    {
      label: "3",
      value: 3,
    },
    {
      label: "4",
      value: 4,
    },
  ];

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

        <div className="pb-4  border-b border-gray-300 flex justify-center items-center">
          <div className="w-[60%]">
            <h2 className="text-sm font-medium text-[#344054]">
              Generated Pin
            </h2>
            <div className=" flex gap-2 justify-between items-center ">
              {actionButtons.map((button, index) => (
                <span
                  key={index}
                  className="w-16 h-16 border-2 border-[#344054] cursor-pointer bg-white rounded-md p-4 mb-2 flex items-center justify-center"
                >
                  <span className="text-5xl text-[#344054]">
                    {button.label}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateShowPinModal;
{
  /*
   */
}
