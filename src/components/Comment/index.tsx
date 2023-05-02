import { useUserContext } from "@/contexts/user.context";
import {
  Box,
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

export const Comments = () => {
  const { user } = useUserContext();

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
          {[1, 2, 3, 4].map((number) => (
            <ListItem key={number}>
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
                  JL
                </Center>
                <Text fontWeight={"medium"} fontSize={"14px"} color={"grey.1"}>
                  Júlia Lima
                </Text>
                <Img src={"/imgs/ellipse.png"}></Img>
                <Text fontSize={"12px"} color={"grey.3"}>
                  há 3 dias
                </Text>
              </Flex>
              <Text fontSize={"14px"} color={"grey.2"}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
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
