import { useAdvertContext } from "@/contexts/advert.context";
import { useUserContext } from "@/contexts/user.context";
import {
  iAdvertGallery,
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
  const [fipe, setFipe] = useState<string>("");
  const [gallery, setGallery] = useState<iAdvertGallery[]>([{ image: "" }]);

  const handleAddImage = () => {
    setGallery([...gallery, { image: "" }]);
  };

  const handleImageChange = (index: number, value: string) => {
    const newGallery = [...gallery];
    newGallery[index].image = value;
    setGallery(newGallery);
  };

  const handleRemoveImage = (index: number) => {
    const newGallery = [...gallery];
    newGallery.splice(index, 1);
    setGallery(newGallery);
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

  useEffect(() => {
    const currentModel = modelList.find((model) => model.id === modelSelect);

    if (currentModel) {
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
          label="Preço tabela FIPE"
          type="string"
          name="fipe_price"
          placeholder="R$ 51.000,00"
          value={fipe}
          register={register("fipe_price")}
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
        placeholder="https://image.com"
        errors={errors.cover_image?.message}
        borderColor={errors.cover_image ? "feedback.alert1" : "#E9ECEF"}
        register={register("cover_image")}
      />

      {gallery.map((image, index) => (
        <FormControl key={index}>
          <FormLabel
            htmlFor={`imagem${index}`}
            fontFamily={"body"}
            fontWeight={"bold"}
            fontSize={"14px"}
          >
            {index + 1}ª imagem da galeria
          </FormLabel>
          <InputGroup>
            <Input
              id={`imagem${index}`}
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
