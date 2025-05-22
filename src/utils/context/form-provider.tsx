import { useState } from "react";
import { FormContext } from "./form-context";

const initialCardRequests = [
  {
    id: 1,
    branch: "Corporate",
    initiator: "Root User",
    quantity: 10,
    batch: "847264905",
    dateRequested: "10/18/2024 14:39:58",
    status: "Ready",
    cardCharges: "1,500",
    cardType: "Corporate",
  },
  {
    id: 2,
    branch: "Corporate",
    initiator: "Root User",
    quantity: 10,
    batch: "847264906",
    dateRequested: "10/18/2024 14:39:58",
    status: "Ready",
    cardCharges: "1,700",
    cardType: "Corporate",
  },
  {
    id: 3,
    branch: "Corporate",
    initiator: "Root User",
    quantity: 10,
    batch: "847264907",
    dateRequested: "10/18/2024 14:39:58",
    status: "In Progress",
    cardCharges: "1,800",
    cardType: "Corporate",
  },
  {
    id: 4,
    branch: "Corporate",
    initiator: "Root User",
    quantity: 10,
    batch: "847264908",
    dateRequested: "10/18/2024 14:39:58",
    status: "Pending",
    cardCharges: "1,900",
    cardType: "Corporate",
  },
  {
    id: 5,
    branch: "Corporate",
    initiator: "Root User",
    quantity: 10,
    batch: "847264909",
    dateRequested: "10/18/2024 14:39:58",
    status: "Acknowledged",
    cardCharges: "2,000",
    cardType: "Corporate",
  },
];

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<Record<string, unknown>[]>([]);
  const [cardRequests, setCardRequests] = useState(initialCardRequests);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        cardRequests,
        setCardRequests,
        selectedCardId,
        setSelectedCardId,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
