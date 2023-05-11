import { Dispatch, SetStateAction } from "react";
import { iUser } from "./user.interfaces";

export interface iCommentRequest {
  description: string;
}

export interface iComment {
  created_at: Date;
  updated_at: Date;
  id: string;
  description: string;
  user: Omit<iUser, "address">;
}

export interface iCommentRequest {
  description: string;
}

export type iCommentUpdate = Partial<iCommentRequest>;

export interface iCommentSuggestions {
  texts: string[];
  setTextAreaField: Dispatch<SetStateAction<string>>;
}
