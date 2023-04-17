import { iAdvert } from "@/interfaces/advert.interfaces";
import { iUser } from "@/interfaces/user.interfaces";
import { ListItem, Box, Image, Heading, Text, Center } from "@chakra-ui/react";

interface iProductCard {
  advertData: iAdvert;
  seller?: iUser | null;
}

export const ProductCard = ({ advertData, seller = null }: iProductCard) => {
  return (
    <ListItem maxWidth={"340px"} minWidth={"340px"}>
      <Box backgroundColor={"grey.7"}>
        <Image src={advertData.cover_image} />
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
      <Box marginTop={"15px"} display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} gap={"8px"}>
          <Text
            fontWeight={"medium"}
            color={"brand.1"}
            fontSize={"14px"}
            backgroundColor={"brand.4"}
            padding={"4px"}
            borderRadius={"4px"}
          >
            {`${advertData.mileage} KM`}
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
          {`R$ ${advertData.price}`}
        </Text>
      </Box>
    </ListItem>
  );
};
