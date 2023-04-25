import { Badge, Box, Button, Center, Flex, List, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import nookies from "nookies";
import { PaginationNumbers } from "@/components/PaginationNumbers";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useAdvertContext } from "@/contexts/advert.context";
import { iProfileProps } from "@/interfaces/pages.interfaces";
import { iUser } from "@/interfaces/user.interfaces";
import { api } from "@/services/api";

export default ({ user }: iProfileProps) => {
  const { getAdvertiseListByUserId, advertiseListByUser } = useAdvertContext();

  useEffect(() => {
    getAdvertiseListByUserId(user.id);
  }, []);

  if (!advertiseListByUser) return null;

  return (
    <Box
      bgGradient={
        "linear-gradient(to bottom, var(--chakra-colors-brand-1) 350px, var(--chakra-colors-grey-8) 350px)"
      }
      minH={"100vh"}
    >
      <Header />
      <Box as={"main"} my={{ base: "65px", md: "75px" }}>
        <Box
          maxW={"1200px"}
          w={{ base: "90%" }}
          m="0 auto"
          bgColor={"grey.10"}
          borderRadius={"4px"}
          p={"40px"}
          mb={"75px"}
        >
          <Center
            as={"p"}
            bg={"brand.2"}
            minW={"104px"}
            boxSize={"104px"}
            borderRadius={"50%"}
            fontWeight={"medium"}
            fontSize={"36px"}
            color={"white"}
            mb={"24px"}
          >
            {`${advertiseListByUser.name[0]}${
              advertiseListByUser.name.split(" ").length > 1
                ? advertiseListByUser.name.split(" ", 2)[1][0]
                : ""
            }`}
          </Center>
          <Flex alignItems={"center"} mb={"24px"} gap={"9px"} flexWrap={"wrap"}>
            <Text fontWeight={"semibold"} fontSize={"20px"} color={"grey.1"}>
              {advertiseListByUser.name}
            </Text>
            {advertiseListByUser.is_seller && (
              <Badge
                fontWeight={"medium"}
                fontSize={"14px"}
                color={"brand.1"}
                bgColor={"brand.4"}
                px={"8px"}
                py={"4px"}
                borderRadius={"4px"}
              >
                Anunciante
              </Badge>
            )}
          </Flex>
          <Text color={"grey.2"} mb={"40px"}>
            {advertiseListByUser.description}
          </Text>
          <Button variant={"outlineBrand"}>Criar anuncio</Button>
        </Box>

        <List
          w={"90%"}
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          m="0 auto"
          gap={"48px"}
        >
          {advertiseListByUser.adverts.map((advert, index) => (
            <ProductCard
              key={index}
              advertData={advert}
              isSeller={advertiseListByUser.is_seller}
            />
          ))}
        </List>
        <PaginationNumbers />
      </Box>
      <Footer />
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const token = cookies["ms.token"];

  if (!token) {
    return { redirect: { destination: "/login", permanent: false } };
  }

  api.defaults.headers.common.authorization = `Bearer ${token}`;
  return await api
    .get<iUser>("/users/profile")
    .then(({ data }) => {
      return { props: { user: data } };
    })
    .catch(() => {
      return { redirect: { destination: "/login", permanent: false } };
    });
};
