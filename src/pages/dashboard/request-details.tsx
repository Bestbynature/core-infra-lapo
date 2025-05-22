import { useState } from "react";
import {
  AcknowledgedIcon,
  DispatchIcon,
  DownloadForProductionIcon,
  ProgressIcon,
  ReadyIcon,
} from "../../assets/icons";
import { Header, RHFInput } from "../../components";
import { useForm } from "../../utils/context/use-form";
import useModal from "../../utils/context/use-modal";
import { hexToRGBA } from "../../utils/hex-to-rgba";

const RequestDetails = () => {
  const { cardRequests, setCardRequests, selectedCardId } = useForm();

  const {
    setIsModalOpen,
    setIsProDownloadSuccessModalOpen,
    setIsSendToDispatchModalOpen,
  } = useModal();

  const [selectedButton, setSelectedButton] = useState("");

  const handleProDownloadSuccessModalOpen = () => {
    setIsProDownloadSuccessModalOpen(true);
    setIsModalOpen(true);
  };

  const handleSendToDispatchModalOpen = () => {
    setIsModalOpen(true);
    setIsSendToDispatchModalOpen(true);
  };

  const requestDetails = cardRequests.find(
    (request) => request.id === selectedCardId
  );

  const handleStatusChange = (newStatus: string) => {
    setSelectedButton(newStatus);
    const exceptions = ["Download for Production", "Send to Dispatch"];
    if (exceptions.includes(newStatus)) {
      switch (newStatus) {
        case "Download for Production":
          handleProDownloadSuccessModalOpen();
          break;
        case "Send to Dispatch":
          handleSendToDispatchModalOpen();
          break;
      }
      return;
    }
    const updatedRequests = cardRequests.map((request) =>
      request.id === requestDetails?.id
        ? { ...request, status: newStatus }
        : request
    );
    setCardRequests(updatedRequests);
  };

  if (!requestDetails) return <p>Request not found</p>;

  const fields = [
    {
      id: "branchName",
      label: "Branch Name",
      name: "branchName",
      value: requestDetails.branch,
    },
    {
      id: "initiator",
      label: "Initiator",
      name: "initiator",
      value: requestDetails.initiator,
    },
    {
      id: "cardType",
      label: "Card Type",
      name: "cardType",
      value: requestDetails.cardType,
    },
    {
      id: "cardCharges",
      label: "Card Charges",
      name: "cardCharges",
      value: requestDetails.cardCharges,
    },
    {
      id: "quantity",
      label: "Quantity",
      name: "quantity",
      value: requestDetails.quantity,
    },
    { id: "batch", label: "Batch", name: "batch", value: requestDetails.batch },
  ];

  const getStatusBadgeClasses = (status: string) => {
    switch (status) {
      case "Ready":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-orange-100 text-orange-800";
      case "Acknowledged":
        return "bg-blue-100 text-blue-800";
      case "Pending":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const actionArray = [
    {
      label: "Download for Production",
      bgColor: "#344054",
      icon: DownloadForProductionIcon,
      parcel: "Download for Production",
    },
    {
      label: "Mark as In Progress",
      bgColor: "#B54708",
      parcel: "In Progress",
      icon: ProgressIcon,
    },
    {
      label: "Mark as Ready",
      bgColor: "#067647",
      parcel: "Ready",
      icon: ReadyIcon,
    },
    {
      label: "Send to Dispatch",
      bgColor: "#8020E7",
      icon: DispatchIcon,
      parcel: "Send to Dispatch",
    },
    {
      label: "Mark as Acknowledged",
      bgColor: "#014DAF",
      parcel: "Acknowledged",
      icon: AcknowledgedIcon,
    },
  ];

  return (
    <main className="">
      <Header
        title="Request Details"
        description="Perform predetermined actions on card requests here."
      />
      <section className="bg-white rounded-xl p-4 border border-[#E2E2E2] flex flex-col gap-6">
        <h2 className="text-lg font-medium text-primary">
          Card Request Details
        </h2>
        <div className="flex flex-col gap-5 w-[90%]">
          <div className="grid grid-cols-2 gap-y-5 gap-x-[10%]">
            {fields.map((field) => (
              <RHFInput
                key={field.id}
                id={field.id}
                label={field.label}
                type="text"
                placeholder={field.label}
                bgColor="bg-[#F5F5F7]"
                value={String(field.value)}
                onChange={() => {}}
              />
            ))}
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-[#344054]">
                Date Requested
              </p>
              <p className="py-[10px] px-1">
                {String(requestDetails.dateRequested)}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-[#344054]">Status</p>
              <span
                className={`py-[4px] px-3 rounded-full w-fit text-base font-medium ${getStatusBadgeClasses(
                  requestDetails.status
                )}`}
              >
                {requestDetails.status}
              </span>
            </div>
          </div>
          {/* bottom part */}
          <div className="flex flex-col gap-2 w-[90%]">
            <h2 className="text-sm font-bold text-[#344054]">Actions</h2>
            <div className="flex items-center gap-2">
              {actionArray.map((action) => {
                return (
                  <button
                    key={action.label}
                    className={`cursor-pointer flex items-center gap-2 py-2 px-4 rounded-lg whitespace-nowrap text-white text-xs font-medium transition-all duration-200`}
                    style={{
                      backgroundColor:
                        selectedButton === action.parcel
                          ? action.bgColor
                          : `${hexToRGBA(action.bgColor, 0.3)}`,
                    }}
                    onClick={() => handleStatusChange(action.parcel)}
                  >
                    <action.icon />
                    {action.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RequestDetails;
