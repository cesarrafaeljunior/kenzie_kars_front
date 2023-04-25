import { iInput, iSelect, iTextArea } from "@/interfaces/components.interfaces";
import { apiSearchCEP } from "@/services/api";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";

const InputField = ({
  label,
  type,
  placeholder,
  register,
  borderColor,
  errors,
  isReadOnly,
  isDisable,
}: iInput) => {
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
          <Input
            type={type}
            placeholder={placeholder}
            w="100%"
            height="48px"
            _placeholder={{ color: "#868E96" }}
            border="solid 1px transparent"
            borderColor={borderColor}
            _focus={{ border: "solid 1.5px #5126EA" }}
            _hover={{ bg: "#F1F3F5" }}
            variant={{ outline: "none" }}
            fontFamily="Inter, sans-serif"
            {...register}
          />
          <Text color="feedback.alert1" fontSize={"14px"}>
            {errors}
          </Text>
        </Flex>
      </FormLabel>
    </FormControl>
  );
};

const TextField = ({
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

const SelectField = ({ label, children, errors }: iSelect) => {
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

export const Field = { InputField, TextField, SelectField };
