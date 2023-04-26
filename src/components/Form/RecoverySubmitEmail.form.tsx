import { iUserRecoverEmail } from "@/interfaces/user.interfaces";
import { userRecoverEmail } from "@/schemas/user.schemas";
import { Box, Button } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Field } from "../Field";

export const RecoverySubmitEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRecoverEmail>({
    resolver: yupResolver(userRecoverEmail),
  });

  const submitEmail = (data: iUserRecoverEmail) => {
    console.log(data);
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
      onSubmit={handleSubmit(submitEmail)}
    >
      <Field.InputField
        label="Email"
        name="email"
        placeholder="Informe seu email"
        borderColor={errors.email ? "feedback.alert1" : "#E9ECEF"}
        type="email"
        errors={errors.email?.message}
        register={register("email")}
      />
      <Button type="submit" variant={"brand1"} w="100%">
        Enviar
      </Button>
    </Box>
  );
};
