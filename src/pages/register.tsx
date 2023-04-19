import { Box, Center } from "@chakra-ui/react";
import { Form } from "@/components/Form";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const registerPage = () => {
  return (
    <>
      <Header />
      <Center backgroundColor={"grey.8"}>
        <Form.CreateProfile />
      </Center>
      <Footer />
    </>
  );
};

export default registerPage;
