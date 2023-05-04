import {
  iAdvertisedRequest,
  iAdvertisedUpdate,
} from "@/interfaces/advert.interfaces";
import { formatToNumber } from "@/utils/valuesFormat.util";
import * as yup from "yup";
import { ObjectSchema } from "yup";

export const advertisedRequestSchema: ObjectSchema<iAdvertisedRequest> = yup
  .object()
  .shape({
    brand: yup
      .string()
      .max(50, "O campo marca deve conter menos de 50 caracteres")
      .required("O campo marca é obrigatório"),
    model: yup
      .string()
      .max(50, "O campo modelo deve conter menos de  500 caracteres")
      .required("O campo modelo é obrigatório"),
    fuel: yup
      .string()
      .max(20, "O campo combustível deve conter menos de 20 caracteres")
      .required("O campo combustível é obrigatório"),
    color: yup
      .string()
      .max(20, "O campo cor deve conter menos de 20 caracteres")
      .required("O campo cor é obrigatório")
      .lowercase(),
    year: yup
      .string()
      .length(4, "O campo ano deve conter 4 caracteres")
      .required("O campo ano é obrigatório"),
    mileage: yup
      .number()
      .typeError("A quilometragem é obrigatoriamente um número")
      .min(0, "A quilometragem não pode ser negativa")
      .required("O campo Quilometragem é obrigatório"),
    fipe_price: yup
      .number()
      .positive("O preço FIPE não pode ser negativo")
      .required("O campo preço FIPE é obrigatório"),
    price: yup
      .number()
      .typeError("o preço é obrigatoriamente um número")
      .positive("O preço não pode ser negativo")
      .required("O campo preço é obrigatório")
      .transform((value, originalValue) => formatToNumber(originalValue)),
    description: yup.string().required("O campo descrição é obrigatório"),
    cover_image: yup
      .string()
      .url("URL inválida")
      .matches(
        /\.(jpeg|jpg|gif|png)$/i,
        "a URL da imagem é obrigatoria e deve terminar em jpeg, jpg, gif ou png"
      )
      .max(300, "O campo imagem deve conter menos de 300")
      .required("O campo imagem é obrigatório"),
    location: yup.string().length(8).required("O campo location é obrigatório"),
    is_avaliable: yup.boolean().required().default(true),
    galery: yup
      .array(
        yup.object({
          image: yup
            .string()
            .url("URL inválida.")
            .matches(
              /\.(jpeg|jpg|gif|png)$/i,
              "a URL da imagem é obrigatoria e deve terminar em jpeg, jpg, gif ou png"
            )
            .required(),
        })
      )
      .default([]),
  });
export const advertisedUpdateSchema: ObjectSchema<iAdvertisedUpdate> = yup
  .object()
  .shape({
    brand: yup
      .string()
      .max(50, "O campo marca deve conter menos de 50 caracteres"),
    model: yup
      .string()
      .max(50, "O campo modelo deve conter menos de  500 caracteres"),
    fuel: yup
      .string()
      .max(20, "O campo combustível deve conter menos de 20 caracteres"),
    color: yup
      .string()
      .max(20, "O campo cor deve conter menos de 20 caracteres")

      .lowercase(),
    year: yup.string().length(4, "O campo ano deve conter 4 caracteres"),
    mileage: yup
      .number()
      .typeError("A quilometragem é obrigatoriamente um número")
      .min(0, "A quilometragem não pode ser negativa"),
    fipe_price: yup.number().positive("O preço FIPE não pode ser negativo"),
    price: yup
      .number()
      .typeError("o preço é obrigatoriamente um número")
      .positive("O preço não pode ser negativo")

      .transform((value, originalValue) => formatToNumber(originalValue)),
    description: yup.string(),
    cover_image: yup
      .string()
      .url()
      .matches(
        /\.(jpeg|jpg|gif|png)$/i,
        "a URl da imagem é obrigatoria e deve terminar em jpeg, jpg, gif ou png"
      )
      .max(300, "O campo imagem deve conter menos de 300"),
    location: yup.string().length(8),
    is_avaliable: yup.boolean(),
    galery: yup
      .array(
        yup.object({
          image: yup
            .string()
            .url()
            .matches(
              /\.(jpeg|jpg|gif|png)$/i,
              "a URl da imagem é obrigatoria e deve terminar em jpeg, jpg, gif ou png"
            )
            .required(),
        })
      )
      .default([])
      .required(),
  });
