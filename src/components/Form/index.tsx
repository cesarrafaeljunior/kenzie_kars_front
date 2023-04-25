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
  Select,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { ChangeEvent, useEffect, useState } from "react";
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
  tUserRecoverEmail,
  tUserRecoverPassword,
} from "@/interfaces/user.interfaces";
import { iOnOpenF } from "@/interfaces/components.interfaces";
import { loginSchema } from "@/schemas/login.schemas";
import {
  userRecoverEmail,
  userRecoverPassword,
  userRequestSchema,
} from "@/schemas/user.schemas";
import { Link } from "../Link";
import { ModalContainer } from "../Modal";
import { useAdvertContext } from "@/contexts/advert.context";
import { advertisedRequestSchema } from "@/schemas/ad.schemas";
import { iAdvertisedRequest } from "@/interfaces/context.interfaces";
import { useAuthContext } from "@/contexts/auth.context";
import { useUserContext } from "@/contexts/user.context";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
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
        <Field.InputField
          label="Senha"
          type={showPassword ? "text" : "password"}
          placeholder="Digite sua senha"
          name="password"
          borderColor={errors.password ? "feedback.alert1" : "#E9ECEF"}
          register={register("password")}
          errors={errors.email?.message}
        />
      </InputGroup>
      <Flex justifyContent={"flex-end"}>
        <ModalContainer.ModalRecoverPassword />
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
      <Field.TextField
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
//////////////////////////////////////////////////////////////////
const CreateAd = () => {
  const { brandsList, setBrandSelect, modelList } = useAdvertContext();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<iAdvertisedRequest>({
    resolver: yupResolver(advertisedRequestSchema),
  });

  const brandSelectOptions = [];
  for (let i = 0; i < brandsList.length; i++) {
    brandSelectOptions.push(
      <option key={brandsList[i]} value={brandsList[i]}>
        {brandsList[i]}
      </option>
    );
  }
  const modelSelectOptions = [];
  for (let i = 0; i < modelList.length; i++) {
    modelSelectOptions.push(
      <option key={modelList[i].id} value={modelList[i].id}>
        {modelList[i].name}
      </option>
    );
  }

  const [modelSelect, setModelSelect] = useState();
  const [fuel, setFuel] = useState<number>();
  const [fuelDescription, setfuelDescription] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [fipe, setFipe] = useState<number>();

  useEffect(() => {
    const currentModel = modelList.find((model) => model.id === modelSelect);
    const fuelType = (fuel: number) => {
      if (fuel === 1) {
        return "Flex";
      } else if (fuel === 2) {
        return "Híbrido";
      } else if (fuel === 3) {
        return "Elétrico";
      }
      return "";
    };

    if (currentModel) {
      setYear(currentModel.year);
      setFipe(currentModel.value);
      setFuel(currentModel.fuel);
      setfuelDescription(fuelType(currentModel.fuel));
      setValue("year", currentModel.year);
      setValue("price", currentModel.value);
      setValue("fuel", fuelType(currentModel.fuel));
    }
  }, [modelSelect]);

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
      <Text fontSize="sm" fontWeight={"semibold"}>
        Marca
      </Text>
      <Select
        placeholder="Select option"
        onChange={(e: any) => {
          setBrandSelect(e.target.value);
        }}
      >
        {brandSelectOptions}
      </Select>

      <Text fontSize="sm" fontWeight={"semibold"}>
        Modelo
      </Text>
      <Select
        placeholder="Select model"
        onChange={(e: any) => {
          setModelSelect(e.target.value);
        }}
      >
        {modelSelectOptions}
      </Select>

      <Flex>
        <Field.InputField
          isDisable
          label="Ano"
          type="text"
          name="year"
          register={register("year")}
          placeholder={year}
        />
        <Field.InputField
          isReadOnly={true}
          label="Combustível"
          type="number"
          name="fuel"
          placeholder={fuelDescription}
        />
      </Flex>
      <Flex>
        <Field.InputField
          label="Quilometragem"
          type="number"
          name="milage"
          placeholder="30000"
        />
        <Field.InputField
          label="Cor"
          type="text"
          name="color"
          placeholder="Branco"
        />
      </Flex>
      <Flex>
        <Field.InputField
          isReadOnly={true}
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

const RecoverySubmitEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tUserRecoverEmail>({
    resolver: yupResolver(userRecoverEmail),
  });

  const submitEmail = (data: tUserRecoverEmail) => {
    console.log(data);
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
      onSubmit={handleSubmit(submitEmail)}
    >
      <Field.InputField
        label="Email"
        name="email"
        placeholder="Informe seu email"
        borderColor={errors.email ? "feedback.alert1" : "#E9ECEF"}
        type="email"
        errors={errors.email?.message}
        register={register("email")}
      />
      <Button type="submit" variant={"brand1"} w="100%">
        Enviar
      </Button>
    </Box>
  );
};

const RecoveryPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tUserRecoverPassword>({
    resolver: yupResolver(userRecoverPassword),
  });

  const submitPassword = (data: tUserRecoverPassword) => {
    console.log(data);
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

export const Form = {
  EditProfile,
  EditAddress,
  CreateAd,
  EditAd,
  CreateProfile,
  Login,
  RecoverySubmitEmail,
  RecoveryPassword,
};
