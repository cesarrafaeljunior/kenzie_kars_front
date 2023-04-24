import {
  Box,
  Button,
  Flex,
  Text,
  Heading,
  Center,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { ChangeEvent, useState } from "react";
import { setCookie } from "nookies";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { api, apiSearchCEP } from "@/services/api";
import { Field } from "../Field";
import {
  iLogin,
  iLoginResponse,
  iUser,
  iUserRequest,
} from "@/interfaces/user.interfaces";
import { iOnOpenF } from "@/interfaces/components.interfaces";
import { loginSchema } from "@/schemas/login.schemas";
import { userRequestSchema } from "@/schemas/user.schemas";
import { Link } from "../Link";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const submitFunction = async (data: iLogin) => {
    await api
      .post<iLoginResponse>("/login", data)
      .then((resp) => {
        toast.success("login realizado");
        setCookie(null, "ms.token", resp.data.token, {
          maxAge: 60 * 30,
          path: "/",
        });
        router.push("/profile");
      })
      .catch((err) => {
        toast.error(err.message);
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
        placeholder="Digite seu email"
        name="email"
        borderColor={errors.email ? "feedback.alert1" : "#E9ECEF"}
        register={register("email")}
      />

      <Text color="feedback.alert1">{errors.email?.message}</Text>
      <InputGroup h={"100%"}>
        <InputRightElement h={"100%"}>
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
        <Field.InputField
          label="Senha"
          type={showPassword ? "text" : "password"}
          placeholder="Digite sua senha"
          name="password"
          borderColor={errors.password ? "feedback.alert1" : "#E9ECEF"}
          register={register("password")}
        />
      </InputGroup>
      <Text color="feedback.alert1">{errors.password?.message}</Text>
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
      <Center>
        <Link w={"315px"} href="/register" variant={"linDefault"}>
          Cadastrar
        </Link>
      </Center>
    </Box>
  );
};

const CreateProfile = ({ onOpen }: iOnOpenF) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const submitFunction = async (data: iUserRequest) => {
    await api
      .post<iUser>("/users", data)
      .then((resp) => {
        onOpen();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.data.message);
      });
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
      onSubmit={handleSubmit(submitFunction)}
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
      />
      <Text color="feedback.alert1">{errors.name?.message}</Text>
      <Field.InputField
        label="Email"
        type="email"
        name="email"
        register={register("email")}
        borderColor={errors.email ? "feedback.alert1" : "#E9ECEF"}
        placeholder="Informe seu email"
      />
      <Text color="feedback.alert1">{errors.email?.message}</Text>
      <Field.InputField
        label="CPF"
        type="text"
        name="cpf"
        register={register("cpf")}
        borderColor={errors.cpf ? "feedback.alert1" : "#E9ECEF"}
        placeholder="9000800900900"
      />
      <Text color="feedback.alert1">{errors.cpf?.message}</Text>
      <Field.InputField
        label="Celular"
        type="tel"
        name="phone_number"
        register={register("phone_number")}
        borderColor={errors.phone_number ? "feedback.alert1" : "#E9ECEF"}
        placeholder="Informe o telefone com DDD"
      />
      <Text color="feedback.alert1">{errors.phone_number?.message}</Text>
      <Field.InputField
        label="Data de nascimento"
        type="date"
        name="birthdate"
        register={register("birthdate")}
        borderColor={errors.birthdate ? "feedback.alert1" : "#E9ECEF"}
        placeholder="mês/dia/ano"
      />
      {errors.birthdate ? (
        <Text color="feedback.alert1">Birthdate is a required Field</Text>
      ) : null}
      <Field.TextField
        label="Descrição"
        name="description"
        register={register("description")}
        borderColor={errors.description ? "feedback.alert1" : "#E9ECEF"}
        placeholder="Insira a descrição do seu usuário"
      />
      <Text color="feedback.alert1">{errors.description?.message}</Text>
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
        />
        <Text color="feedback.alert1">{errors.address?.cep?.message}</Text>
        <Flex>
          <Field.InputField
            label="Estado"
            type="text"
            name="state"
            register={register("address.state")}
            borderColor={errors.address?.state ? "feedback.alert1" : "#E9ECEF"}
            placeholder="Estado"
          />
          <Field.InputField
            label="Cidade"
            type="text"
            name="city"
            register={register("address.city")}
            borderColor={errors.address?.city ? "feedback.alert1" : "#E9ECEF"}
            placeholder="Cidade"
          />
        </Flex>
        <Field.InputField
          label="Rua"
          type="text"
          name="street"
          register={register("address.street")}
          borderColor={errors.address?.street ? "feedback.alert1" : "#E9ECEF"}
          placeholder="Logradouro"
        />
        <Text color="feedback.alert1">{errors.address?.street?.message}</Text>
        <Flex>
          <Field.InputField
            label="Número"
            type="number"
            name="number"
            register={register("address.number")}
            borderColor={errors.address?.number ? "feedback.alert1" : "#E9ECEF"}
            placeholder="Número"
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
          />
        </Flex>
        <Flex alignContent={"center"} justifyContent={"center"} gap={"10px"}>
          <Button
            width={"45%"}
            value={"false"}
            variant={"outline"}
            _focus={{ bg: "#4529E6", border: "#4529E6", color: "white" }}
            {...register("is_seller")}
          >
            Comprador
          </Button>
          <Button
            width={"45%"}
            value={"true"}
            variant={"outline"}
            _focus={{ bg: "#4529E6", border: "#4529E6", color: "white" }}
            {...register("is_seller")}
          >
            Anunciante
          </Button>
        </Flex>
        <InputGroup h={"100%"}>
          <InputRightElement h={"100%"}>
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
          <Field.InputField
            label="Senha"
            type={showPassword ? "text" : "password"}
            name="password"
            register={register("password")}
            borderColor={errors.password ? "feedback.alert1" : "#E9ECEF"}
            placeholder="Insira uma senha"
          />
        </InputGroup>

        <Text color="feedback.alert1">{errors.password?.message}</Text>
        <InputGroup>
          <InputRightElement h={"100%"}>
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
            />
          </InputRightElement>
          <Field.InputField
            label="Confirme a senha"
            type={showConfirmPassword ? "text" : "password"}
            name="confirm_password"
            register={register("confirm_password")}
            borderColor={
              errors.confirm_password ? "feedback.alert1" : "#E9ECEF"
            }
            placeholder="Confirme sua senha"
          />
        </InputGroup>
        <Text color="feedback.alert1">{errors.confirm_password?.message}</Text>
        <Flex
          alignContent={"center"}
          flexDirection="column"
          justifyContent={"center"}
          gap={"10px"}
        >
          <Button type="submit" width={"98%"} variant={"brand1"}>
            Finalizar cadastro
          </Button>
          <Link href="/login" border={"none"} fontWeight={"400"}>
            Iniciar sessão
          </Link>
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
      {/* <Field.InputField
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
      /> */}
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
      {/* <Field.InputField
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
        /> */}
      {/* </Flex> */}
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

export const Form = {
  EditProfile,
  EditAddress,
  CreateAd,
  EditAd,
  CreateProfile,
  Login,
};
