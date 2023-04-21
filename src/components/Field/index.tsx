import {
  iInput,
  iInputPassword,
  iSelect,
  iTextArea,
} from "@/interfaces/components.interfaces";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
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
      </FormLabel>
    </FormControl>
  );
};

const InputFieldPassword = ({
  id,
  label,
  type,
  placeholder,
  register,
  borderColor,
  show,
  setShow,
  namePassword,
  setNamePassword,
}: any) => {
  const handleClick = () => {
    setNamePassword(id);
    setShow(!show);
  };
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
        <InputGroup>
          <InputRightElement h={"100%"}>
            <IconButton
              h={"100%"}
              bg="transparent"
              size={"md"}
              color={"black"}
              border="none"
              aria-label="Search database"
              _hover={{ bg: "none", border: "none", color: "grey.2" }}
              icon={
                show && namePassword == id ? (
                  <ViewIcon w={6} h={6} />
                ) : (
                  <ViewOffIcon w={6} h={6} />
                )
              }
              onClick={() => handleClick()}
            />
          </InputRightElement>
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
        </InputGroup>
      </FormLabel>
    </FormControl>
  );
};

const TextField = ({
  label,
  placeholder,
  register,
  borderColor,
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
      </FormLabel>
    </FormControl>
  );
};

const SelectField = ({ label, children }: iSelect) => {
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
    </FormControl>
  );
};

export const Field = { InputField, TextField, SelectField, InputFieldPassword };
