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
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
