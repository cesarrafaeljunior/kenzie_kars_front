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

export interface iCommentSuggestions {
  text: string;
  setValue: () => void;
}
