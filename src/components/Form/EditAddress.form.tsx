import { useUserContext } from "@/contexts/user.context";
import { iAddressUpdate } from "@/interfaces/address.interfaces";
import { addressUpdateSchema } from "@/schemas/user.schemas";
import { apiSearchCEP } from "@/services/api";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { Field } from "../Field";
import { iCloseF } from "@/interfaces/components.interfaces";

export const EditAddress = ({ onClose }: iCloseF) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<iAddressUpdate>({
    resolver: yupResolver(addressUpdateSchema),
  });
  const { updateUserAddress } = useUserContext();
  const submitFunction = (data: iAddressUpdate) => {
    updateUserAddress(data);
  };

  const requestCep = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length == 8) {
      apiSearchCEP(e.target.value)
        .then((resp) => {
          setValue("city", resp.data.localidade);
          setValue("state", resp.data.uf);
          setValue("street", resp.data.logradouro);
          setValue("complement", resp.data.complemento);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
      onSubmit={handleSubmit(submitFunction)}
    >
      <Text>Informações de endereço</Text>
      <Field.InputField
        label="Cep"
        type="text"
        name="text"
        placeholder="37517000"
        register={register("cep", { onChange: requestCep })}
      />
      <Flex>
        <Field.InputField
          label="Estado"
          type="text"
          name="text"
          placeholder="MG"
          register={register("state")}
        />
        <Field.InputField
          label="Cidade"
          type="text"
          name="text"
          placeholder="Formigas"
          register={register("city")}
        />
      </Flex>
      <Field.InputField
        label="Rua"
        type="text"
        name="text"
        placeholder="Rua das macieiras"
        register={register("street")}
      />
      <Flex>
        <Field.InputField
          label="Número"
          type="number"
          name="number"
          placeholder="25"
          register={register("number")}
        />
        <Field.InputField
          label="Complemento"
          type="text"
          name="text"
          placeholder="Casa"
          register={register("complement")}
        />
      </Flex>
      <Flex alignContent={"center"} justifyContent={"flex-end"} gap={"10px"}>
        <Button
          type="button"
          onClick={onClose}
          width={"126px"}
          variant={"negative"}
        >
          Cancelar
        </Button>
        <Button type="submit" width={"193px"} variant={"brand1"}>
          Salvar alterações
        </Button>
      </Flex>
    </Box>
  );
};
