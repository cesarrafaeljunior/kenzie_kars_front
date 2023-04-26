import { Box, Button, Flex, Text } from "@chakra-ui/react";

export const EditAd = () => {
  return (
    <Box
      as={"h2"}
      maxWidth={"520px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={"14px"}
      borderRadius={"8px"}
    >
      <Text>Informações de veículo</Text>
      {/* <Field.InputField
        label="Marca"
        type="text"
        name="text"
        placeholder="Mercedes Benz"
      />
      <Field.InputField
        label="Modelo"
        type="text"
        name="text"
        placeholder="A 200 CGI ADVANCE SEDAN"
      />
      <Flex>
        <Field.InputField
          label="Ano"
          type="number"
          name="number"
          placeholder="2018"
        />
        <Field.InputField
          label="Combustível"
          type="text"
          name="text"
          placeholder="Gasolina / Etanol"
        />
      </Flex>
      <Flex>
        <Field.InputField
          label="Quilometragem"
          type="number"
          name="number"
          placeholder="2018"
        />
        <Field.InputField
          label="Cor"
          type="text"
          name="text"
          placeholder="Branco"
        />
      </Flex>
      <Flex>
        <Field.InputField
          label="Preço tabela FIPE"
          type="number"
          name="number"
          placeholder="R$ 50.000,00"
        />
        <Field.InputField
          label="Preço"
          type="number"
          name="number"
          placeholder="R$ 50.000,00"
        />
      </Flex>
      <Field.TextField
        label="Descrição"
        name="description"
        placeholder="Insira a descrição do produto..."
      />
      <FormLabel>Publicado</FormLabel>
      <Flex justifyContent={"space-between"} gap={"10px"}>
        <Button variant={"outline2"} width={"100%"}>
          Sim
        </Button>
        <Button variant={"outline2"} width={"100%"}>
          Não
        </Button>
      </Flex>

      <Field.InputField
        label="Imagem da capa"
        type="text"
        name="text"
        placeholder="https://image.com"
      />

      <Field.InputField
        label="1° Imagem da galeria"
        type="text"
        name="text"
        placeholder="https://image.com"
      />
      <Field.InputField
        label="2° Imagem da galeria"
        type="text"
        name="text"
        placeholder="https://image.com"
      /> */}
      <Button variant={"brandOpacity"} size={"sm"} maxWidth={"320px"}>
        Adicionar campo para imagem da galeria
      </Button>
      <Flex alignContent={"center"} justifyContent={"flex-end"} gap={"10px"}>
        <Button width={"100%"} variant={"negative"}>
          Excluir anúncio
        </Button>
        <Button width={"100%"} variant={"brandDisable"}>
          Salvar alterações
        </Button>
      </Flex>
    </Box>
  );
};
