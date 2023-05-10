import { useUserContext } from "@/contexts/user.context";
import { iOnOpenF } from "@/interfaces/components.interfaces";
import { iUserRequest } from "@/interfaces/user.interfaces";
import { userRequestSchema } from "@/schemas/user.schemas";
import { apiSearchCEP } from "@/services/api";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Heading,
  Flex,
  Button,
  InputGroup,
  InputRightElement,
  IconButton,
  Box,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { Field } from "../Field";

export const CreateProfile = ({ onOpen }: iOnOpenF) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { createUser } = useUserContext();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<iUserRequest>({
    resolver: yupResolver(userRequestSchema),
  });

  const requestCep = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length == 8) {
      apiSearchCEP(e.target.value)
        .then((resp) => {
          setValue("address.city", resp.data.localidade);
          setValue("address.state", resp.data.uf);
          setValue("address.street", resp.data.logradouro);
          setValue("address.complement", resp.data.complemento);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onSubmit = async (data: iUserRequest) => {
    await createUser(data, onOpen);
  };

  return (
    <Box
      as={"form"}
      w={{ base: "95%", md: "100%" }}
      maxWidth={"420px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={"14px"}
      borderRadius={"8px"}
      backgroundColor={"grey.whiteFixed"}
      padding="25px"
      marginTop={"90px"}
      marginBottom={"90px"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Heading fontSize={"24px"}>Cadastro</Heading>
      <Text>Informações pessoais</Text>
      <Field.InputField
        label="Nome"
        type="text"
        placeholder="Informe seu nome"
        name="name"
        borderColor={errors.name ? "feedback.alert1" : "#E9ECEF"}
        register={register("name")}
        errors={errors.name?.message}
      />
      <Field.InputField
        label="Email"
        type="email"
        name="email"
        register={register("email")}
        borderColor={errors.email ? "feedback.alert1" : "#E9ECEF"}
        placeholder="Informe seu email"
        errors={errors.email?.message}
      />
      <Field.InputField
        label="CPF"
        type="text"
        name="cpf"
        register={register("cpf")}
        borderColor={errors.cpf ? "feedback.alert1" : "#E9ECEF"}
        placeholder="9000800900900"
        errors={errors.cpf?.message}
      />
      <Field.InputField
        label="Celular"
        type="tel"
        name="phone_number"
        register={register("phone_number")}
        borderColor={errors.phone_number ? "feedback.alert1" : "#E9ECEF"}
        placeholder="Informe o telefone com DDD"
        errors={errors.phone_number?.message}
      />
      <Field.InputField
        label="Data de nascimento"
        type="date"
        name="birthdate"
        register={register("birthdate")}
        borderColor={errors.birthdate ? "feedback.alert1" : "#E9ECEF"}
        placeholder="mês/dia/ano"
        errors={
          errors.birthdate
            ? "O campo data de nascimento é obrigatório"
            : undefined
        }
      />
      <Field.TextAreaField
        label="Descrição"
        name="description"
        register={register("description")}
        borderColor={errors.description ? "feedback.alert1" : "#E9ECEF"}
        placeholder="Insira a descrição do seu usuário"
        errors={errors.description?.message}
      />
      <Box
        maxWidth={"520px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={"14px"}
        borderRadius={"8px"}
      >
        <Text>Informações de endereço</Text>
        <Field.InputField
          label="Cep"
          type="number"
          name="cep"
          register={register("address.cep", { onChange: requestCep })}
          borderColor={errors.address?.cep ? "feedback.alert1" : "#E9ECEF"}
          placeholder="Informe seu Cep"
          errors={errors.address?.cep?.message}
        />
        <Flex>
          <Flex flexDirection={"column"}>
            <Field.InputField
              label="Estado"
              type="text"
              name="state"
              register={register("address.state")}
              borderColor={
                errors.address?.state ? "feedback.alert1" : "#E9ECEF"
              }
              placeholder="Estado"
              errors={errors.address?.state?.message}
            />
          </Flex>
          <Flex flexDirection={"column"}>
            <Field.InputField
              label="Cidade"
              type="text"
              name="city"
              register={register("address.city")}
              borderColor={errors.address?.city ? "feedback.alert1" : "#E9ECEF"}
              placeholder="Cidade"
              errors={errors.address?.city?.message}
            />
          </Flex>
        </Flex>

        <Field.InputField
          label="Rua"
          type="text"
          name="street"
          register={register("address.street")}
          borderColor={errors.address?.street ? "feedback.alert1" : "#E9ECEF"}
          placeholder="Logradouro"
          errors={errors.address?.street?.message}
        />
        <Flex>
          <Field.InputField
            label="Número"
            type="number"
            name="number"
            register={register("address.number")}
            borderColor={errors.address?.number ? "feedback.alert1" : "#E9ECEF"}
            placeholder="Número"
            errors={errors.address?.number?.message}
          />
          <Field.InputField
            label="Complemento"
            type="text"
            name="complement"
            register={register("address.complement")}
            borderColor={
              errors.address?.complement ? "feedback.alert1" : "#E9ECEF"
            }
            placeholder="Complemento"
            errors={errors.address?.complement?.message}
          />
        </Flex>
        <Flex alignContent={"center"} justifyContent={"center"} gap={"10px"}>
          <Button
            width={"45%"}
            value={"false"}
            variant={"outline"}
            _focus={{ bg: "#4529E6", border: "#4529E6", color: "white" }}
            onClick={() => setValue("is_seller", false)}
          >
            Comprador
          </Button>
          <Button
            width={"45%"}
            value={"true"}
            variant={"outline"}
            _focus={{ bg: "#4529E6", border: "#4529E6", color: "white" }}
            onClick={() => setValue("is_seller", true)}
          >
            Anunciante
          </Button>
        </Flex>
        <InputGroup h={"100%"}>
          <Field.InputField
            label="Senha"
            type={showPassword ? "text" : "password"}
            name="password"
            register={register("password")}
            borderColor={errors.password ? "feedback.alert1" : "#E9ECEF"}
            placeholder="Insira uma senha"
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
              tabIndex={-1}
            />
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <Field.InputField
            label="Confirme a senha"
            type={showConfirmPassword ? "text" : "password"}
            name="confirm_password"
            register={register("confirm_password")}
            borderColor={
              errors.confirm_password ? "feedback.alert1" : "#E9ECEF"
            }
            placeholder="Confirme sua senha"
            errors={errors.confirm_password?.message}
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
                showConfirmPassword ? (
                  <ViewIcon w={6} h={6} />
                ) : (
                  <ViewOffIcon w={6} h={6} />
                )
              }
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              tabIndex={-1}
            />
          </InputRightElement>
        </InputGroup>
        <Flex
          alignContent={"center"}
          flexDirection="column"
          justifyContent={"center"}
          gap={"10px"}
        >
          <Button type="submit" width={"98%"} variant={"brand1"}>
            Finalizar cadastro
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
