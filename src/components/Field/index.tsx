import { FormLabel, Input, Select, Text, Textarea } from "@chakra-ui/react";

const InputField = ({ label, type, name, placeholder }: any) => {
  return (
    <FormLabel>
      <Text
        fontFamily="Inter, sans-serif"
        fontSize="14px"
        fontWeight="600"
        color="#212529"
      >
        {label}
      </Text>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        w="100%"
        height="48px"
        color="#868E96"
        border="solid 1px transparent"
        borderColor="#E9ECEF"
        _focus={{ border: "solid 1.5px #5126EA" }}
        _hover={{ bg: "#F1F3F5", borderColor: "#F1F3F5" }}
        variant={{ outline: "none" }}
        fontFamily="Inter, sans-serif"
      />
    </FormLabel>
  );
};

const TextField = ({ label, name, placeholder }: any) => {
  return (
    <FormLabel>
      <Text
        fontFamily="Inter, sans-serif"
        fontSize="14px"
        fontWeight="600"
        color="#212529"
      >
        {label}
      </Text>
      <Textarea
        placeholder={placeholder}
        name={name}
        w="100%"
        height="48px"
        color="#868E96"
        border="solid 1px transparent"
        borderColor="#E9ECEF"
        _focus={{ border: "solid 1.5px #5126EA" }}
        _hover={{ bg: "#F1F3F5" }}
        variant={{ outline: "none" }}
        fontFamily="Inter, sans-serif"
        resize="none"
      />
    </FormLabel>
  );
};

const SelectField = ({ label, children }: any) => {
  return (
    <FormLabel>
      <Text
        fontSize="14px"
        fontWeight="600"
        color="#212529"
        fontFamily="Inter, sans-serif"
      >
        {label}
      </Text>
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
    </FormLabel>
  );
};

export const Field = { InputField, TextField, SelectField };
