import { iOnOpenF, onOpen } from "@/interfaces/components.interfaces";
import {
  iCommentContext,
  iContextProps,
} from "@/interfaces/context.interfaces";
import { parseCookies } from "nookies";
import { createContext, useContext } from "react";

const CommentContext = createContext<iCommentContext>({} as iCommentContext);

export const CommentProvider = ({ children }: iContextProps) => {
  const checkUserIsLogged = (onOpen: onOpen) => {
    const cookies = parseCookies();
    const token = cookies["ms.token"];

    if (!token) {
      onOpen();
    }
  };

  return (
    <CommentContext.Provider value={{ checkUserIsLogged }}>
      {children}
    </CommentContext.Provider>
  );
};

export const useCommentContext = () => useContext(CommentContext);
