import { useState } from "react";
import { ModalContext } from "./modal-context";

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddBranchModalOpen, setIsAddBranchModalOpen] = useState(false);
  const [isCSVUploadModalOpen, setIsCSVUploadModalOpen] = useState(false);
  const [isAddCardSchemeModalOpen, setIsAddCardSchemeModalOpen] =
    useState(false);
  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);
  const [isAddFeeModalOpen, setIsAddFeeModalOpen] = useState(false);
  const [isProDownloadSuccessModalOpen, setIsProDownloadSuccessModalOpen] =
    useState(false);

  const [isSendToDispatchModalOpen, setIsSendToDispatchModalOpen] =
    useState(false);

  const [isGeneratePinModalOpen, setIsGeneratePinModalOpen] = useState(false);

  const [isReissuePinModalOpen, setIsReissuePinModalOpen] = useState(false);

  const [isGenerateShowPinModalOpen, setIsGenerateShowPinModalOpen] =
    useState(false);

  const [isReissueShowPinModalOpen, setIsReissueShowPinModalOpen] =
    useState(false);

  const [isGenerateSendSmsModalOpen, setIsGenerateSendSmsModalOpen] =
    useState(false);

  const [isReissueSendSmsModalOpen, setIsReissueSendSmsModalOpen] =
    useState(false);

  const [isGenerateSendEmailModalOpen, setIsGenerateSendEmailModalOpen] =
    useState(false);

  const [isReissueSendEmailModalOpen, setIsReissueSendEmailModalOpen] =
    useState(false);

    const [isResolveFilterModalOpen, setIsResolveFilterModalOpen] =
    useState(false);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        isAddBranchModalOpen,
        setIsAddBranchModalOpen,
        isCSVUploadModalOpen,
        setIsCSVUploadModalOpen,
        isAddCardSchemeModalOpen,
        setIsAddCardSchemeModalOpen,
        isCreateUserModalOpen,
        setIsCreateUserModalOpen,
        isAddFeeModalOpen,
        setIsAddFeeModalOpen,
        isProDownloadSuccessModalOpen,
        setIsProDownloadSuccessModalOpen,
        isSendToDispatchModalOpen,
        setIsSendToDispatchModalOpen,
        isGeneratePinModalOpen,
        setIsGeneratePinModalOpen,
        isReissuePinModalOpen,
        setIsReissuePinModalOpen,
        isGenerateShowPinModalOpen,
        setIsGenerateShowPinModalOpen,
        isReissueShowPinModalOpen,
        setIsReissueShowPinModalOpen,
        isGenerateSendSmsModalOpen,
        setIsGenerateSendSmsModalOpen,
        isReissueSendSmsModalOpen,
        setIsReissueSendSmsModalOpen,
        isGenerateSendEmailModalOpen,
        setIsGenerateSendEmailModalOpen,
        isReissueSendEmailModalOpen,
        setIsReissueSendEmailModalOpen,
        isResolveFilterModalOpen,
        setIsResolveFilterModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
