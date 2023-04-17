import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Img,
  List,
  ListItem,
  SimpleGrid,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ModalContainer } from "../../components/Modal";
import { useAdvertContext } from "@/contexts/advert.context";
import { Textarea } from "@/components/Textarea";
import { useUserContext } from "@/contexts/user.context";

export default () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setModalVehicleImage } = useAdvertContext();
  const { user } = useUserContext();
  // console.log(router.query.id);

  const seller = {
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

  return (
    <Box
      bgGradient={
        "linear-gradient(180deg, brand.1 31.25%, grey.8 31.26%, grey.8 100%)"
      }
      minH={"100vh"}
    >
      <Header />
      <ModalContainer.ModalVehicleImage isOpen={isOpen} onClose={onClose} />
      <SimpleGrid
        as={"main"}
        gridTemplateColumns={{ base: "1fr", md: "2fr 1fr" }}
        spacingX={"46px"}
        mx={{ base: "16px", md: "32px", lg: "60px" }}
        my={"40px"}
        minH={"calc(100vh - 80px - 140px - 80px)"}
      >
        <Box as={"section"}>
          <Center
            bgColor={"grey.10"}
            borderRadius={"4px"}
            p={"40px"}
            mb={"16px"}
          >
            <Img src={seller.adverts[0].cover_image} alt={"Cover Image"} />
          </Center>
          <Box
            bgColor={"grey.10"}
            borderRadius={"4px"}
            p={"44px"}
            pb={"28px"}
            mb={"40px"}
          >
            <Heading
              mb={"41px"}
              fontWeight={"semibold"}
              fontSize={"20px"}
              color={"grey.1"}
            >
              {seller.adverts[0].title}
            </Heading>
            <Flex gap={"12px"} mb={"24px"}>
              <Text
                fontWeight={"medium"}
                fontSize={"14px"}
                color={"brand.1"}
                bgColor={"brand.4"}
                px={"8px"}
                py={"4px"}
                borderRadius={"4px"}
              >
                {seller.adverts[0].year}
              </Text>
              <Text
                fontWeight={"medium"}
                fontSize={"14px"}
                color={"brand.1"}
                bgColor={"brand.4"}
                px={"8px"}
                py={"4px"}
                borderRadius={"4px"}
              >
                {seller.adverts[0].mileage} KM
              </Text>
              <Spacer />
              <Text fontWeight={"medium"} fontSize={"16px"} color={"grey.1"}>
                {`R$ ${seller.adverts[0].price}`}
              </Text>
            </Flex>
            <Button size={"sm"}>Comprar</Button>
          </Box>
          <Box
            bgColor={"grey.10"}
            borderRadius={"4px"}
            px={"44px"}
            py={"36px"}
            mb={"16px"}
          >
            <Text
              mb={"32px"}
              fontWeight={"semibold"}
              fontSize={"20px"}
              color={"grey.1"}
            >
              Descrição
            </Text>
            <Text color={"grey.2"}>{seller.adverts[0].description}</Text>
          </Box>
        </Box>
        <Box as={"section"}>
          <Box
            bgColor={"grey.10"}
            borderRadius={"4px"}
            px={"44px"}
            py={"36px"}
            mb={"32px"}
          >
            <Text
              mb={"32px"}
              fontWeight={"semibold"}
              fontSize={"20px"}
              color={"grey.1"}
            >
              Comentários
            </Text>
            <List display={"flex"} flexDirection={"column"} gap={"44px"}>
              {[1, 2, 3, 4].map((number) => (
                <ListItem key={number}>
                  <Flex alignItems={"center"} gap={"8px"} mb={"12px"}>
                    <Center
                      as={"p"}
                      bg={"brand.2"}
                      minW={"32px"}
                      boxSize={"32px"}
                      borderRadius={"50%"}
                      fontWeight={"medium"}
                      color={"white"}
                    >
                      JL
                    </Center>
                    <Text
                      fontWeight={"medium"}
                      fontSize={"14px"}
                      color={"grey.1"}
                    >
                      Júlia Lima
                    </Text>
                    <Img src={"/imgs/ellipse.png"}></Img>
                    <Text fontSize={"12px"} color={"grey.3"}>
                      há 3 dias
                    </Text>
                  </Flex>
                  <Text fontSize={"14px"} color={"grey.2"}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Text>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box bgColor={"grey.10"} borderRadius={"4px"} px={"44px"} py={"36px"}>
            <Flex alignItems={"center"} gap={"8px"} mb={"15px"}>
              <Center
                as={"p"}
                bg={"brand.2"}
                minW={"32px"}
                boxSize={"32px"}
                borderRadius={"50%"}
                fontWeight={"medium"}
                color={"white"}
              >
                TS
              </Center>
              <Text fontWeight={"medium"} fontSize={"14px"} color={"grey.1"}>
                {user?.name || "Usuário"}
              </Text>
            </Flex>
            <Textarea />
          </Box>
        </Box>

        <Box
          as={"aside"}
          gridRow={{ base: "2", md: "1" }}
          gridColumn={{ base: "unset", md: "2" }}
        >
          <Box
            bgColor={"grey.10"}
            borderRadius={"4px"}
            px={"44px"}
            py={"36px"}
            mb={"34px"}
          >
            <Text
              mb={"32px"}
              fontWeight={"semibold"}
              fontSize={"20px"}
              color={"grey.1"}
            >
              Fotos
            </Text>
            <SimpleGrid
              as={"ul"}
              gridTemplateColumns={{
                base: "repeat(auto-fill, 80px)",
                lg: "repeat(auto-fill, 108px)",
              }}
              spacingX={"14px"}
              spacingY={"32px"}
              listStyleType={"none"}
            >
              {seller.adverts[0].galery.map(({ id, image }, index) => (
                <Center
                  key={id}
                  as={"li"}
                  bgColor={"grey.7"}
                  borderRadius={"4px"}
                  h={{ base: "80px", lg: "108px" }}
                >
                  <Button
                    onClick={() => {
                      setModalVehicleImage(image);
                      onOpen();
                    }}
                    variant={"unstyled"}
                    p={"4px"}
                    h={"100%"}
                    title="Exibir"
                  >
                    <Img src={image} alt={`Image ${index}`} />
                  </Button>
                </Center>
              ))}
            </SimpleGrid>
          </Box>
          <Center
            flexDirection={"column"}
            gap={"32px"}
            bgColor={"grey.10"}
            borderRadius={"4px"}
            px={"44px"}
            py={"36px"}
            mb={"18px"}
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
            >
              TS
            </Center>
            <Text fontWeight={"semibold"} fontSize={"20px"} color={"grey.1"}>
              {seller.name}
            </Text>
            <Text color={"grey.2"}>{seller.description}</Text>
            <Button variant={"grey1"}>Ver todos anuncios</Button>
          </Center>
        </Box>
      </SimpleGrid>
      <Footer />
    </Box>
  );
};
