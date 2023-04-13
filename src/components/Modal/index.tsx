import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Box,
    Button,
    Text,
    AlertDialogBody,
    AlertDialogHeader,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialog,
    AlertDialogFooter,
} from "@chakra-ui/react";
import { Img } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Form } from "../Form";
import { useRef } from "react";

const ModalVehicleImage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box onClick={onOpen}>
                <Img src="/imgs/mock_car.png" alt="Car" />
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent fontFamily={"Inte, sans-serif"}>
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
                                fontFamily={"Inte, sans-serif"}
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

const ModalEditAddress = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen}>Editar Endereço</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent fontFamily={"Inte, sans-serif"}>
                    <ModalHeader as={"h2"} fontSize={"16px"}>
                        Editar endereço
                    </ModalHeader>
                    <ModalCloseButton border={"transparent"} outline={"none"} />
                    <ModalBody paddingBottom={"28px"}>
                        <Form.EditAddress />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

const ModalCreateAd = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen}>Criar anúncio</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent fontFamily={"Inte, sans-serif"}>
                    <ModalCloseButton border={"transparent"} outline={"none"} />
                    <ModalHeader as={"h2"} fontSize={"16px"}>
                        Criar anúncio
                    </ModalHeader>
                    <ModalBody paddingBottom={"28px"}>
                        <Form.CreateAd />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

const ModalEditAd = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen}>Editar anúncio</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent fontFamily={"Inte, sans-serif"}>
                    <ModalCloseButton border={"transparent"} outline={"none"} />
                    <ModalHeader as={"h2"} fontSize={"16px"}>
                        Editar anúncio
                    </ModalHeader>
                    <ModalBody paddingBottom={"28px"}>
                        <Form.EditAd />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

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
                                fontFamily={"Inte, sans-serif"}
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

const ModalRemoveAdConfirmation = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef<any>();
    return (
        <>
            <Button colorScheme="red" onClick={onOpen}>
                Delete Customer
            </Button>

            <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
                <AlertDialogOverlay>
                    <AlertDialogContent fontFamily={"Inte, sans-serif"}>
                        <AlertDialogHeader fontSize="lg" fontWeight="semiBold">
                            Ecluir anúncio
                        </AlertDialogHeader>

                        <AlertDialogBody display={"flex"} flexDirection={"column"} gap={"25px"}>
                            <Text>
                                <strong>Tem certeza que deseja remover este anúncio?</strong>
                            </Text>
                            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e
                            removerá seus dados de nossos servidores.
                        </AlertDialogBody>

                        <AlertDialogFooter marginTop={"40px"}>
                            <Button ref={cancelRef} onClick={onClose} variant={"negative"}>
                                Cancel
                            </Button>
                            <Button colorScheme="red" onClick={onClose} ml={3} variant={"alert"}>
                                Sim, excluir anúncio
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};

export const ModalContainer = {
    ModalVehicleImage,
    ModalSuccessAccunt,
    ModalEditAddress,
    ModalCreateAd,
    ModalEditAd,
    ModalSuccessAd,
    ModalRemoveAdConfirmation,
};
