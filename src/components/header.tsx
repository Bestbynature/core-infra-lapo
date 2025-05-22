import { useLocation } from "react-router-dom";
import { UploadIcon } from "../assets/icons";
import WhiteButton from "./white-button";
import useModal from "../utils/context/use-modal";

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  const location = useLocation();

  const isBranches = location.pathname.includes("branches");

  const { setIsModalOpen, setIsCSVUploadModalOpen } = useModal();

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsCSVUploadModalOpen(true);
  };

  return (
    <div className="flex items-end pb-[10px] ">
      <div className="flex-1 flex flex-col gap-1">
        <h1 className="text-lg font-bold text-[#101828]">{title}</h1>
        <p className="text-[#475467] text-sm">{description}</p>
      </div>
      {isBranches && (
        <div>
          <WhiteButton
            icon={<UploadIcon />}
            label="Upload File"
            onClick={handleOpenModal}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
