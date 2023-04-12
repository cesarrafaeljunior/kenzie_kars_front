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
  Button,
  Text,
} from "@chakra-ui/react";
import { Img } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

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

const ModalSuccessAccunt = () => {
  const toast = useToast();
  const id = "toast";

  return (
    <Button
      onClick={() => {
        if (!toast.isActive(id)) {
          toast({
            id,
            position: "top",
            duration: 3000,
            render: () => (
              <Box
                width={"100%"}
                maxWidth={"520px"}
                display={"flex"}
                flexWrap={"wrap"}
                flexDirection={"column"}
                padding={"18px 34px 16px 24px"}
                backgroundColor={"grey.7"}
                borderRadius={"8px"}
              >
                <Text as="h2" color={"grey.1"} fontSize={"16px"}>
                  <strong>Sucesso!</strong>
                </Text>
                <Text color={"grey.1"} fontSize={"16px"}>
                  <strong>Sua conta foi criada com sucesso!</strong>
                </Text>
                <Text color={"grey.2"} fontSize={"16px"}>
                  Agora você poderá ver seu negócio crescendo em grande escala
                </Text>
              </Box>
            ),
          });
        }
      }}
    >
      Finalizar cadastro
    </Button>
  );
};

const ModalEditAddress = () => {};

const ModalCreateAd = () => {};

const ModalEditAd = () => {};

const ModalSuccessAd = () => {
  const toast = useToast();
  const id = "toast";

  return (
    <Button
      onClick={() => {
        if (!toast.isActive(id)) {
          toast({
            id,
            position: "top",
            duration: 3000,
            render: () => (
              <Box
                width={"100%"}
                maxWidth={"520px"}
                display={"flex"}
                flexWrap={"wrap"}
                flexDirection={"column"}
                padding={"18px 34px 16px 24px"}
                backgroundColor={"grey.7"}
                borderRadius={"8px"}
              >
                <Text as="h2" color={"grey.1"} fontSize={"16px"}>
                  <strong>Sucesso!</strong>
                </Text>
                <Text color={"grey.1"} fontSize={"16px"}>
                  <strong>Seu anúncio foi criado com sucesso!</strong>
                </Text>
                <Text color={"grey.2"} fontSize={"16px"}>
                  Agora você poderá ver seu negócio crescendo em grande escala
                </Text>
              </Box>
            ),
          });
        }
      }}
    >
      Criar anúncio
    </Button>
  );
};

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
