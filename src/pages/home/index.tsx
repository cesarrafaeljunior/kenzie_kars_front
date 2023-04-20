import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ModalContainer } from "@/components/Modal";
import { PaginationNumbers } from "@/components/PaginationNumbers";
import { ProductCard } from "@/components/ProductCard";
import { iAdvert } from "@/interfaces/advert.interfaces";
import { Box, Button, Center, Input } from "@chakra-ui/react";
import { Image, Heading, Text, List } from "@chakra-ui/react";

export default function Home() {
  const advertsData: iAdvert[] = [
    {
      id: "6e6a0f02-b1f0-4361-8679-9c4941eee212",
      title: "It's a Car",
      brand: "Chevrolet",
      model: "Clio",
      fuel: "Gasolina",
      color: "Vermelha",
      year: 2013,
      mileage: 0,
      price: 80000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      cover_image: "/imgs/EXTERIOR-frontSidePilotNear-1653845164710.png",
      location: "97010530",
      is_avaliable: true,
      created_at: "2023-04-19T18:41:45.487Z",
      updated_at: "2023-04-19T18:41:45.487Z",
      user: {
        id: "af8a1c69-424c-4769-8bec-01bcae520e1b",
        name: "Thomas",
        email: "thom@mail.com",
        cpf: "12345678910",
        phone_number: "54981215552",
        birthdate: "1999-11-27T02:00:00.000Z",
        description: "Digite aqui uma descrição.",
        is_seller: true,
        created_at: "2023-04-11T18:54:16.819Z",
        updated_at: "2023-04-11T20:11:58.604Z",
      },
    },
    {
      id: "85bd7380-f4f3-459b-a17f-dac41bfb6913",
      title: "It's a Car",
      brand: "Chevrolet",
      model: "Clio",
      fuel: "Gasolina",
      color: "Vermelha",
      year: 2013,
      mileage: 0,
      price: 80000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      cover_image: "/imgs/EXTERIOR-frontSidePilotNear-1653845164710.png",
      location: "97010530",
      is_avaliable: true,
      created_at: "2023-04-19T20:33:02.755Z",
      updated_at: "2023-04-19T20:33:02.755Z",
      user: {
        id: "af8a1c69-424c-4769-8bec-01bcae520e1b",
        name: "Thomas",
        email: "thom@mail.com",
        cpf: "12345678910",
        phone_number: "54981215552",
        birthdate: "1999-11-27T02:00:00.000Z",
        description: "Digite aqui uma descrição.",
        is_seller: true,
        created_at: "2023-04-11T18:54:16.819Z",
        updated_at: "2023-04-11T20:11:58.604Z",
      },
    },
    {
      id: "ecb992a6-eb3a-4c80-a2b5-79863739b68e",
      title: "It's a Car",
      brand: "Chevrolet",
      model: "Clio",
      fuel: "Gasolina",
      color: "Vermelha",
      year: 2013,
      mileage: 0,
      price: 80000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      cover_image: "/imgs/EXTERIOR-frontSidePilotNear-1653845164710.png",
      location: "97010530",
      is_avaliable: true,
      created_at: "2023-04-19T21:04:48.684Z",
      updated_at: "2023-04-19T21:04:48.684Z",
      user: {
        id: "af8a1c69-424c-4769-8bec-01bcae520e1b",
        name: "Thomas",
        email: "thom@mail.com",
        cpf: "12345678910",
        phone_number: "54981215552",
        birthdate: "1999-11-27T02:00:00.000Z",
        description: "Digite aqui uma descrição.",
        is_seller: true,
        created_at: "2023-04-11T18:54:16.819Z",
        updated_at: "2023-04-11T20:11:58.604Z",
      },
    },
  ];

  return (
    <>
      <Header />
      <Center>
        <Center
          bgGradient="linear(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%)"
          width={"100%"}
          height={"550px"}
          position={"absolute"}
          display={"flex"}
          flexDirection={"column"}
          color={"grey.whiteFixed"}
          fontWeight={"600"}
          justifyContent={{ base: "flex-start", lg: "center" }}
        >
          <Heading
            marginTop={{ base: "70px", lg: "unset" }}
            marginBottom={{ base: "30px", lg: "unset" }}
            fontSize={{ base: "30px", lg: "35px" }}
            fontWeight={"semibold"}
            as={"h1"}
          >
            Motors Shop
          </Heading>
          <Text
            marginX={{ base: "20px", lg: "unset" }}
            fontSize={{ base: "25px", lg: "30px" }}
            textAlign={{ base: "center", lg: "unset" }}
            fontWeight={"semibold"}
          >
            A melhor plataforma de anúncios de carro do país
          </Text>
        </Center>
        <Image
          width={{ base: "700px", md: "1000px", lg: "1300px" }}
          height={"550px"}
          src="home-page-car.png"
          objectFit={"cover"}
        ></Image>
      </Center>
      <Box display={"flex"} gap={"15vw"} width={"100%"}>
        <Box
          marginLeft={"30px"}
          marginTop={"70px"}
          flexDirection={"column"}
          gap={"35px"}
          display={{ base: "none", lg: "flex" }}
          as="aside"
        >
          <Box
            gap={"3px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            display={"flex"}
          >
            <Heading marginBottom={"10px"} fontSize={"28px"}>
              Marca
            </Heading>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              General Motors
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Fiat
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Ford
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Honda
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Porshe
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Volswagen
            </Button>
          </Box>
          <Box
            gap={"3px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            display={"flex"}
          >
            <Heading marginBottom={"10px"} fontSize={"28px"}>
              Modelo
            </Heading>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Civic
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Corolla
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Cruze
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Fit
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Gol
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Ka
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Onix
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Porshe 718
            </Button>
          </Box>
          <Box
            gap={"3px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            display={"flex"}
          >
            <Heading marginBottom={"10px"} fontSize={"28px"}>
              Cor
            </Heading>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Azul
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Branco
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Cinza
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Prata
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Preto
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Verde
            </Button>
          </Box>
          <Box
            gap={"3px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            display={"flex"}
          >
            <Heading marginBottom={"10px"} fontSize={"28px"}>
              Ano
            </Heading>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              2022
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              2021
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              2018
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              2015
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              2013
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              2012
            </Button>
            <Button
              fontSize={"20px"}
              display={"box"}
              textAlign={"left"}
              width={"min-content"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              2010
            </Button>
          </Box>
          <Box
            gap={"3px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            display={"flex"}
          >
            <Heading marginBottom={"10px"} fontSize={"28px"}>
              Combustivel
            </Heading>
            <Button
              fontSize={"20px"}
              margin={"0"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Diesel
            </Button>
            <Button
              fontSize={"20px"}
              margin={"0"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Etanol
            </Button>
            <Button
              fontSize={"20px"}
              margin={"0"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Gasolina
            </Button>
            <Button
              fontSize={"20px"}
              margin={"0"}
              padding={"0"}
              height={"min-content"}
              color={"grey.3"}
              variant={""}
            >
              Flex
            </Button>
          </Box>
          <Box>
            <Heading marginBottom={"10px"} fontSize={"28px"}>
              Km
            </Heading>
            <Box display={"flex"}>
              <Input
                borderRadius={"0px"}
                width={"120px"}
                marginRight={"25px"}
                padding={"0"}
                textAlign={"center"}
                backgroundColor={"grey.5"}
                type="text"
                placeholder="Mínima"
              />
              <Input
                borderRadius={"0px"}
                width={"120px"}
                marginRight={"25px"}
                padding={"0"}
                textAlign={"center"}
                backgroundColor={"grey.5"}
                type="text"
                placeholder="Máxima"
              />
            </Box>
          </Box>
          <Box>
            <Heading marginBottom={"10px"} fontSize={"28px"}>
              Preço
            </Heading>
            <Box marginBottom={"80px"} display={"flex"}>
              <Input
                borderRadius={"0px"}
                width={"120px"}
                marginRight={"25px"}
                padding={"0"}
                textAlign={"center"}
                backgroundColor={"grey.5"}
                type="text"
                placeholder="Mínimo"
              />
              <Input
                borderRadius={"0px"}
                width={"120px"}
                marginRight={"25px"}
                padding={"0"}
                textAlign={"center"}
                backgroundColor={"grey.5"}
                type="text"
                placeholder="Máximo"
              />
            </Box>
          </Box>
        </Box>
        <Box>
          <List
            display={"flex"}
            flexWrap={{ lg: "wrap", base: "unset" }}
            overflowX={{ base: "auto", lg: "unset" }}
            width={{ lg: "unset", base: "100vw" }}
            gap={"45px"}
            marginTop={"60px"}
            justifyContent={"flex-start"}
            paddingRight={"65px"}
            paddingLeft={{ base: "20px", lg: "0px" }}
          >
            {advertsData.map((advert, i) => {
              return <ProductCard key={i} advertData={advert} />;
            })}
          </List>
          <Center>
            <ModalContainer.ModalMobileFilters />
          </Center>
          <PaginationNumbers />
        </Box>
      </Box>
      <Footer />
    </>
  );
}
