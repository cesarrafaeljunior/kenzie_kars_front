import { iModalProps } from "@/interfaces/components.interfaces";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import { Form } from "../Form";

export const ModalCreateAd = ({ isOpen, onClose }: iModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent fontFamily={"Inte, sans-serif"}>
        <ModalCloseButton border={"transparent"} outline={"none"} />
        <ModalHeader as={"h2"} fontSize={"16px"}>
          Criar anúncio
        </ModalHeader>
        <ModalBody paddingBottom={"28px"}>
          <Form.CreateAd onOpen={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
