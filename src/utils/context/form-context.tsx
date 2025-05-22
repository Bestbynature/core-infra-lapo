import { createContext } from "react";

export interface FormContextProps {
  formData: Record<string, unknown>[];
  setFormData: (data: Record<string, unknown>[]) => void;
}

export const FormContext = createContext<FormContextProps | undefined>(
  undefined
);
