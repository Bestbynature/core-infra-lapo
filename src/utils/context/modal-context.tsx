import { createContext } from "react";

export interface ModalContextProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  isAddBranchModalOpen: boolean;
  setIsAddBranchModalOpen: (isOpen: boolean) => void;
  isCSVUploadModalOpen: boolean;
  setIsCSVUploadModalOpen: (isOpen: boolean) => void;
  isAddCardSchemeModalOpen: boolean;
  setIsAddCardSchemeModalOpen: (isOpen: boolean) => void;
  isCreateUserModalOpen: boolean;
  setIsCreateUserModalOpen: (isOpen: boolean) => void;
  isAddFeeModalOpen: boolean;
  setIsAddFeeModalOpen: (isOpen: boolean) => void;
  isProDownloadSuccessModalOpen: boolean;
  setIsProDownloadSuccessModalOpen: (isOpen: boolean) => void;
  isSendToDispatchModalOpen: boolean;
  setIsSendToDispatchModalOpen: (isOpen: boolean) => void;
  isGeneratePinModalOpen: boolean;
  setIsGeneratePinModalOpen: (isOpen: boolean) => void;
  isReissuePinModalOpen: boolean;
  setIsReissuePinModalOpen: (isOpen: boolean) => void;
  isGenerateShowPinModalOpen: boolean;
  setIsGenerateShowPinModalOpen: (isOpen: boolean) => void;
  isReissueShowPinModalOpen: boolean;
  setIsReissueShowPinModalOpen: (isOpen: boolean) => void;
  isGenerateSendSmsModalOpen: boolean;
  setIsGenerateSendSmsModalOpen: (isOpen: boolean) => void;
  isReissueSendSmsModalOpen: boolean;
  setIsReissueSendSmsModalOpen: (isOpen: boolean) => void;
  isGenerateSendEmailModalOpen: boolean;
  setIsGenerateSendEmailModalOpen: (isOpen: boolean) => void;
  isReissueSendEmailModalOpen: boolean;
  setIsReissueSendEmailModalOpen: (isOpen: boolean) => void;
  isResolveFilterModalOpen: boolean;
  setIsResolveFilterModalOpen: (isOpen: boolean) => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);
