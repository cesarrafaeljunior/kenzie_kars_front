import { Box, Button, Center, useDisclosure } from "@chakra-ui/react";
import { Form } from "@/components/Form";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ModalContainer } from "@/components/Modal";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";

const loginPage = () => {
  const cookies = parseCookies();
  const token = cookies["ms.token"];

  const router = useRouter();

  if (token) {
    router.push("/profile");
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Header />

      <ModalContainer.ModalRecoverPassword isOpen={isOpen} onClose={onClose} />
      <Center minH={"calc(100vh - 80px - 140px)"} backgroundColor={"grey.8"}>
        <Form.Login onOpen={onOpen} />
      </Center>
      <Footer />
    </>
  );
};

export default loginPage;
