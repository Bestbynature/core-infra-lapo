import { CheckmarkCircleIcon } from "../../assets/icons";
import useModal from "../../utils/context/use-modal";

const SendToDispatchModal = () => {
  const { setIsModalOpen, setIsSendToDispatchModalOpen } = useModal();

  const handleClose = () => {
    setIsModalOpen(false);
    setIsSendToDispatchModalOpen(false);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white rounded-2xl p-4 flex flex-col gap-4">
        <div className="border border-[#EAECF0] rounded-xl flex items-center justify-center p-3 w-fit">
          <CheckmarkCircleIcon />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-[#101828] text-lg font-medium">Successful</h2>
          <p className="text-sm text-[#475467]">
            Card batch successfully sent to dispatch.
          </p>
        </div>
        <div className="flex justify-start">
          <button
            className="bg-[#014DAF] text-white rounded-md px-4 py-2"
            onClick={handleClose}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendToDispatchModal;
