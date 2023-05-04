import { Center, useDisclosure } from "@chakra-ui/react";
import { Form } from "@/components/Form";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ModalContainer } from "@/components/Modal";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useUserContext } from "@/contexts/user.context";

const loginPage = () => {
  const router = useRouter();
  const { user } = useUserContext();

  if (user) {
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
