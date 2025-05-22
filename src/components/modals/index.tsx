import { useEffect } from "react";
import ReactDOM from "react-dom";
import useModal from "../../utils/context/use-modal";
import AddBranchModal from "./add-branch-modal";
import CSVUploadModal from "./csv-upload-modal";
import AddCardSchemeModal from "./add-card-scheme-modal";
import CreateUserModal from "./create-user-modal";
import AddFeeModal from "./add-fee-modal";

const ModalBox = () => {
  const {
    isAddBranchModalOpen,
    isCSVUploadModalOpen,
    isAddCardSchemeModalOpen,
    isCreateUserModalOpen,
    isAddFeeModalOpen,
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
