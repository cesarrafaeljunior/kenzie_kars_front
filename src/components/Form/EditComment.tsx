import { iCommentUpdate } from "@/interfaces/comment.interface";
import { commentUpdateSchema } from "@/schemas/comment.schema";
import { Box } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Field } from "../Field";
import { useCommentContext } from "@/contexts/comments.context";

export const EditComment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<iCommentUpdate>({
    resolver: yupResolver(commentUpdateSchema),
  });

  const { updateComment } = useCommentContext();

  const submitFunction = () => {};

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
    </Box>
  );
};
