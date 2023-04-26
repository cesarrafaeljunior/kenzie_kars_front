import { useAdvertContext } from "@/contexts/advert.context";
import { useUserContext } from "@/contexts/user.context";
import { iAdvertisedRequest } from "@/interfaces/advert.interfaces";
import { iOnOpenF } from "@/interfaces/components.interfaces";
import { advertisedRequestSchema } from "@/schemas/ad.schemas";
import { Box, Button, Flex, Select, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Field } from "../Field";

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

  const [modelSelect, setModelSelect] = useState();
  const [fuel, setFuel] = useState<number>();
  const [fuelDescription, setfuelDescription] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [fipe, setFipe] = useState<string>("");
  const brandSelectOptions = [];
  const modelSelectOptions = [];

  for (let i = 0; i < brandsList.length; i++) {
    brandSelectOptions.push(
      <option key={brandsList[i]} value={brandsList[i]}>
        {brandsList[i]}
      </option>
    );
  }
  for (let i = 0; i < modelList.length; i++) {
    modelSelectOptions.push(
      <option key={modelList[i].id} value={modelList[i].id}>
        {modelList[i].name}
      </option>
    );
  }

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
      setFipe(
        currentModel.value.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })
      );
      setFuel(currentModel.fuel);
      setfuelDescription(fuelType(currentModel.fuel));
      setValue("model", currentModel.name);
      setValue("year", currentModel.year);
      setValue("fipe_price", currentModel.value);
      setValue("fuel", fuelType(currentModel.fuel));
      setValue("location", user!.address.cep);
    }
  }, [modelSelect, user]);

  const submit = async (data: iAdvertisedRequest) => {
    await createAdv(data, onOpen);
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
      onSubmit={handleSubmit(submit)}
    >
      <Text>Informações de veículo</Text>
      <Field.InputField
        label="Titulo do Anuncio"
        type="text"
        name="title"
        placeholder="Digite um título"
        borderColor={errors.title ? "feedback.alert1" : "#E9ECEF"}
        errors={errors.title?.message}
        register={register("title")}
      />

      <Text fontSize="sm" fontWeight={"semibold"}>
        Marca
      </Text>
      <Select
        isRequired
        name="brand"
        borderColor={errors.brand ? "feedback.alert1" : "#E9ECEF"}
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
        isRequired
        name="model"
        placeholder="Escolha um modelo"
        onChange={(e: any) => {
          setModelSelect(e.target.value);
        }}
        borderColor={errors.model ? "feedback.alert1" : "#E9ECEF"}
      >
        {modelSelectOptions}
      </Select>

      <Flex>
        <Field.InputReadyOnlyField
          label="Ano"
          type="text"
          name="year"
          placeholder={year ? year : "2023"}
          errors={errors.year?.message}
          borderColor={errors.year ? "feedback.alert1" : "#E9ECEF"}
        />
        <Field.InputReadyOnlyField
          label="Combustível"
          type="text"
          name="fuel"
          placeholder={fuelDescription ? fuelDescription : "Gasolina / Etanol"}
          errors={errors.fuel?.message}
          borderColor={errors.fuel ? "feedback.alert1" : "#E9ECEF"}
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
        <Field.InputField
          label="Cor"
          type="text"
          name="color"
          placeholder="Branco"
          errors={errors.color?.message}
          borderColor={errors.color ? "feedback.alert1" : "#E9ECEF"}
          register={register("color")}
        />
      </Flex>
      <Flex>
        <Field.InputReadyOnlyField
          isReadOnly
          label="Preço tabela FIPE"
          type="string"
          name="fipe_price"
          placeholder={fipe ? `${fipe}` : "R$ 50.000,00"}
          errors={errors.fipe_price?.message}
          borderColor={errors.fipe_price ? "feedback.alert1" : "#E9ECEF"}
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
      <Field.TextField
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
        placeholder="https://image.com"
        errors={errors.cover_image?.message}
        borderColor={errors.cover_image ? "feedback.alert1" : "#E9ECEF"}
        register={register("cover_image")}
      />

      <Field.InputField
        label="1° Imagem da galeria"
        type="text"
        name="text"
        placeholder="https://image.com"
      />

      <Button variant={"brandOpacity"} size={"sm"} maxWidth={"320px"}>
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
