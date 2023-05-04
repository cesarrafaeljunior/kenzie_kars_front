import { iUser } from "./user.interfaces";

export interface iCommentRequest {
  description: string;
}

export interface iComment {
  id: string;
  description: string;
  user: Omit<iUser, "address">;
}

export interface iCommentSuggestions {
  text: string;
  setValue: () => void;
}
