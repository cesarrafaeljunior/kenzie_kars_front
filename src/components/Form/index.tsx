import { Button, Flex, FormControl, Text } from "@chakra-ui/react";
import { Field } from "../Field";

const EditAddress = () => {
  return (
    <FormControl
      as={"form"}
      maxWidth={"520px"}
      padding="30px 24px"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={"14px"}
      borderRadius={"8px"}
    >
      <Text>Informações de endereço</Text>
      <Field.InputField
        label="Cep"
        type="text"
        name="text"
        placeholder="37517000"
      />
      <Flex>
        <Field.InputField
          label="Estado"
          type="text"
          name="text"
          placeholder="MG"
        />
        <Field.InputField
          label="Cidade"
          type="text"
          name="text"
          placeholder="Formigas"
        />
      </Flex>
      <Field.InputField
        label="Rua"
        type="text"
        name="text"
        placeholder="Rua das macieiras"
      />
      <Flex>
        <Field.InputField
          label="Número"
          type="number"
          name="number"
          placeholder="25"
        />
        <Field.InputField
          label="Complemento"
          type="text"
          name="text"
          placeholder="Casa"
        />
      </Flex>
      <Flex alignContent={"center"} justifyContent={"flex-end"} gap={"10px"}>
        <Button width={"126px"} variant={"negative"}>
          Cancelar
        </Button>
        <Button width={"193px"} variant={"brandDisable"}>
          Salvar alterações
        </Button>
      </Flex>
    </FormControl>
  );
};
const CreateAd = () => {};
const EditAd = () => {};

export const Form = { EditAddress, CreateAd, EditAd };
