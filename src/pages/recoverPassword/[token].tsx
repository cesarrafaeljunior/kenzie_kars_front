import { GetServerSideProps } from "next";
import { Center, Heading } from "@chakra-ui/react";
import { Form } from "@/components/Form";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useRouter } from "next/router";
import * as yup from "yup";

const RecoverPage = ({ token }: any) => {
  const router = useRouter();

  if (!token) {
    router.push("/");
  }
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { token } = query;

  const schema = yup.object().shape({
    token: yup.string().uuid().required(),
  });

  return schema
    .validate({ token })
    .then(() => {
      return {
        props: {
          token,
        },
      };
    })
    .catch(() => {
      return { redirect: { destination: "/", permanent: false } };
    });
};

export default RecoverPage;
