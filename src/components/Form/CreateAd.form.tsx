import { useAdvertContext } from "@/contexts/advert.context";
import { useUserContext } from "@/contexts/user.context";
import {
  iAdvertGalery,
  iAdvertisedRequest,
} from "@/interfaces/advert.interfaces";
import { iOnOpenF } from "@/interfaces/components.interfaces";
import { advertisedRequestSchema } from "@/schemas/ad.schemas";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect, ChangeEvent, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Field } from "../Field";
import { DeleteIcon } from "@chakra-ui/icons";

export const CreateAd = ({ onOpen }: iOnOpenF) => {
  const { brandsList, setBrandSelect, modelList, createAdv } =
    useAdvertContext();
  const { user } = useUserContext();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<iAdvertisedRequest>({
    resolver: yupResolver(advertisedRequestSchema),
  });
  const [modelSelect, setModelSelect] = useState("");
  const [fipeValue, setFipeValue] = useState("");
  const [priceValue, setPriceValue] = useState(0);
  const [galery, setGalery] = useState<iAdvertGalery[]>([{ image: "" }]);
  const carColors = [
    "preto",
    "branco",
    "cinza",
    "prata",
    "vermelho",
    "azul",
    "verde",
    "amarelo",
    "laranja",
    "marrom",
    "bege",
    "roxo",
    "outros",
  ];
  const handleAddImage = () => {
    setGalery([...galery, { image: "" }]);
  };

  const handleImageChange = (index: number, value: string) => {
    const updatedGalery = [...galery];
    updatedGalery[index].image = value;
    setGalery(updatedGalery);

    setValue("galery", updatedGalery);
  };

  const handleRemoveImage = (index: number) => {
    const newGalery = [...galery];
    newGalery.splice(index, 1);
    setGalery(newGalery);
  };

  const brandSelectOptions = brandsList.map((brand) => (
    <option key={brand} value={brand}>
      {brand}
    </option>
  ));
  const modelSelectOptions = modelList.map((model) => (
    <option key={model.id} value={model.id}>
      {model.name}
    </option>
  ));

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

  function formatCurrency(value: number) {
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formatter.format(value);
  }

  useEffect(() => {
    const currentModel = modelList.find((model) => model.id === modelSelect);

    if (currentModel) {
      setFipeValue(formatCurrency(currentModel.value));
      setValue("model", currentModel.name);
      setValue("year", currentModel.year);
      setValue("fipe_price", currentModel.value);
      setValue("fuel", fuelType(currentModel.fuel));
      setValue("location", user!.address.cep);
    }
  }, [modelSelect, setValue]);

  const submit = async (data: iAdvertisedRequest) => {
    await createAdv(data, onOpen);
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
      onSubmit={handleSubmit(submit)}
    >
      <Text>Informações de veículo</Text>

      <Text fontSize="sm" fontWeight={"semibold"}>
        Marca
      </Text>
      <Select
        isRequired
        fontSize={"md"}
        size="lg"
        name="brand"
        placeholder="Escolha uma marca"
        onChange={(e: any) => {
          setBrandSelect(e.target.value);
          setValue("brand", e.target.value);
        }}
      >
        {brandSelectOptions}
      </Select>

      <Text fontSize="sm" fontWeight={"semibold"}>
        Modelo
      </Text>
      <Select
        fontSize={"md"}
        size="lg"
        isRequired
        name="model"
        placeholder="Escolha um modelo"
        onChange={(e: any) => {
          setModelSelect(e.target.value);
        }}
      >
        {modelSelectOptions}
      </Select>

      <Flex>
        <Field.InputReadyOnlyField
          label="Ano"
          type="text"
          name="year"
          placeholder={"2023"}
          register={register("year")}
        />
        <Field.InputReadyOnlyField
          label="Combustível"
          type="text"
          name="fuel"
          placeholder={"Gasolina / Etanol"}
          register={register("fuel")}
        />
      </Flex>
      <Flex>
        <Field.InputField
          label="Quilometragem"
          type="number"
          name="mileage"
          placeholder="30000"
          errors={errors.mileage?.message}
          borderColor={errors.mileage ? "feedback.alert1" : "#E9ECEF"}
          register={register("mileage")}
        />

        <FormControl>
          <FormLabel
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            gap={"8px"}
          >
            <Flex>
              <Box>
                <Text
                  fontFamily="Inter, sans-serif"
                  fontSize="14px"
                  fontWeight="600"
                  color="#212529"
                >
                  Cores
                </Text>
              </Box>
            </Flex>
            <Flex flexDirection={"column"}>
              <Select
                name={"color"}
                isRequired
                placeholder="Selecione uma opção"
                fontFamily="Inter, sans-serif"
                fontSize={"md"}
                size="lg"
                onChange={(e: any) => {
                  setValue("color", e.target.value);
                }}
              >
                {carColors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </Select>
            </Flex>
          </FormLabel>
        </FormControl>
      </Flex>
      <Flex>
        <Field.InputReadyOnlyField
          isReadOnly
          label="Preço tabela FIPE"
          type="string"
          name="fipe_price"
          placeholder={fipeValue ? `${fipeValue}` : "R$ 50.000,00"}
        />
        <Field.InputField
          label="Preço"
          type="number"
          name="price"
          placeholder="R$ 50.000,00"
          errors={errors.price?.message}
          borderColor={errors.price ? "feedback.alert1" : "#E9ECEF"}
          register={register("price")}
        />
      </Flex>
      <Field.TextAreaField
        label="Descrição"
        name="description"
        placeholder="Insira a descrição do produto..."
        errors={errors.description?.message}
        borderColor={errors.description ? "feedback.alert1" : "#E9ECEF"}
        register={register("description")}
      />
      <Field.InputField
        label="Imagem da capa"
        type="text"
        name="cover_image"
        placeholder="http://site.com/imagem.jpg"
        errors={errors.cover_image?.message}
        borderColor={errors.cover_image ? "feedback.alert1" : "#E9ECEF"}
        register={register("cover_image")}
      />

      {galery.map((image, index) => (
        <FormControl key={index}>
          <FormLabel
            htmlFor={`imagem${index}`}
            fontFamily={"body"}
            fontWeight={"bold"}
            fontSize={"14px"}
          >
            {index + 1}ª imagem da galeria
            <InputGroup>
              <Input
                borderColor={errors.galery ? "feedback.alert1" : "#E9ECEF"}
                id={`imagem${index}`}
                placeholder="http://site.com/imagem.jpg"
                value={image.image}
                onChange={(e) => handleImageChange(index, e.target.value)}
              />

              <InputRightElement>
                <IconButton
                  color="grey.3"
                  variant="outline"
                  size="sm"
                  aria-label="delete"
                  icon={<DeleteIcon />}
                  onClick={() => handleRemoveImage(index)}
                />
              </InputRightElement>
            </InputGroup>
          </FormLabel>
        </FormControl>
      ))}

      <Button
        onClick={handleAddImage}
        variant={"brandOpacity"}
        size={"sm"}
        maxWidth={"320px"}
      >
        Adicionar campo para imagem da galeria
      </Button>
      <Flex alignContent={"center"} justifyContent={"flex-end"} gap={"10px"}>
        <Button width={"126px"} variant={"negative"} onClick={onOpen}>
          Cancelar
        </Button>
        <Button type="submit" width={"193px"} variant={"brand1"}>
          Criar anúncio
        </Button>
      </Flex>
    </Box>
  );
};
