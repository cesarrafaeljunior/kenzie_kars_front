import { iUserRecoverEmail } from "@/interfaces/user.interfaces";
import { userRecoverEmail } from "@/schemas/user.schemas";
import { Box, Button, useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Field } from "../Field";
import { api } from "@/services/api";
import { iCloseF } from "@/interfaces/components.interfaces";
import { setCookie } from "nookies";

export const RecoverySubmitEmail = ({ onClose }: iCloseF) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRecoverEmail>({
    resolver: yupResolver(userRecoverEmail),
  });

  const toast = useToast();

  const submitEmail = async (data: iUserRecoverEmail) => {
    api
      .post("/users/resetPassword", data)
      .then((res) => {
        toast({
          position: "top",
          title: res.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onClose();
        setCookie(null, "ms.resetToken", res.data.resetToken, {
          maxAge: 60 * 60 * 7,
          path: "/recoverPassword",
        });
      })
      .catch((err) => console.log(err));
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
