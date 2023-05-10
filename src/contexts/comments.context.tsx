import {
  iComment,
  iCommentRequest,
  iCommentUpdate,
} from "@/interfaces/comment.interface";
import { iOnOpenF, onOpen } from "@/interfaces/components.interfaces";
import {
  iCommentContext,
  iContextProps,
} from "@/interfaces/context.interfaces";
import { api } from "@/services/api";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { createContext, useContext, useState } from "react";

const CommentContext = createContext<iCommentContext>({} as iCommentContext);

export const CommentProvider = ({ children }: iContextProps) => {
  const router = useRouter();
  const [textAreaField, setTextAreaField] = useState<string>("");
  const [currentComments, setCurrentComments] = useState<iComment[]>([]);

  const checkUserIsLogged = (onOpen: onOpen) => {
    const cookies = parseCookies();
    const token = cookies["ms.token"];

    if (!token) {
      onOpen();
    }

    return;
  };

  const createComment = (description: iCommentRequest) => {
    const advertId = router.query;

    api
      .post(`/advertised/${advertId}/comments`, description)
      .then((res) => {
        setTextAreaField("");
        setCurrentComments([...currentComments, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateComment = (description: iCommentUpdate) => {
    const advertId = router.query;

    api
      .patch(`/advertised/${advertId}/comments`, description)
      .then((res) => {
        setCurrentComments([...currentComments, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CommentContext.Provider
      value={{
        textAreaField,
        setTextAreaField,
        checkUserIsLogged,
        createComment,
        currentComments,
        setCurrentComments,
        updateComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const useCommentContext = () => useContext(CommentContext);
