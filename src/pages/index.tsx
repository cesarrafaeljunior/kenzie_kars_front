import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeFilters } from "@/components/HomeFilter/HomeFilter";
import { ModalContainer } from "@/components/Modal";
import { PaginationNumbers } from "@/components/PaginationNumbers";
import { ProductCard } from "@/components/ProductCard";
import { useAdvertContext } from "@/contexts/advert.context";
import { Box, Button, Center, useDisclosure } from "@chakra-ui/react";
import { Image, Heading, Text, List } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Home() {
  const { advertsList, loadAdverts } = useAdvertContext();
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    loadAdverts();
  }, []);

  if (!advertsList) return null;

  return (
    <>
      <Header />
      <ModalContainer.ModalMobileFilters isOpen={isOpen} onClose={onClose} />
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
        />
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
          <HomeFilters />
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
            {advertsList.map((advert, i) => {
              return <ProductCard key={i} advertData={advert} />;
            })}
          </List>
          <Center>
            <Button
              marginTop={"100px"}
              width={"200px"}
              display={{ base: "initial", lg: "none" }}
              variant={"brand1"}
              onClick={onOpen}
            >
              Filtros
            </Button>
          </Center>
          <PaginationNumbers />
        </Box>
      </Box>
      <Footer />
    </>
  );
}
