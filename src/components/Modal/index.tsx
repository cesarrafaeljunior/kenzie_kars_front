import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { Img } from "@chakra-ui/react";

const ModalVehicleImage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box onClick={onOpen}>
        <Img src="/imgs/mock_car.png" alt="Car" />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader as={"h2"} fontSize={"16px"}>
            Imagem do veículo
          </ModalHeader>
          <ModalCloseButton border={"transparent"} outline={"none"} />
          <ModalBody paddingBottom={"28px"}>
            <Img src="/imgs/mock_car.png" alt="Car" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const ModalSuccessAccunt = () => {};

const ModalEditAddress = () => {};

const ModalCreateAd = () => {};

const ModalEditAd = () => {};

const ModalSuccessAd = () => {};

const ModalRemoveAdConfirmation = () => {};

export const ModalContainer = {
  ModalVehicleImage,
  ModalSuccessAccunt,
  ModalEditAddress,
  ModalCreateAd,
  ModalEditAd,
  ModalSuccessAd,
  ModalRemoveAdConfirmation,
};
