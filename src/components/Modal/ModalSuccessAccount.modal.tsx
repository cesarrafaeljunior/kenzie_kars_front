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

export const ModalSuccessAccount = ({ isOpen, onClose }: iModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent fontFamily={"Inte, sans-serif"}>
        <ModalHeader fontSize={"16px"}>
          <Text as="h2" color={"grey.1"} fontSize={"16px"}>
            <strong>Sucesso!</strong>
          </Text>
        </ModalHeader>
        <ModalCloseButton border={"transparent"} outline={"none"} />
        <ModalBody paddingBottom={"28px"}>
          <Text color={"grey.1"} fontSize={"16px"}>
            <strong>Sua conta foi criada com sucesso!</strong>
          </Text>
          <Text color={"grey.2"} fontSize={"16px"}>
            Agora você poderá ver seu negócio crescendo em grande escala
          </Text>
        </ModalBody>
        <ModalFooter display={"flex"} justifyContent={"flex-start"}>
          <Link href="/login" variant={"brand1"}>
            Ir para login
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
