import { LinkProps } from "@chakra-ui/react";
import {
  Dispatch,
  HTMLInputTypeAttribute,
  ReactNode,
  SetStateAction,
} from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface iInput {
  label: string;
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  placeholderTextColor?: string;
  register?: UseFormRegisterReturn;
  borderColor?: string;
  errors?: string;
  isReadOnly?: boolean;
  value?: string;
}

export interface iInputPassword extends iInput {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export type iTextArea = Omit<iInput, "type">;

export interface iSelect {
  label: string;
  children: ReactNode;
  errors?: string;
}

export interface iLinkProps extends LinkProps {
  href: string;
  children: ReactNode;
  isMenuItem?: boolean;
}

export interface iModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface iOnOpenF {
  onOpen: () => void;
}

export interface iFilterList {
  [key: string]: { name: string; values: string[] };
}

export interface iFilterParams {
  [key: string]: string;
}
