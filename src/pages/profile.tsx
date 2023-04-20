import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PaginationNumbers } from "@/components/PaginationNumbers";
import { ProductCard } from "@/components/ProductCard";
import { useRouter } from "next/router";
import { Badge, Box, Button, Center, Flex, List, Text } from "@chakra-ui/react";

export default () => {
  const user = {
    id: "af8a1c69-424c-4769-8bec-01bcae520e1b",
    name: "Thomas Schreiner",
    email: "thom@mail.com",
    cpf: "12345678910",
    phone_number: "54981215552",
    birthdate: "1999-11-27",
    description: "Digamos que aqui tenha uma descrição incrível!...",
    is_seller: true,
    created_at: "2023-04-11T18:54:16.819Z",
    updated_at: "2023-04-11T20:11:58.604Z",
    adverts: [
      {
        id: "e0641cd9-1ab4-4880-bd25-164994f192e6",
        title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200",
        mileage: 0,
        price: "80000.00",
        year: 2013,
        model: "Cruze",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        cover_image: "/imgs/EXTERIOR-frontSidePilotNear-1653845164710.png",
        location: "97010530",
        is_avaliable: true,
        created_at: "2023-04-17T21:47:44.404Z",
        updated_at: "2023-04-17T21:47:44.404Z",
        galery: [
          {
            id: 1,
            image: "/imgs/EXTERIOR-frontSidePilotNear-1653845164710.png",
          },
          {
            id: 2,
            image: "/imgs/EXTERIOR-frontSidePilotNear-1653845164710.png",
          },
          {
            id: 3,
            image: "/imgs/EXTERIOR-frontSidePilotNear-1653845164710.png",
          },
          {
            id: 4,
            image: "/imgs/EXTERIOR-frontSidePilotNear-1653845164710.png",
          },
        ],
      },
    ],
  };

  const router = useRouter();

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
            TS
          </Center>
          <Flex alignItems={"center"} mb={"24px"} gap={"9px"} flexWrap={"wrap"}>
            <Text fontWeight={"semibold"} fontSize={"20px"} color={"grey.1"}>
              {user.name}
            </Text>
            {user.is_seller && (
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
            {user.description}
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
          {user.adverts.map((advert, index) => (
            <ProductCard
              key={index}
              advertData={advert}
              isSeller={user.is_seller}
            />
          ))}
        </List>
        <PaginationNumbers />
      </Box>
      <Footer />
    </Box>
  );
};
