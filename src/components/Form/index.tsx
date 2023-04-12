import { Box, Button, Flex, FormLabel, Text } from "@chakra-ui/react";
import { Field } from "../Field";

const EditProfile = () => {
  return (
    <Box
      as={"h2"}
      maxWidth={"520px"}
      padding="30px 24px"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={"14px"}
      borderRadius={"8px"}
    >
      <Text>Informações pessoais</Text>
      <Field.InputField
        label="Nome"
        type="text"
        name="text"
        placeholder="Samuel leão"
      />
      <Field.InputField
        label="Email"
        type="email"
        name="email"
        placeholder="samuelleao@gmail.com"
      />
      <Field.InputField
        label="CPF"
        type="text"
        name="text"
        placeholder="900.080.090-0"
      />
      <Field.InputField
        label="Celular"
        type="tel"
        name="tel"
        placeholder="(084) 90909-9092"
      />
      <Field.InputField
        label="Data de nascimento"
        type="date"
        name="date"
        placeholder=""
      />
      <Field.TextField
        label="Descrição"
        name="description"
        placeholder="Insira a descrição do usuário..."
      />
      <Flex alignContent={"center"} justifyContent={"flex-end"} gap={"10px"}>
        <Button width={"126px"} variant={"negative"}>
          Cancelar
        </Button>
        <Button width={"193px"} variant={"brandDisable"}>
          Salvar alterações
        </Button>
      </Flex>
    </Box>
  );
};

const EditAddress = () => {
  return (
    <Box
      as={"h2"}
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
    </Box>
  );
};

const CreateAd = () => {
  return (
    <Box
      as={"h2"}
      maxWidth={"520px"}
      padding="30px 24px"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={"14px"}
      borderRadius={"8px"}
    >
      <Text>Informações de veículo</Text>
      <Field.InputField
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
      />
      <Button variant={"brandOpacity"} size={"sm"} maxWidth={"320px"}>
        Adicionar campo para imagem da galeria
      </Button>
      <Flex alignContent={"center"} justifyContent={"flex-end"} gap={"10px"}>
        <Button width={"126px"} variant={"negative"}>
          Cancelar
        </Button>
        <Button width={"193px"} variant={"brandDisable"}>
          Criar anúncio
        </Button>
      </Flex>
    </Box>
  );
};

const EditAd = () => {
  return (
    <Box
      as={"h2"}
      maxWidth={"520px"}
      padding="30px 24px"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={"14px"}
      borderRadius={"8px"}
    >
      <Text>Informações de veículo</Text>
      <Field.InputField
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
      />
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

export const Form = { EditProfile, EditAddress, CreateAd, EditAd };
