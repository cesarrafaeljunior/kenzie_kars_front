import { Form } from "@/components/Form";
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
      <Form.EditAddress />
    </Flex>
  );
};

export default Home;
