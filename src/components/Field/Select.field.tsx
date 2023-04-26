import { iSelect } from "@/interfaces/components.interfaces";
import { FormControl, FormLabel, Flex, Select, Text } from "@chakra-ui/react";

export const SelectField = ({ label, children, errors }: iSelect) => {
  return (
    <FormControl>
      <FormLabel
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={"8px"}
      >
        <Text
          fontSize="14px"
          fontWeight="600"
          color="#212529"
          fontFamily="Inter, sans-serif"
        >
          {label}
        </Text>
        <Flex flexDirection={"column"}>
          <Select
            placeholder="Selecione uma opção"
            w="100%"
            height="48px"
            color="#868E96"
            borderColor="#E9ECEF"
            border="solid 1px transparent"
            _focus={{ border: "solid 1.5px #5126EA" }}
            _hover={{ bg: "#F1F3F5" }}
            variant={{ outline: "none" }}
            fontFamily="Inter, sans-serif"
          >
            {children}
          </Select>
          <Text color="feedback.alert1" fontSize={"14px"}>
            {errors}
          </Text>
        </Flex>
      </FormLabel>
    </FormControl>
  );
};
