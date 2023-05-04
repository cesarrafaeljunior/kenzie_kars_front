import { iUserRecoverPassword } from "@/interfaces/user.interfaces";
import { userRecoverPassword } from "@/schemas/user.schemas";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Heading,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
  Box,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Field } from "../Field";
import { api } from "@/services/api";
import { iTokenProps } from "@/pages/recoverPassword/[token]";
import { destroyCookie } from "nookies";
import { useRouter } from "next/router";

export const RecoveryPassword = ({ token }: iTokenProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRecoverPassword>({
    resolver: yupResolver(userRecoverPassword),
  });

  const toast = useToast();
  const router = useRouter();

  const submitPassword = (data: iUserRecoverPassword) => {
    api
      .patch(`/users/resetPassword/${token}`, data)
      .then((res) => {
        toast({
          position: "top",
          title: res.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        destroyCookie(null, "ms.resetToken");
        router.push("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box
      as={"form"}
      width={"512px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={"14px"}
      borderRadius={"8px"}
      backgroundColor={"grey.whiteFixed"}
      padding={"45px"}
      marginTop={"90px"}
      marginBottom={"90px"}
      onSubmit={handleSubmit(submitPassword)}
    >
      <Heading fontSize={"24px"}>Alteração de senha</Heading>
      <InputGroup h={"100%"}>
        <Field.InputField
          label="Nova senha"
          type={showPassword ? "text" : "password"}
          placeholder="Informe sua senha"
          name="password"
          borderColor={errors.password ? "feedback.alert1" : "#E9ECEF"}
          register={register("password")}
          errors={errors.password?.message}
        />
        <InputRightElement h={"48px"} top={"20px"}>
          <IconButton
            tabIndex={-1}
            top="10px"
            right={"16px"}
            h={"100%"}
            bg="transparent"
            size={"md"}
            color={"black"}
            border="none"
            aria-label="Search database"
            _hover={{ bg: "none", border: "none", color: "grey.2" }}
            icon={
              showPassword ? (
                <ViewIcon w={6} h={6} />
              ) : (
                <ViewOffIcon w={6} h={6} />
              )
            }
            onClick={() => setShowPassword(!showPassword)}
          />
        </InputRightElement>
      </InputGroup>
      <InputGroup h={"100%"}>
        <Field.InputField
          label="Confirmar nova senha"
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirme sua senha"
          name="confirm_password"
          borderColor={errors.confirm_password ? "feedback.alert1" : "#E9ECEF"}
          register={register("confirm_password")}
          errors={errors.confirm_password?.message}
        />
        <InputRightElement h={"48px"} top={"20px"}>
          <IconButton
            tabIndex={-1}
            top="10px"
            right={"16px"}
            h={"100%"}
            bg="transparent"
            size={"md"}
            color={"black"}
            aria-label="Search database"
            border="none"
            _hover={{ bg: "none", border: "none", color: "grey.2" }}
            icon={
              showConfirmPassword ? (
                <ViewIcon w={6} h={6} />
              ) : (
                <ViewOffIcon w={6} h={6} />
              )
            }
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        </InputRightElement>
      </InputGroup>
      <Button type="submit" w={"100%"}>
        Enviar
      </Button>
    </Box>
  );
};
