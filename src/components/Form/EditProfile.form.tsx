import { useUserContext } from "@/contexts/user.context";
import { iUserUpdate } from "@/interfaces/user.interfaces";
import { userUpdateSchema } from "@/schemas/user.schemas";
import { Flex, Button, Box, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Field } from "../Field";
import { iCloseF } from "@/interfaces/components.interfaces";

export const EditProfile = ({ onClose }: iCloseF) => {
  const { updateUser, user, softDeleteUser } = useUserContext();

  const onClickDeleteButton = async () => {
    if (user) {
      const { id } = user;
      softDeleteUser(id);
    }
  };

  const onSubmit = async (data: iUserUpdate) => {
    if (user) {
      const { id } = user;
      await updateUser(data, id);
      onClose();
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<iUserUpdate>({
    resolver: yupResolver(userUpdateSchema),
  });

  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("email", user.email);
      setValue("description", user.description);
      setValue("phone_number", user.phone_number);
      setValue("cpf", user.cpf);
    }
  }, []);

  return (
    <Box
      as={"form"}
      maxWidth={"520px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={"14px"}
      borderRadius={"8px"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Text>Informações pessoais</Text>
      <Field.InputField
        label="Nome"
        type="text"
        name="text"
        register={register("name")}
        placeholder="Samuel leão"
      />
      <Field.InputField
        label="Email"
        type="email"
        name="email"
        register={register("email")}
        placeholder="samuelleao@gmail.com"
      />
      <Field.InputField
        label="CPF"
        type="text"
        name="text"
        register={register("cpf")}
        placeholder="900.080.090-0"
      />
      <Field.InputField
        label="Celular"
        type="tel"
        name="tel"
        register={register("phone_number")}
        placeholder="(084) 90909-9092"
      />
      <Field.InputField
        label="Data de nascimento"
        type="date"
        name="date"
        register={register("birthdate")}
        placeholder=""
      />
      <Field.TextAreaField
        label="Descrição"
        name="description"
        register={register("description")}
        placeholder="Insira a descrição do usuário..."
      />
      <Field.InputField
        label="Senha"
        type="password"
        name="password"
        register={register("password")}
        placeholder="Insira a nova senha do usuário."
      />
      <Flex alignContent={"center"} justifyContent={"flex-end"} gap={"10px"}>
        <Button
          type="button"
          onClick={onClose}
          width={"126px"}
          variant={"negative"}
        >
          Cancelar
        </Button>
        <Button width={"126px"} onClick={onClickDeleteButton} variant={"alert"}>
          Excluir perfil
        </Button>
        <Button type="submit" width={"193px"} variant={"brand1"}>
          Salvar alterações
        </Button>
      </Flex>
    </Box>
  );
};
