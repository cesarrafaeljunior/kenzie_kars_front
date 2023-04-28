import { iModalProps } from "@/interfaces/components.interfaces";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
} from "@chakra-ui/react";
import { HomeFilters } from "../HomeFilter/HomeFilter";

export const ModalMobileFilters = ({ isOpen, onClose }: iModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius={"0px"}>
        <ModalHeader>Filtros</ModalHeader>
        <ModalCloseButton color={"grey.4"} />
        <ModalBody>
          <Box flexDirection={"column"} gap={"35px"} display={"flex"}>
            <HomeFilters />
            <Button marginBottom={"20px"} variant={"brand1"}>
              Ver anúncios
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
