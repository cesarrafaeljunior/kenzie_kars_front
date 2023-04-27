import { useAuthContext } from "@/contexts/auth.context";
import { iLogin } from "@/interfaces/user.interfaces";
import { loginSchema } from "@/schemas/login.schemas";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Heading,
  InputGroup,
  InputRightElement,
  IconButton,
  Flex,
  Button,
  Center,
  Box,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Field } from "../Field";
import { Link } from "../Link";
import { iOnOpenF } from "@/interfaces/components.interfaces";

export const Login = ({ onOpen }: iOnOpenF) => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({
    resolver: yupResolver(loginSchema),
  });
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
      onSubmit={handleSubmit(login)}
    >
      <Heading fontSize={"24px"}>Login</Heading>

      <Field.InputField
        label="Email"
        type="email"
        placeholder="Digite seu email"
        name="email"
        borderColor={errors.email ? "feedback.alert1" : "#E9ECEF"}
        register={register("email")}
        errors={errors.email?.message}
      />

      <InputGroup h={"100%"}>
        <Field.InputField
          label="Senha"
          type={showPassword ? "text" : "password"}
          placeholder="Digite sua senha"
          name="password"
          borderColor={errors.password ? "feedback.alert1" : "#E9ECEF"}
          register={register("password")}
          errors={errors.password?.message}
        />
        <InputRightElement h={"48px"} top={"20px"}>
          <IconButton
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
      <Flex justifyContent={"flex-end"}>
        <Button
          color={"grey2"}
          fontSize={"14px"}
          border="none"
          bg="none"
          onClick={onOpen}
          _hover={{ bg: "none", border: "none", textDecoration: "underline" }}
          fontWeight={"400"}
          w={"max-content"}
          h={"max-content"}
          p={0}
        >
          {" "}
          Esqueci minha senha{" "}
        </Button>
      </Flex>
      <Button type="submit" variant={"brand1"}>
        Entrar
      </Button>
      <Center>
        <Text color={"grey2"} fontSize={"14px"}>
          Ainda não possui uma conta?
        </Text>
      </Center>
      <Center>
        <Link w={"315px"} href="/register" variant={"linDefault"}>
          Cadastrar
        </Link>
      </Center>
    </Box>
  );
};
