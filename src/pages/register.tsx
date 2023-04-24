import { Center, useDisclosure } from "@chakra-ui/react";
import { Form } from "@/components/Form";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ModalContainer } from "@/components/Modal";

export default () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Header />
      <Center backgroundColor={"grey.8"}>
        <ModalContainer.ModalSuccessAccount isOpen={isOpen} onClose={onClose} />
        <Form.CreateProfile onOpen={onOpen} />
      </Center>
      <Footer />
    </>
  );
};
