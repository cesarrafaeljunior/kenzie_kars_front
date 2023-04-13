import { ListItem, Box, Image, Heading, Text } from "@chakra-ui/react";

export const ProductCard = (advertData: any) => {
  console.log(advertData);
  return (
    <ListItem maxWidth={"320px"}>
      <Box backgroundColor={"grey.7"}>
        <Image src={advertData.advertData.coverImage}></Image>
      </Box>
      <Heading
        color={"grey.1"}
        marginTop={"15px"}
        fontSize={"16px"}
        fontWeight={"semibold"}
      >
        {advertData.advertData.model}
      </Heading>
      <Text
        marginTop={"15px"}
        color={"grey.2"}
        fontSize={"14px"}
        fontWeight={"normal"}
        textOverflow={"ellipsis"}
        paddingRight={"10px"}
      >
        {advertData.advertData.description}
      </Text>
      <Box
        gap={"8px"}
        marginTop={"20px"}
        alignItems={"center"}
        display={"flex"}
      >
        <Image
          src={advertData.advertData.adverter.profileImage}
          height={"32px"}
          width={"32px"}
          borderRadius={"50%"}
        ></Image>
        <Text fontWeight={"medium"}>
          {advertData.advertData.adverter.adverterName}
        </Text>
      </Box>
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
            {advertData.advertData.mileage}
          </Text>
          <Text
            fontWeight={"medium"}
            fontSize={"14px"}
            color={"brand.1"}
            backgroundColor={"brand.4"}
            padding={"4px"}
            borderRadius={"4px"}
          >
            {advertData.advertData.year}
          </Text>
        </Box>
        <Text
          fontWeight={"bold"}
          fontSize={"16px"}
          color={"grey.1"}
          textDecoration={""}
        >
          {advertData.advertData.price}
        </Text>
      </Box>
    </ListItem>
  );
};
