import { iComment } from "@/interfaces/comment.interface";
import { ObjectSchema } from "yup";
import * as yup from "yup";

export const commentSchema: ObjectSchema<iComment> = yup.object().shape({
  description: yup.string().required(),
});
