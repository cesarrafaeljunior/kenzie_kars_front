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
  Heading,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import { Img } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Form } from "../Form";
import { useRef } from "react";
import { useAdvertContext } from "@/contexts/advert.context";
import { iModalProps } from "@/interfaces/components.interfaces";
import { Link } from "../Link";

const ModalVehicleImage = ({ isOpen, onClose }: iModalProps) => {
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

const ModalSuccessAccount = ({ isOpen, onClose }: iModalProps) => {
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

const ModalEditAddress = ({ onClose, isOpen }: iModalProps) => {
  return (
    <>
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
const ModalEditProfile = ({ onClose, isOpen }: iModalProps) => {
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
            <Form.EditProfile />
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

const ModalSuccessAd = ({ isOpen, onClose }: iModalProps) => {
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
            <strong>Seu anúncio foi criado com sucesso!</strong>
          </Text>
          <Text color={"grey.2"} fontSize={"16px"}>
            Agora você poderá ver seu negócio crescendo em grande escala
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
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

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent fontFamily={"Inte, sans-serif"}>
            <AlertDialogHeader fontSize="lg" fontWeight="semiBold">
              Ecluir anúncio
            </AlertDialogHeader>

            <AlertDialogBody
              display={"flex"}
              flexDirection={"column"}
              gap={"25px"}
            >
              <Text>
                <strong>Tem certeza que deseja remover este anúncio?</strong>
              </Text>
              Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
              conta e removerá seus dados de nossos servidores.
            </AlertDialogBody>

            <AlertDialogFooter marginTop={"40px"}>
              <Button ref={cancelRef} onClick={onClose} variant={"negative"}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={onClose}
                ml={3}
                variant={"alert"}
              >
                Sim, excluir anúncio
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

const ModalMobileFilters = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        marginTop={"100px"}
        width={"200px"}
        display={{ lg: "none", base: "initial" }}
        variant={"brand1"}
        onClick={onOpen}
      >
        Filtros
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={"0px"}>
          <ModalHeader>Filtros</ModalHeader>
          <ModalCloseButton color={"grey.4"} />
          <ModalBody>
            <Box flexDirection={"column"} gap={"35px"} display={"flex"}>
              <Box
                gap={"3px"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                display={"flex"}
              >
                <Heading marginBottom={"10px"} fontSize={"28px"}>
                  Marca
                </Heading>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  General Motors
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Fiat
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Ford
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Honda
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Porshe
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Volswagen
                </Button>
              </Box>
              <Box
                gap={"3px"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                display={"flex"}
              >
                <Heading marginBottom={"10px"} fontSize={"28px"}>
                  Modelo
                </Heading>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Civic
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Corolla
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Cruze
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Fit
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Gol
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Ka
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Onix
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Porshe 718
                </Button>
              </Box>
              <Box
                gap={"3px"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                display={"flex"}
              >
                <Heading marginBottom={"10px"} fontSize={"28px"}>
                  Cor
                </Heading>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Azul
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Branco
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Cinza
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Prata
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Preto
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Verde
                </Button>
              </Box>
              <Box
                gap={"3px"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                display={"flex"}
              >
                <Heading marginBottom={"10px"} fontSize={"28px"}>
                  Ano
                </Heading>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  2022
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  2021
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  2018
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  2015
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  2013
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  2012
                </Button>
                <Button
                  fontSize={"20px"}
                  display={"box"}
                  textAlign={"left"}
                  width={"min-content"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  2010
                </Button>
              </Box>
              <Box
                gap={"3px"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                display={"flex"}
              >
                <Heading marginBottom={"10px"} fontSize={"28px"}>
                  Combustivel
                </Heading>
                <Button
                  fontSize={"20px"}
                  margin={"0"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Diesel
                </Button>
                <Button
                  fontSize={"20px"}
                  margin={"0"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Etanol
                </Button>
                <Button
                  fontSize={"20px"}
                  margin={"0"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Gasolina
                </Button>
                <Button
                  fontSize={"20px"}
                  margin={"0"}
                  padding={"0"}
                  height={"min-content"}
                  color={"grey.3"}
                  variant={""}
                >
                  Flex
                </Button>
              </Box>
              <Box>
                <Heading marginBottom={"10px"} fontSize={"28px"}>
                  Km
                </Heading>
                <Box gap={"10px"} display={"flex"}>
                  <Input
                    borderRadius={"0px"}
                    width={"120px"}
                    padding={"0"}
                    textAlign={"center"}
                    backgroundColor={"grey.5"}
                    type="text"
                    placeholder="Mínima"
                  />
                  <Input
                    borderRadius={"0px"}
                    width={"120px"}
                    padding={"0"}
                    textAlign={"center"}
                    backgroundColor={"grey.5"}
                    type="text"
                    placeholder="Máxima"
                  />
                </Box>
                <Box>
                  <Heading marginBottom={"10px"} fontSize={"28px"}>
                    Preço
                  </Heading>
                  <Box marginBottom={"20px"} gap={"10px"} display={"flex"}>
                    <Input
                      borderRadius={"0px"}
                      width={"120px"}
                      padding={"0"}
                      textAlign={"center"}
                      backgroundColor={"grey.5"}
                      type="text"
                      placeholder="Mínimo"
                    />
                    <Input
                      borderRadius={"0px"}
                      width={"120px"}
                      padding={"0"}
                      textAlign={"center"}
                      backgroundColor={"grey.5"}
                      type="text"
                      placeholder="Máximo"
                    />
                  </Box>
                </Box>
              </Box>
              <Button marginBottom={"20px"} variant={"brand1"}>
                Ver anúncios
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const ModalRecoverPassword = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        color={"grey2"}
        fontSize={"14px"}
        border="none"
        bg="none"
        onClick={onOpen}
        _hover={{ bg: "none", border: "none", textDecoration: "underline" }}
        fontWeight={"400"}
        w={"max-content"}
        h={"max-content"}
        p={0}
      >
        Esqueci minha senha
      </Button>
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
    </>
  );
};

export const ModalContainer = {
  ModalVehicleImage,
  ModalSuccessAccount,
  ModalEditAddress,
  ModalCreateAd,
  ModalEditAd,
  ModalSuccessAd,
  ModalRemoveAdConfirmation,
  ModalMobileFilters,
  ModalRecoverPassword,
  ModalEditProfile,
};
