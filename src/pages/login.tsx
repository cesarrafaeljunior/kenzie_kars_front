import { Box, Center } from "@chakra-ui/react";
import { Form } from "@/components/Form";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const loginPage = () => {
  return (
    <>
      <Header />
      <Center minH={"calc(100vh - 80px - 140px)"} backgroundColor={"grey.8"}>
        <Form.Login />
      </Center>
      <Footer />
    </>
  );
};

export default loginPage;
