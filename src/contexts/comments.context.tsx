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
  const [commentToBeEdited, setCommentToBeEdited] = useState<iComment | null>(
    null
  );

  const checkUserIsLogged = (onOpen: onOpen) => {
    const cookies = parseCookies();
    const token = cookies["ms.token"];

    if (!token) {
      onOpen();
    }

    return;
  };

  const createComment = (description: iCommentRequest) => {
    const { id: advertId } = router.query;
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

  const updateComment = (
    description: iCommentUpdate,
    commentId: string,
    onClose: () => void
  ) => {
    const advertId = router.query;

    api
      .patch(`/advertised/${advertId}/comments/${commentId}`, description)
      .then((res) => {
        setCurrentComments(
          currentComments.map((elem) =>
            elem.id == commentId ? res.data : elem
          )
        );
        onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteComment = (commentId: string, onClose: () => void) => {
    const advertId = router.query;

    api
      .delete(`/advertised/${advertId}/comments/${commentId}`)
      .then((res) => {
        setCurrentComments(
          currentComments.filter((elem) => elem.id != commentId)
        );
        onClose();
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
        commentToBeEdited,
        setCommentToBeEdited,
        deleteComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const useCommentContext = () => useContext(CommentContext);
