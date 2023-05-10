import { iComment, iCommentUpdate } from "@/interfaces/comment.interface";
import { ObjectSchema } from "yup";
import * as yup from "yup";

export const commentSchema = yup.object().shape({
  description: yup.string().required(),
});

export const commentUpdateSchema: ObjectSchema<iCommentUpdate> =
  commentSchema.partial();
