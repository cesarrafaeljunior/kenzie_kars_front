import { iModalProps } from "@/interfaces/components.interfaces";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
} from "@chakra-ui/react";
import { Link } from "../Link";

export const ModalCheckLogin = ({ isOpen, onClose }: iModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent fontFamily={"Inte, sans-serif"}>
        <ModalHeader fontSize={"16px"}>
          <Text as="h2" color={"grey.1"} fontSize={"16px"}>
            Aviso!
          </Text>
        </ModalHeader>
        <ModalCloseButton border={"transparent"} outline={"none"} />
        <ModalBody paddingBottom={"28px"}>
          <Text color={"grey.1"} fontSize={"16px"}>
            <strong>
              É preciso estar logado para registrar um comentário!
            </strong>
          </Text>
          <Text color={"grey.2"} fontSize={"16px"}>
            Crie uma conta de usuário, ou se ja possuir, efetue o login para
            registrar um comentário.
          </Text>
        </ModalBody>
        <ModalFooter display={"flex"} justifyContent={"space-between"}>
          <Link href="/login" variant={"brand1"}>
            Ir para login
          </Link>
          <Link href="/register" variant={"brand1"}>
            Criar uma conta
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
