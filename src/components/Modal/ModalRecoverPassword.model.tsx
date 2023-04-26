import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Text,
} from "@chakra-ui/react";
import { Form } from "../Form";
import { iModalProps } from "@/interfaces/components.interfaces";

export const ModalRecoverPassword = ({ isOpen, onClose }: iModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent fontFamily={"Inter, sans-serif"}>
        <ModalCloseButton border={"transparent"} outline={"none"} />
        <ModalHeader as={"h2"} fontSize={"16px"}>
          Recuperação de senha
        </ModalHeader>
        <ModalBody paddingBottom={"28px"}>
          <Text fontSize={"14px"} color={"grey.3"} marginBottom={"20px"}>
            Para recuperar sua senha, informe seu endereço de email que nós
            enviaremos um link para a alteração da senha
          </Text>
          <Form.RecoverySubmitEmail />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
