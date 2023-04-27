import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export default () => {
  return <></>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return { redirect: { destination: "/", permanent: false } };
};
