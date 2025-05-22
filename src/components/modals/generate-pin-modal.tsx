import {
  CloseIcon,
  EyeIcon,
  GeneratePinModalIcon,
  MailIcon,
  SmsIcon,
} from "../../assets/icons";
import useModal from "../../utils/context/use-modal";

interface GeneratePinModalProps {
  title: string;
  instructions: string;
}

const GeneratePinModal = ({ title, instructions }: GeneratePinModalProps) => {
  const {
    setIsModalOpen,
    setIsGeneratePinModalOpen,
    setIsReissuePinModalOpen,
    setIsGenerateShowPinModalOpen,
    setIsReissueShowPinModalOpen,
    setIsGenerateSendSmsModalOpen,
    setIsReissueSendSmsModalOpen,
    setIsGenerateSendEmailModalOpen,
    setIsReissueSendEmailModalOpen,
  } = useModal();

  const handleClose = () => {
    setIsModalOpen(false);
    setIsGeneratePinModalOpen(false);
    setIsReissuePinModalOpen(false);
  };

  const handleGenerateShowPinModal = () => {
    handleClose();
    setIsGenerateShowPinModalOpen(true);
    setIsModalOpen(true);
  };

  const handleReissueShowPinModal = () => {
    handleClose();
    setIsReissueShowPinModalOpen(true);
    setIsModalOpen(true);
  };

  const handleShowPin = () => {
    if (title === "Generate Pin") {
      handleGenerateShowPinModal();
    } else {
      handleReissueShowPinModal();
    }
  };

  const handleGenerateSendSmsModal = () => {
    handleClose();
    setIsGenerateSendSmsModalOpen(true);
    setIsModalOpen(true);
  };

  const handleReissueSendSmsModal = () => {
    handleClose();
    setIsReissueSendSmsModalOpen(true);
    setIsModalOpen(true);
  };

  const handleSendSms = () => {
    if (title === "Generate Pin") {
      handleGenerateSendSmsModal();
    } else {
      handleReissueSendSmsModal();
    }
  };

  const handleGenerateSendEmailModal = () => {
    handleClose();
    setIsGenerateSendEmailModalOpen(true);
    setIsModalOpen(true);
  };

  const handleReissueSendEmailModal = () => {
    handleClose();
    setIsReissueSendEmailModalOpen(true);
    setIsModalOpen(true);
  };

  const handleSendEmail = () => {
    if (title === "Generate Pin") {
      handleGenerateSendEmailModal();
    } else {
      handleReissueSendEmailModal();
    }
  };

  const actionButtons = [
    {
      label: "Show Pin",
      icon: <EyeIcon />,
      action: handleShowPin,
    },
    {
      label: "Send SMS",
      icon: <SmsIcon />,
      action: handleSendSms,
    },
    {
      label: "Send Email",
      icon: <MailIcon />,
      action: handleSendEmail,
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

        <div className="pb-4 border-b border-gray-300 flex justify-between items-center">
          {actionButtons.map((button, index) => (
            <button
              key={index}
              onClick={button.action}
              className="flex items-center gap-2 border border-gray-300 cursor-pointer bg-white rounded-md py-2 px-4 mb-2"
            >
              <span className="">{button.icon}</span>
              <span>{button.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneratePinModal;
