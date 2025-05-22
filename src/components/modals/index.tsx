import { useEffect } from "react";
import ReactDOM from "react-dom";
import useModal from "../../utils/context/use-modal";
import AddBranchModal from "./add-branch-modal";
import CSVUploadModal from "./csv-upload-modal";
import AddCardSchemeModal from "./add-card-scheme-modal";
import CreateUserModal from "./create-user-modal";
import AddFeeModal from "./add-fee-modal";
import ProDownloadSuccessModal from "./pro-download-success-modal";
import SendToDispatchModal from "./send-to-dispatch-modal";
import GeneratePinModal from "./generate-pin-modal";
import GenerateShowPinModal from "./generate-show-pin-modal";
import GenerateSendSmsModal from "./generate-send-sms-modal";
import GenerateSendEmailModal from "./generate-send-email-modal";

const ModalBox = () => {
  const {
    isAddBranchModalOpen,
    isCSVUploadModalOpen,
    isAddCardSchemeModalOpen,
    isCreateUserModalOpen,
    isAddFeeModalOpen,
    isProDownloadSuccessModalOpen,
    isSendToDispatchModalOpen,
    isGeneratePinModalOpen,
    isReissuePinModalOpen,
    isGenerateShowPinModalOpen,
    isReissueShowPinModalOpen,
    isGenerateSendSmsModalOpen,
    isReissueSendSmsModalOpen,
    isGenerateSendEmailModalOpen,
    isReissueSendEmailModalOpen,
  } = useModal();

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <ModalLayout>
      {isAddBranchModalOpen && <AddBranchModal />}
      {isCSVUploadModalOpen && <CSVUploadModal />}
      {isAddCardSchemeModalOpen && <AddCardSchemeModal />}
      {isCreateUserModalOpen && <CreateUserModal />}
      {isAddFeeModalOpen && <AddFeeModal />}
      {isProDownloadSuccessModalOpen && <ProDownloadSuccessModal />}
      {isSendToDispatchModalOpen && <SendToDispatchModal />}
      {isGeneratePinModalOpen && (
        <GeneratePinModal
          title="Generate Pin"
          instructions="Select an option"
        />
      )}
      {isReissuePinModalOpen && (
        <GeneratePinModal title="Reissue Pin" instructions="Select an option" />
      )}
      {isGenerateShowPinModalOpen && (
        <GenerateShowPinModal title="Generate Pin" instructions="Show Pin" />
      )}
      {isReissueShowPinModalOpen && (
        <GenerateShowPinModal title="Reissue Pin" instructions="Show Pin" />
      )}
      {isGenerateSendSmsModalOpen && (
        <GenerateSendSmsModal title="Generate Pin" instructions="Send SMS" />
      )}
      {isReissueSendSmsModalOpen && (
        <GenerateSendSmsModal title="Reissue Pin" instructions="Send SMS" />
      )}
      {isGenerateSendEmailModalOpen && (
        <GenerateSendEmailModal
          title="Generate Pin"
          instructions="Send Email"
        />
      )}
      {isReissueSendEmailModalOpen && (
        <GenerateSendEmailModal title="Reissue Pin" instructions="Send Email" />
      )}
    </ModalLayout>,
    modalRoot
  );
};

export default ModalBox;

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const ModalLayout: React.FC<LayoutWrapperProps> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-[#333951]/70 backdrop-blur-sm z-[9999] overflow-y-auto py-8 px-6">
      <div className="min-h-full flex items-start justify-center">
        {children}
      </div>
    </div>
  );
};
