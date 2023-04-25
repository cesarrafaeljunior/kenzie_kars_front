import { Center, Heading } from "@chakra-ui/react";
import { Form } from "@/components/Form";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const RecoverPage = () => {
  return (
    <>
      <Header />
      <Center
        minH={"calc(100vh - 80px - 140px)"}
        backgroundColor={"grey.8"}
        flexDirection={"column"}
      >
        <Form.RecoveryPassword />
      </Center>
      <Footer />
    </>
  );
};

export default RecoverPage;
