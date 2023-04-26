import { iTextArea } from "@/interfaces/components.interfaces";
import { FormControl, FormLabel, Flex, Textarea, Text } from "@chakra-ui/react";

export const TextAreaField = ({
  label,
  placeholder,
  register,
  borderColor,
  errors,
}: iTextArea) => {
  return (
    <FormControl>
      <FormLabel
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={"8px"}
      >
        <Text
          fontFamily="Inter, sans-serif"
          fontSize="14px"
          fontWeight="600"
          color="#212529"
        >
          {label}
        </Text>
        <Flex flexDirection={"column"}>
          <Textarea
            placeholder={placeholder}
            {...register}
            w="100%"
            height="48px"
            color="#868E96"
            border="solid 1px transparent"
            borderColor={borderColor}
            _focus={{ border: "solid 1.5px #5126EA" }}
            _hover={{ bg: "#F1F3F5" }}
            variant={{ outline: "none" }}
            fontFamily="Inter, sans-serif"
            resize="none"
          />
          <Text color="feedback.alert1" fontSize={"14px"}>
            {errors}
          </Text>
        </Flex>
      </FormLabel>
    </FormControl>
  );
};
