import { iUserRequest } from "@/interfaces/user.interfaces";
import * as yup from "yup";
import { ObjectSchema } from "yup";

// Precisa adicionar o relacionamento com o schema de address
const ensureIfIsLegalAge = (birthdate: Date) => {
  if (!birthdate) {
    return true;
  }
  let date = new Date();
  date = new Date(date.getFullYear() - 18, date.getMonth(), date.getDate());
  birthdate = new Date(birthdate);
  // @ts-expect-error

  return date - birthdate > 18 ? true : false;
};

export const userRequestSchema: ObjectSchema<any> = yup.object().shape({
  name: yup.string().max(100).required(),
  email: yup.string().email().max(100).required(),
  cpf: yup.string().max(11).required(),
  phone_number: yup.string().max(11).required(),
  birthdate: yup
    .date()
    .required()
    .test("Legal age", "Come back when you're 18 years", ensureIfIsLegalAge),
  description: yup.string().required(),
  password: yup.string().required(),
  is_seller: yup.boolean().required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")])
    .required(),
  address: yup.object().shape({
    cep: yup.string().length(8).required(),
    state: yup.string().length(2).required(),
    city: yup.string().max(50).required(),
    street: yup.string().max(80).required(),
    number: yup.string().max(10).required(),
    complement: yup.string().required(),
  }),
});
