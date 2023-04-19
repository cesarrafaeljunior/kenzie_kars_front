import {
  Box,
  Button,
  Flex,
  FormLabel,
  Text,
  Heading,
  Center,
} from "@chakra-ui/react";
import { Field } from "../Field";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  iLogin,
  iLoginResponse,
  iUser,
  iUserRequest,
} from "@/interfaces/user.interfaces";
import { loginSchema } from "@/schemas/login.schemas";
import { createUserSchema } from "@/schemas/user.schemas";

const Login = () => {
  const submitFunction = async (data: iLogin) => {
    await api
      .post<iLoginResponse>("/login", data)
      .then((resp) => {
        toast.success("login realizado");
      })
      .catch((err) => {
        toast.error("ops algo deu errado");
      });
  };

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
      onSubmit={handleSubmit(submitFunction)}
    >
      <Heading fontSize={"24px"}>Login</Heading>

      <Field.InputField
        label="Email"
        type="email"
        placeholder="samuelleão@gmail.com"
        name="email"
        register={register("email")}
      />
      <Field.InputField
        label="Senha"
        type="password"
        name="password"
        register={register("password")}
        placeholder="samuelleao@gmail.com"
      />
      <Flex justifyContent={"flex-end"}>
        <Text color={"grey2"} fontSize={"14px"}>
          Esqueci minha senha
        </Text>
      </Flex>
      <Button type="submit" variant={"brand1"}>
        Entrar
      </Button>
      <Center>
        <Text color={"grey2"} fontSize={"14px"}>
          Ainda não possui uma conta?
        </Text>
      </Center>
      <Button variant={"outline"}>Cadastrar</Button>
    </Box>
  );
};

const CreateProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRequest>({
    resolver: yupResolver(createUserSchema),
  });

  const submitFunction = async (data: iUserRequest) => {
    await api
      .post<iUser>("/users", data)
      .then((resp) => {
        toast.success("conta criada com sucesso");
      })
      .catch((err) => {
        toast.error("ops algo deu errado");
      });
  };

  return (
    <Box
      as={"form"}
      maxWidth={"420px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={"14px"}
      borderRadius={"8px"}
      backgroundColor={"grey.whiteFixed"}
      padding={"45px"}
      marginTop={"90px"}
      marginBottom={"90px"}
      onSubmit={handleSubmit(submitFunction)}
    >
      <Heading fontSize={"24px"}>Cadastro</Heading>
      <Text>Informações pessoais</Text>
      <Field.InputField
        label="Nome"
        type="text"
        placeholder="Samuel leão"
        name="name"
        register={register("name")}
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
        name="cpf"
        register={register("cpf")}
        placeholder="900.080.090-0"
      />
      <Field.InputField
        label="Celular"
        type="tel"
        name="phone_number"
        register={register("phone_number")}
        placeholder="(084) 90909-9092"
      />
      <Field.InputField
        label="Data de nascimento"
        type="date"
        name="birthdate"
        register={register("birthdate")}
        placeholder=""
      />
      <Field.TextField
        label="Descrição"
        name="description"
        register={register("description")}
        placeholder="Insira a descrição do usuário..."
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
          type="text"
          name="cep"
          register={register("cep")}
          placeholder="37517000"
        />
        <Flex>
          <Field.InputField
            label="Estado"
            type="text"
            name="state"
            register={register("state")}
            placeholder="MG"
          />
          <Field.InputField
            label="Cidade"
            type="text"
            name="city"
            register={register("city")}
            placeholder="Formigas"
          />
        </Flex>
        <Field.InputField
          label="Rua"
          type="text"
          name="street"
          register={register("street")}
          placeholder="Rua das macieiras"
        />
        <Flex>
          <Field.InputField
            label="Número"
            type="number"
            name="number"
            register={register("number")}
            placeholder="25"
          />
          <Field.InputField
            label="Complemento"
            type="text"
            name="complement"
            register={register("complement")}
            placeholder="Casa"
          />
        </Flex>
        <Flex alignContent={"center"} justifyContent={"center"} gap={"10px"}>
          <Button
            width={"45%"}
            value={"false"}
            variant={"brand1"}
            {...register("is_seller")}
          >
            Comprador
          </Button>
          <Button
            width={"45%"}
            value={"true"}
            variant={"outline"}
            {...register("is_seller")}
          >
            Anunciante
          </Button>
        </Flex>
        <Field.InputField
          label="Senha"
          type="text"
          name="password"
          register={register("password")}
          placeholder="Insira a senha do usuário..."
        />
        <Field.InputField
          label="Confirme a senha"
          type="text"
          name="confirmPassword"
          register={register("confirmPassword")}
          placeholder="Confirme a senha do usuário..."
        />
        <Flex alignContent={"center"} justifyContent={"center"} gap={"10px"}>
          <Button type="submit" width={"98%"} variant={"brand1"}>
            Finalizar cadastro
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

const EditProfile = () => {
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

export const Form = {
  EditProfile,
  EditAddress,
  CreateAd,
  EditAd,
  CreateProfile,
  Login,
};
