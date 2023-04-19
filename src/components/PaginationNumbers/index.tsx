import { Box, Text } from "@chakra-ui/react";

export const PaginationNumbers = () => {
  return (
    <Box
      width={"100%"}
      justifyContent={"center"}
      paddingRight={{ base: "0px", md: "65px" }}
      gap={"30px"}
      fontSize={"24px"}
      display={"flex"}
      flexDirection={{ base: "column", md: "unset" }}
      alignItems={{ base: "center", md: "unset" }}
      fontWeight={"bold"}
      marginTop={"80px"}
    >
      <Box display={"flex"} gap={"5px"}>
        <Text color={"grey.3"}>1 </Text>
        <Text color={"grey.4"}> de 2</Text>
      </Box>
      <Text color={"brand.1"}>Seguinte {">"}</Text>
    </Box>
  );
};
