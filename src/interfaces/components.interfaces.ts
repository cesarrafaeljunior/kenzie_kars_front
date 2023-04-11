import { HTMLInputTypeAttribute, ReactNode } from "react";

export interface iInput {
  label: string;
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
}

export type iTextArea = Omit<iInput, "type">;

export interface iSelect {
  label: string;
  children: ReactNode;
}
