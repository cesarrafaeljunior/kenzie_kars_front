import { useCommentContext } from "@/contexts/comments.context";
import { iOnOpenF } from "@/interfaces/components.interfaces";
import {
  Box,
  Button,
  Textarea as ChakraTextarea,
  Flex,
} from "@chakra-ui/react";
import { CommentSuggestions } from "../Comment";
import { iCommentRequest } from "@/interfaces/comment.interface";
import { FormEvent } from "react";

export const Textarea = ({ onOpen }: iOnOpenF) => {
  const { textAreaField, setTextAreaField, checkUserIsLogged, createComment } =
    useCommentContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const description: iCommentRequest = {
      description: textAreaField,
    };

    checkUserIsLogged(onOpen);
    createComment(description);
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
          value={textAreaField}
          onChange={(e) => setTextAreaField(e.target.value)}
          placeholder={
            "Carro muito confortável, foi uma ótima experiência de compra..."
          }
          h={"128px"}
          fontSize={"14px"}
          color={"grey.1"}
          pb={{ base: "8px", md: "50px" }}
        />
        <Button
          type={textAreaField ? "submit" : "button"}
          variant={textAreaField ? "brand1" : "disabled"}
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
        <CommentSuggestions
          setTextAreaField={setTextAreaField}
          texts={[
            "Gostei muito",
            "Carro muito confortável!",
            "ótimo e simpático vendedor!",
            "Carro muito lindo e conservado!",
          ]}
        />
      </Flex>
    </>
  );
};
