import * as yup from "yup";
import { ObjectSchema } from "yup";
import { iAdvertisedRequest } from "@/interfaces/context.interfaces";

export const advertisedRequestSchema: ObjectSchema<iAdvertisedRequest> = yup
  .object()
  .shape({
    title: yup.string().max(100).required(),
    brand: yup.string().max(50).required(),
    model: yup.string().max(50).required(),
    fuel: yup.string().max(20).required(),
    color: yup.string().max(20).required(),
    year: yup.number().positive().required(),
    mileage: yup.number().min(0).required(),
    price: yup.number().positive().required(),
    description: yup.string().required(),
    cover_image: yup.string().max(300).required(),
    location: yup.string().length(8).required(),
    is_avaliable: yup.boolean().required().default(true),
  });
