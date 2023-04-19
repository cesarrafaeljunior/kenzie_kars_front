import { iUserRequest } from "@/interfaces/user.interfaces";
import * as yup from "yup";
import { ObjectSchema } from "yup";

// Precisa adicionar o relacionamento com o schema de address
export const createUserSchema: ObjectSchema<iUserRequest> = yup.object().shape({
  name: yup.string().max(100).required(),
  email: yup.string().email().max(100).required(),
  cpf: yup.string().length(11).required(),
  phone_number: yup.string().length(11).required(),
  birthdate: yup.date().required(),
  description: yup.string().required(),
  password: yup.string().required(),
  is_seller: yup.boolean().required(),
  confrimPassword: yup.string().oneOf([yup.ref("password")]),
});
