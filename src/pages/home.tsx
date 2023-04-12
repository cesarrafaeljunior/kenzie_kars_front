import { Form } from "@/components/Form";
import { ModalContainer } from "@/components/Modal";
import { Flex } from "@chakra-ui/react";
import "@fontsource/Inter/400.css";
import "@fontsource/Inter/700.css";

const Home = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"100vh"}
      width={"100%"}
    >
      {/* <Form.EditAddress /> */}
      {/* <Form.CreateAd /> */}
      {/* <Form.EditProfile /> */}
      {/* <Form.EditAd /> */}
      <ModalContainer.ModalVehicleImage />
    </Flex>
  );
};

export default Home;
