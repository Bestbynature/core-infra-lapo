import { createContext } from "react";

interface CardRequest {
  id: number;
  branch: string;
  initiator: string;
  quantity: number;
  batch: string;
  dateRequested: string;
  status: string;
  cardCharges: string;
  cardType: string;
}

export interface FormContextProps {
  formData: Record<string, unknown>[];
  setFormData: (data: Record<string, unknown>[]) => void;
  cardRequests: CardRequest[];
  setCardRequests: (data: CardRequest[]) => void;
  selectedCardId: number | null;
  setSelectedCardId: (id: number | null) => void;
}

export const FormContext = createContext<FormContextProps | undefined>(
  undefined
);
