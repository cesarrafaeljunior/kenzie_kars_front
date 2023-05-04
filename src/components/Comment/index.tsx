import { useUserContext } from "@/contexts/user.context";
import {
  Box,
  Button,
  Center,
  Flex,
  Img,
  List,
  ListItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Textarea } from "../Textarea";
import { ModalContainer } from "../Modal";
import { iComment } from "@/interfaces/comment.interface";
import { useCommentContext } from "@/contexts/comments.context";

export const Comments = () => {
  const { user } = useUserContext();
  const { currentComments } = useCommentContext();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as={"section"}>
      <ModalContainer.ModalCheckLogin isOpen={isOpen} onClose={onClose} />
      <Box
        bgColor={"grey.10"}
        borderRadius={"4px"}
        px={"44px"}
        py={"36px"}
        mb={"32px"}
      >
        <Text
          mb={"32px"}
          fontWeight={"semibold"}
          fontSize={"20px"}
          color={"grey.1"}
        >
          Comentários
        </Text>
        <List display={"flex"} flexDirection={"column"} gap={"44px"}>
          {currentComments.map((comment: iComment) => (
            <ListItem key={comment.id}>
              <Flex alignItems={"center"} gap={"8px"} mb={"12px"}>
                <Center
                  as={"p"}
                  bg={"brand.2"}
                  minW={"32px"}
                  boxSize={"32px"}
                  borderRadius={"50%"}
                  fontWeight={"medium"}
                  color={"white"}
                >
                  {`${comment.user.name[0]}${
                    comment.user.name.split(" ").length > 1
                      ? comment.user.name.split(" ", 2)[1][0]
                      : ""
                  }`}
                </Center>
                <Text fontWeight={"medium"} fontSize={"14px"} color={"grey.1"}>
                  {comment.user.name}
                </Text>
                <Img src={"/imgs/ellipse.png"}></Img>
                <Text fontSize={"12px"} color={"grey.3"}>
                  há 3 dias
                </Text>
              </Flex>
              <Text fontSize={"14px"} color={"grey.2"}>
                {comment.description}
              </Text>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box bgColor={"grey.10"} borderRadius={"4px"} px={"44px"} py={"36px"}>
        <Flex alignItems={"center"} gap={"8px"} mb={"15px"}>
          <Center
            as={"p"}
            bg={"brand.2"}
            minW={"32px"}
            boxSize={"32px"}
            borderRadius={"50%"}
            fontWeight={"medium"}
            color={"white"}
          >
            {user?.name
              ? `${user.name[0]}${
                  user.name.split(" ").length > 1
                    ? user.name.split(" ", 2)[1][0]
                    : ""
                }`
              : "U"}
          </Center>
          <Text fontWeight={"medium"} fontSize={"14px"} color={"grey.1"}>
            {user?.name || "Usuário"}
          </Text>
        </Flex>
        <Textarea onOpen={onOpen} />
      </Box>
    </Box>
  );
};

export const CommentSuggestions = ({ texts, setTextAreaField }: any) => {
  return (
    <Flex gap={"10px"} flexWrap={"wrap"}>
      {texts.map((text: string) => {
        return (
          <Button
            key={text}
            h={"unset"}
            variant={"unstyled"}
            fontWeight={"medium"}
            lineHeight={"24px"}
            fontSize={"12px"}
            color={"grey.3"}
            bgColor={"grey.7"}
            px={"12px"}
            borderRadius={"24px"}
            onClick={() => setTextAreaField(text)}
          >
            {text}
          </Button>
        );
      })}
    </Flex>
  );
};
