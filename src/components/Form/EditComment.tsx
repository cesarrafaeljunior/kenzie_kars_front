import { iComment, iCommentUpdate } from "@/interfaces/comment.interface";
import { commentUpdateSchema } from "@/schemas/comment.schema";
import { Box, Button, Flex } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Field } from "../Field";
import { useCommentContext } from "@/contexts/comments.context";
import {
  iCloseF,
  iCommentProp,
  iModalProps,
  iOnOpenF,
} from "@/interfaces/components.interfaces";
import { useEffect } from "react";

export const EditComment = ({ onClose }: iCloseF) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<iCommentUpdate>({
    resolver: yupResolver(commentUpdateSchema),
  });

  useEffect(() => {
    setValue("description", commentToBeEdited?.description);
  }, []);

  const { updateComment, commentToBeEdited, deleteComment } =
    useCommentContext();

  const submitFunction = (data: iCommentUpdate) => {
    if (commentToBeEdited) {
      updateComment(data, commentToBeEdited.id, onClose);
    }
  };

  const onClickDeleteButton = () => {
    if (commentToBeEdited) {
      deleteComment(commentToBeEdited.id, onClose);
    }
  };

  return (
    <Box
      as={"form"}
      maxWidth={"520px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={"14px"}
      borderRadius={"8px"}
      onSubmit={handleSubmit(submitFunction)}
    >
      <Field.TextAreaField
        label="Descrição"
        name="description"
        placeholder="Digite seu comentário."
        errors={errors.description?.message}
        borderColor={errors.description ? "feedback.alert1" : "#E9ECEF"}
        register={register("description")}
      />
      <Flex alignContent={"center"} justifyContent={"flex-end"} gap={"10px"}>
        <Button type="submit">Editar</Button>
        <Button type="button" onClick={onClickDeleteButton} variant={"alert"}>
          Excluir
        </Button>
      </Flex>
    </Box>
  );
};
