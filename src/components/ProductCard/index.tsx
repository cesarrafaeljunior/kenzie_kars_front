import { iAdvert } from "@/interfaces/advert.interfaces";
import { iUser } from "@/interfaces/user.interfaces";
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
} from "@chakra-ui/react";
import { useRouter } from "next/router";

interface iProductCard {
  advertData: Omit<iAdvert, "user">;
  seller?: iUser | null;
  isSeller?: boolean;
}

export const ProductCard = ({
  advertData,
  seller = null,
  isSeller,
}: iProductCard) => {
  const router = useRouter();

  return (
    <ListItem maxWidth={"312px"} minWidth={"312px"} p={"16px"}>
      <Box backgroundColor={"grey.7"} w="max-content">
        <Image src={advertData.cover_image} width={{ base: "300px" }} />
      </Box>
      <Heading
        color={"grey.1"}
        marginTop={"15px"}
        fontSize={"16px"}
        fontWeight={"semibold"}
      >
        {advertData.model}
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
      <Box
        marginTop={"15px"}
        display={"flex"}
        flexDirection="column"
        justifyContent={"space-between"}
      >
        <Box display={"flex"} gap={"8px"}>
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
        </Box>
        <Text
          fontWeight={"bold"}
          fontSize={"16px"}
          color={"grey.1"}
          textDecoration={""}
        >
          {formatValues(advertData.price, "BRL")}
        </Text>
        {router.pathname == "/profile" && isSeller ? (
          <Flex gap={"16px"} m="16px 0 0 0">
            <Button h="38px" variant={"outline"}>
              Editar
            </Button>
            <Button h="38px" variant={"outline"}>
              Ver detalhes
            </Button>
          </Flex>
        ) : null}
      </Box>
    </ListItem>
  );
};
