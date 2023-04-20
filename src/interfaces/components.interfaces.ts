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
  register: UseFormRegisterReturn;
}

export type iTextArea = Omit<iInput, "type">;

export interface iSelect {
  label: string;
  children: ReactNode;
}

export interface iLinkProps extends LinkProps {
  href: string;
  children: ReactNode;
}

export interface iModalProps {
  isOpen: boolean;
  onClose: () => void;
}
