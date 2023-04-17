import {
  Box,
  Button,
  Textarea as ChakraTextarea,
  Flex,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";

export const Textarea = () => {
  const [textareaField, setTextareaField] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(textareaField.trim());
  };

  return (
    <>
      <Box
        onSubmit={handleSubmit}
        as={"form"}
        mb={{ base: "24px", md: "15px" }}
        position={"relative"}
      >
        <ChakraTextarea
          onChange={(e) => setTextareaField(e.target.value)}
          value={textareaField}
          placeholder={
            "Carro muito confortável, foi uma ótima experiência de compra..."
          }
          h={"128px"}
          fontSize={"14px"}
          color={"grey.1"}
          pb={{ base: "8px", md: "50px" }}
        />
        <Button
          type={textareaField.trim() ? "submit" : "button"}
          variant={textareaField.trim() ? "brand1" : "disabled"}
          size={"sm"}
          mt={{ base: "24px", md: "unset" }}
          position={{ base: "unset", md: "absolute" }}
          right={"11px"}
          bottom={"13px"}
        >
          Comentar
        </Button>
      </Box>
      <Flex alignItems={"center"} gap={"8px"} flexWrap={"wrap"}>
        <Button
          onClick={(e) => {
            const target = e.target as HTMLButtonElement;
            setTextareaField(target.innerText);
          }}
          h={"unset"}
          variant={"unstyled"}
          fontWeight={"medium"}
          lineHeight={"24px"}
          fontSize={"12px"}
          color={"grey.3"}
          bgColor={"grey.7"}
          px={"12px"}
          borderRadius={"24px"}
        >
          Gostei muito!
        </Button>

        <Button
          onClick={(e) => {
            const target = e.target as HTMLButtonElement;
            setTextareaField(target.innerText);
          }}
          h={"unset"}
          variant={"unstyled"}
          fontWeight={"medium"}
          lineHeight={"24px"}
          fontSize={"12px"}
          color={"grey.3"}
          bgColor={"grey.7"}
          px={"12px"}
          borderRadius={"24px"}
        >
          Incrível
        </Button>
        <Button
          onClick={(e) => {
            const target = e.target as HTMLButtonElement;
            setTextareaField(target.innerText);
          }}
          h={"unset"}
          variant={"unstyled"}
          fontWeight={"medium"}
          lineHeight={"24px"}
          fontSize={"12px"}
          color={"grey.3"}
          bgColor={"grey.7"}
          px={"12px"}
          borderRadius={"24px"}
        >
          Recomendarei para meus amigos!
        </Button>
      </Flex>
    </>
  );
};
