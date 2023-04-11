import { Field } from "@/components/Field";
import { Button, Flex, Link, Input } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="100vh"
      flexDirection="column"
    >
      <Button variant="sucess">Text Button</Button>
      <Link variant="linkDefault">Olá, sou link</Link>
      <Field.InputField
        label="Digite seu password"
        type="password"
        name="password"
        placeholder="Password"
        fontSize="50px"
      />
      <Field.TextField
        label="Digite seu email"
        type="email"
        name="email"
        placeholder="Email"
      />
      <Field.SelectField
        label="Digite seu email"
        type="email"
        name="email"
        placeholder="Email"
      >
        <option value="default">Default</option>
      </Field.SelectField>
    </Flex>
  );
};

export default Home;
