import { Box, Button, Center, Flex, Input } from "@chakra-ui/react";
import Head from "next/head";
import { Breadcrumb, Image, Img, Heading, Text, List } from "@chakra-ui/react";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ModalContainer } from "@/components/Modal";

export default function Home() {
  const advertsData = [
    {
      coverImage:
        "https://o.remove.bg/downloads/5efb80fa-a972-4d3e-ba88-78702fc7950b/5723fab70e21634575011f03qr-635-gb-01-eps-removebg-preview.png",
      model: "Marea Weekend Turbo",
      description:
        "lorem ipusn domdaddbasd dbasojdbn bdias bdiasdb klncim odijad oijas",
      adverter: {
        profileImage:
          "https://elements-video-cover-images-0.imgix.net/files/245057943/preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=da883a13a8656e741737f2a2780dcf21",
        adverterName: "Seu Luiz",
      },
      mileage: "100000km",
      year: "2005",
      price: "R$ 15.000,00",
    },
    {
      coverImage:
        "https://o.remove.bg/downloads/5efb80fa-a972-4d3e-ba88-78702fc7950b/5723fab70e21634575011f03qr-635-gb-01-eps-removebg-preview.png",
      model: "Marea Weekend Turbo",
      description:
        "lorem ipusn domdaddbasd dbasojdbn bdias bdiasdb klncim odijad oijas",
      adverter: {
        profileImage:
          "https://elements-video-cover-images-0.imgix.net/files/245057943/preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=da883a13a8656e741737f2a2780dcf21",
        adverterName: "Seu Luiz",
      },
      mileage: "100000km",
      year: "2005",
      price: "R$ 15.000,00",
    },
    {
      coverImage:
        "https://o.remove.bg/downloads/5efb80fa-a972-4d3e-ba88-78702fc7950b/5723fab70e21634575011f03qr-635-gb-01-eps-removebg-preview.png",
      model: "Marea Weekend Turbo",
      description:
        "lorem ipusn domdaddbasd dbasojdbn bdias bdiasdb klncim odijad oijas",
      adverter: {
        profileImage:
          "https://elements-video-cover-images-0.imgix.net/files/245057943/preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=da883a13a8656e741737f2a2780dcf21",
        adverterName: "Seu Luiz",
      },
      mileage: "100000km",
      year: "2005",
      price: "R$ 15.000,00",
    },
    {
      coverImage:
        "https://o.remove.bg/downloads/5efb80fa-a972-4d3e-ba88-78702fc7950b/5723fab70e21634575011f03qr-635-gb-01-eps-removebg-preview.png",
      model: "Marea Weekend Turbo",
      description:
        "lorem ipusn domdaddbasd dbasojdbn bdias bdiasdb klncim odijad oijas",
      adverter: {
        profileImage:
          "https://elements-video-cover-images-0.imgix.net/files/245057943/preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=da883a13a8656e741737f2a2780dcf21",
        adverterName: "Seu Luiz",
      },
      mileage: "100000km",
      year: "2005",
      price: "R$ 15.000,00",
    },
    {
      coverImage:
        "https://o.remove.bg/downloads/5efb80fa-a972-4d3e-ba88-78702fc7950b/5723fab70e21634575011f03qr-635-gb-01-eps-removebg-preview.png",
      model: "Marea Weekend Turbo",
      description:
        "lorem ipusn domdaddbasd dbasojdbn bdias bdiasdb klncim odijad oijas",
      adverter: {
        profileImage:
          "https://elements-video-cover-images-0.imgix.net/files/245057943/preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=da883a13a8656e741737f2a2780dcf21",
        adverterName: "Seu Luiz",
      },
      mileage: "100000km",
      year: "2005",
      price: "R$ 15.000,00",
    },
    {
      coverImage:
        "https://o.remove.bg/downloads/5efb80fa-a972-4d3e-ba88-78702fc7950b/5723fab70e21634575011f03qr-635-gb-01-eps-removebg-preview.png",
      model: "Marea Weekend Turbo",
      description:
        "lorem ipusn domdaddbasd dbasojdbn bdias bdiasdb klncim odijad oijas",
      adverter: {
        profileImage:
          "https://elements-video-cover-images-0.imgix.net/files/245057943/preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=da883a13a8656e741737f2a2780dcf21",
        adverterName: "Seu Luiz",
      },
      mileage: "100000km",
      year: "2005",
      price: "R$ 15.000,00",
    },
  ];

  return (
    <>
      <Header></Header>
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
          <Box
            width={"100%"}
            justifyContent={"center"}
            paddingRight={{ lg: "65px", base: "0px" }}
            gap={"30px"}
            fontSize={"24px"}
            display={"flex"}
            flexDirection={{ lg: "unset", base: "column" }}
            alignItems={{ lg: "unset", base: "center" }}
            fontWeight={"bold"}
            marginTop={"80px"}
          >
            <Box display={"flex"}>
              <Text color={"grey.3"}>1 </Text>
              <Text color={"grey.4"}> de 2</Text>
            </Box>
            <Text color={"brand.1"}>Seguinte {">"}</Text>
          </Box>
        </Box>
      </Box>
      <Footer></Footer>
    </>
  );
}
