import { useAdvertContext } from "@/contexts/advert.context";
import { iProductCard } from "@/interfaces/components.interfaces";
import { formatValues } from "@/utils/valuesFormat.util";
import {
  ListItem,
  Box,
  Image,
  Heading,
  Text,
  Center,
  Button,
  Flex,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export const ProductCard = ({
  advertData,
  seller = null,
  isSeller,
  onOpen,
}: iProductCard) => {
  const router = useRouter();

  const { setAdvertPatchDeleteId } = useAdvertContext();

  return (
    <ListItem maxWidth={"312px"} minWidth={"312px"}>
      <Link href={`/home/${advertData.id}`}>
        <Box
          backgroundColor={"grey.7"}
          h={"168px"}
          px={"16px"}
          py={"8px"}
          position={"relative"}
        >
          {router.pathname == "/profile/[id]" ? (
            <Badge
              position={"absolute"}
              top={"11px"}
              left={"16px"}
              variant={advertData.is_avaliable ? "brand1" : "disabled"}
            >
              {advertData.is_avaliable ? "Ativo" : "Inativo"}
            </Badge>
          ) : null}
          {router.pathname == "/" &&
          advertData.fipe_price * 0.95 > advertData.price ? (
            <Badge
              position={"absolute"}
              top={"0"}
              right={"0"}
              variant={"goodBargain"}
              title={"Preço 5% ou mais, abaixo da fipe"}
            >
              {"$"}
            </Badge>
          ) : null}
          <Image
            src={advertData.cover_image}
            width={{ base: "300px" }}
            maxH={"100%"}
            objectFit={"contain"}
            borderRadius={"2px"}
          />
        </Box>
        <Heading
          color={"grey.1"}
          marginTop={"15px"}
          fontSize={"16px"}
          fontWeight={"semibold"}
        >
          {`${advertData.brand} - ${advertData.model}`}
        </Heading>
        <Text
          marginTop={"15px"}
          color={"grey.2"}
          fontSize={"14px"}
          fontWeight={"normal"}
          textOverflow={"ellipsis"}
          paddingRight={"10px"}
        >
          {advertData.description}
        </Text>
        {seller && (
          <Box
            gap={"8px"}
            marginTop={"20px"}
            alignItems={"center"}
            display={"flex"}
          >
            <Center
              as={"p"}
              bg={"brand.2"}
              minW={"32px"}
              boxSize={"32px"}
              borderRadius={"50%"}
              fontWeight={"bold"}
              fontSize={"14px"}
              color={"white"}
            >
              {`${seller.name[0]}${
                seller.name.split(" ").length > 1
                  ? seller.name.split(" ", 2)[1][0]
                  : ""
              }`}
            </Center>
            <Text fontWeight={"medium"}>{seller.name}</Text>
          </Box>
        )}

        <Box display={"flex"} gap={"8px"} marginTop={"15px"}>
          <Text
            fontWeight={"medium"}
            color={"brand.1"}
            fontSize={"14px"}
            backgroundColor={"brand.4"}
            padding={"4px"}
            borderRadius={"4px"}
          >
            {`${formatValues(advertData.mileage, "KM")} KM`}
          </Text>
          <Text
            fontWeight={"medium"}
            fontSize={"14px"}
            color={"brand.1"}
            backgroundColor={"brand.4"}
            padding={"4px"}
            borderRadius={"4px"}
          >
            {advertData.year}
          </Text>
          <Spacer />
          <Text
            fontWeight={"bold"}
            fontSize={"16px"}
            color={"grey.1"}
            textDecoration={""}
          >
            {formatValues(advertData.price, "BRL")}
          </Text>
        </Box>
      </Link>
      {router.pathname == "/profile" && isSeller ? (
        <Flex gap={"16px"} m="16px 0 0 0">
          <Button
            onClick={() => {
              if (onOpen) {
                onOpen();
                setAdvertPatchDeleteId(advertData.id);
              }
            }}
            h="38px"
            variant={"outline"}
          >
            Editar
          </Button>
          <Button h="38px" variant={"outline"}>
            Ver detalhes
          </Button>
        </Flex>
      ) : null}
    </ListItem>
  );
};
