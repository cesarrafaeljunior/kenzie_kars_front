import { useAdvertContext } from "@/contexts/advert.context";
import { iModalProps } from "@/interfaces/components.interfaces";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Img,
} from "@chakra-ui/react";

export const ModalVehicleImage = ({ isOpen, onClose }: iModalProps) => {
  const { modalVehicleImage } = useAdvertContext();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent fontFamily={"Inte, sans-serif"}>
          <ModalHeader as={"h2"} fontSize={"16px"}>
            Imagem do veículo
          </ModalHeader>
          <ModalCloseButton
            border={"transparent"}
            outline={"none"}
            color={"grey.4"}
          />
          <ModalBody paddingBottom={"28px"}>
            <Img
              src={modalVehicleImage}
              alt="Car"
              bgColor={"grey.7"}
              borderRadius={"4px"}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
