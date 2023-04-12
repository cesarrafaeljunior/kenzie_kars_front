import { Flex, Img, Text, IconButton } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

export const Footer = () => {
  return (
    <Flex
      as="section"
      bg={"grey.0"}
      minHeight={"140px"}
      padding={"0 59px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      fontFamily={"Inter, sans-serif"}
      fontSize={"sm"}
    >
      <Img src="/imgs/motor_shop.png" alt="logo" objectFit={"contain"} />
      <Text color={"grey.whiteFixed"}>
        @2022 - Todos os direitos reservados
      </Text>
      <IconButton
        bg="grey.1"
        aria-label="Footer"
        icon={<ChevronUpIcon />}
        _focus={{ bg: "grey.1" }}
        _hover={{ bg: "grey.2" }}
        size={"lg"}
      />
    </Flex>
  );
};
