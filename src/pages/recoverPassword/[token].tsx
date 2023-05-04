import { GetServerSideProps } from "next";
import { Center, Heading } from "@chakra-ui/react";
import { Form } from "@/components/Form";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import * as yup from "yup";
import { api } from "@/services/api";

export interface iTokenProps {
  token: string;
}

const RecoverPage = ({ token }: iTokenProps) => {
  return (
    <>
      <Header />
      <Center
        minH={"calc(100vh - 80px - 140px)"}
        backgroundColor={"grey.8"}
        flexDirection={"column"}
      >
        <Form.RecoveryPassword token={token} />
      </Center>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = ctx.query;

  const schemaToken = yup.string().uuid().required();

  try {
    schemaToken.validateSync(token);
    await api.get(`/users/resetPassword/${token}`);

    return {
      props: {
        token,
      },
    };
  } catch {
    return { redirect: { destination: "/", permanent: false } };
  }
};

export default RecoverPage;
