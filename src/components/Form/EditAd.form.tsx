import { useUserContext } from "@/contexts/user.context";
import { iOnOpenF } from "@/interfaces/components.interfaces";
import {
  Heading,
  Flex,
  Button,
  Box,
  Text,
  Select,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Field } from "../Field";
import { useAdvertContext } from "@/contexts/advert.context";
import { iAdvertisedUpdate } from "@/interfaces/advert.interfaces";
import { advertisedUpdateSchema } from "@/schemas/ad.schemas";
import { formatValues } from "@/utils/valuesFormat.util";

export const EditAd = ({ onOpen }: iOnOpenF) => {
  const {
    brandsList,
    brandSelect,
    setBrandSelect,
    modelList,
    updateAdv,
    deleteAdv,
    advertPatchDeleteId,
    advertiseListByUser,
  } = useAdvertContext();
  const { user } = useUserContext();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<iAdvertisedUpdate>({
    resolver: yupResolver(advertisedUpdateSchema),
  });
  const [modelSelect, setModelSelect] = useState("");
  const [fipeValue, setFipeValue] = useState("");
  const [refreshGalery, setRefreshGalery] = useState(0);
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
    const galery = getValues("galery");

    galery
      ? setValue("galery", [...galery, { image: "" }])
      : setValue("galery", [{ image: "" }]);
    setRefreshGalery(refreshGalery + 1);
  };

  const handleRemoveImage = (index: number) => {
    const galery = getValues("galery");
    if (galery) {
      galery.splice(index, 1);
      setValue("galery", galery);
      setRefreshGalery(refreshGalery - 1);
    }
  };

  const brandSelectOptions = brandsList.map((brand) => (
    <option key={brand} value={brand}>
      {brand}
    </option>
  ));
  const modelSelectOptions = modelList.map((model) => (
    <option key={model.id} value={model.name}>
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

  useEffect(() => {
    handleAddImage();
    if (advertiseListByUser) {
      const initalAdvert = advertiseListByUser.results.find(
        (elem) => elem.id == advertPatchDeleteId
      );

      if (initalAdvert) {
        setBrandSelect(initalAdvert.brand);
        setValue("color", initalAdvert.color);
        setValue("cover_image", initalAdvert.cover_image);
        setValue("description", initalAdvert.description);
        setFipeValue(formatValues(initalAdvert.fipe_price.toString(), "BRL"));
        setValue("fuel", initalAdvert.fuel);
        setValue("is_avaliable", initalAdvert.is_avaliable);
        setValue("location", initalAdvert.location);
        setValue("mileage", initalAdvert.mileage);
        // @ts-expect-error
        setValue("price", formatValues(initalAdvert.price, "BRL"));
        setModelSelect(initalAdvert.model);
        setValue("year", initalAdvert.year.toString());
        setValue("galery", initalAdvert.galery);
      }
    }
  }, []);

  useEffect(() => {
    const currentModel = modelList.find((model) => model.id === modelSelect);

    if (currentModel) {
      setFipeValue(formatValues(currentModel.value, "BRL"));
      setValue("model", currentModel.name);
      setValue("year", currentModel.year);
      setValue("fipe_price", currentModel.value);
      setValue("fuel", fuelType(currentModel.fuel));
      setValue("location", user!.address.cep);
    }
  }, [modelSelect, setValue]);

  const submit = async (data: iAdvertisedUpdate) => {
    await updateAdv(data, onOpen, advertPatchDeleteId);
  };

  const deleteAdvert = (advertId: string) => {
    if (user) {
      deleteAdv(advertId, onOpen, user?.id);
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
        placeholder={"Escolha uma marca"}
        value={brandSelect}
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
        value={modelSelect}
        placeholder="Escolha um modelo"
        onChange={(e: any) => {
          setModelSelect(e.target.value);
          setValue("model", e.target.value);
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
          type="text"
          name="mileage"
          placeholder="30000"
          errors={errors.mileage?.message}
          borderColor={errors.mileage ? "feedback.alert1" : "#E9ECEF"}
          register={register("mileage", {
            onBlur(e) {
              e.target.value = formatValues(e.target.value, "KM");
            },
          })}
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
                value={getValues("color")}
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
          type="text"
          name="fipe_price"
          placeholder={fipeValue ? `${fipeValue}` : "R$ 50.000,00"}
        />
        <Field.InputField
          label="Preço"
          type="text"
          name="price"
          placeholder="R$ 50.000,00"
          errors={errors.price?.message}
          borderColor={errors.price ? "feedback.alert1" : "#E9ECEF"}
          register={register("price", {
            onBlur(e) {
              e.target.value = formatValues(e.target.value, "BRL");
            },
          })}
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
      <Heading as={"p"} fontSize={"14px"}>
        Publicado
      </Heading>
      <Flex alignContent={"center"} justifyContent={"center"} gap={"10px"}>
        <Button
          width={"45%"}
          value={"true"}
          variant={"outline"}
          _focus={{ bg: "#4529E6", border: "#4529E6", color: "white" }}
          onClick={() => setValue("is_avaliable", true)}
        >
          Sim
        </Button>
        <Button
          width={"45%"}
          value={"false"}
          variant={"outline"}
          _focus={{ bg: "#4529E6", border: "#4529E6", color: "white" }}
          onClick={() => setValue("is_avaliable", false)}
        >
          Não
        </Button>
      </Flex>
      <Field.InputField
        label="Imagem da capa"
        type="text"
        name="cover_image"
        placeholder="http://site.com/imagem.jpg"
        errors={errors.cover_image?.message}
        borderColor={errors.cover_image ? "feedback.alert1" : "#E9ECEF"}
        register={register("cover_image")}
      />

      {getValues("galery") &&
        getValues("galery").map((image, index) => (
          <Field.UrlImageField
            key={index}
            index={index}
            handleRemoveImage={handleRemoveImage}
            label={`${index + 1}ª imagem da galeria`}
            register={register(`galery.${index}.image`)}
            errors={errors.galery && errors.galery[index]?.image?.message}
          />
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
        <Button
          onClick={() => deleteAdvert(advertPatchDeleteId)}
          type="button"
          width={"193px"}
          variant={"negative"}
        >
          Excluir anuncio.
        </Button>
        <Button type="submit" width={"193px"} variant={"brand1"}>
          Salvar alterações.
        </Button>
      </Flex>
    </Box>
  );
};
