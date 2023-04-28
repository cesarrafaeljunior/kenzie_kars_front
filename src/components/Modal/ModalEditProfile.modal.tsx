import { iModalProps } from "@/interfaces/components.interfaces";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { Form } from "../Form";

export const ModalEditProfile = ({ isOpen, onClose }: iModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent fontFamily={"Inte, sans-serif"}>
          <ModalHeader as={"h2"} fontSize={"16px"}>
            Editar Perfil
          </ModalHeader>
          <ModalCloseButton border={"transparent"} outline={"none"} />
          <ModalBody paddingBottom={"28px"}>
            <Form.EditProfile onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
