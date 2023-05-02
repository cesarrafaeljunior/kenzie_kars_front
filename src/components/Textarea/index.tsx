import { useCommentContext } from "@/contexts/comments.context";
import { iOnOpenF } from "@/interfaces/components.interfaces";
import {
  Box,
  Button,
  Textarea as ChakraTextarea,
  Flex,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { CommentSuggestions } from "../Comment";

export const Textarea = ({ onOpen }: iOnOpenF) => {
  const { textAreaField, setTextAreaField, checkUserIsLogged } =
    useCommentContext();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    checkUserIsLogged(onOpen);
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
          onChange={(e) => setTextAreaField(e.target.value)}
          value={textAreaField}
          placeholder={
            "Carro muito confortável, foi uma ótima experiência de compra..."
          }
          h={"128px"}
          fontSize={"14px"}
          color={"grey.1"}
          pb={{ base: "8px", md: "50px" }}
        />
        <Button
          type={textAreaField.trim() ? "submit" : "button"}
          variant={textAreaField.trim() ? "brand1" : "disabled"}
          size={"sm"}
          mt={{ base: "24px", md: "unset" }}
          position={{ base: "unset", md: "absolute" }}
          right={"11px"}
          bottom={"13px"}
          zIndex={1000}
        >
          Comentar
        </Button>
      </Box>
      <Flex alignItems={"center"} gap={"8px"} flexWrap={"wrap"}>
        <CommentSuggestions text={"Gostei muito"} />
        <CommentSuggestions text={"Carro muito confortável!"} />
        <CommentSuggestions text={"ótimo e simpático vendedor!"} />
        <CommentSuggestions text={"Carro muito lindo e conservado!"} />
      </Flex>
    </>
  );
};
