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
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ModalContainer } from "../../components/Modal";
import { useAdvertContext } from "@/contexts/advert.context";

export default () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setModalVehicleImage } = useAdvertContext();

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
        gridTemplateColumns={"2fr 1fr"}
        spacingX={"46px"}
        mx={{ base: "16px", md: "32px", lg: "60px" }}
        my={"40px"}
      >
        <Box as={"main"} minH={"calc(100vh - 80px - 140px - 80px)"}>
          <Center
            bgColor={"grey.10"}
            borderRadius={"4px"}
            p={"40px"}
            mb={"16px"}
          >
            <Img
              src={"/imgs/EXTERIOR-frontSidePilotNear-1653845164710.png"}
              alt={"Cover Image"}
            />
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
              Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
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
                2013
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
                0 KM
              </Text>
              <Spacer />
              <Text fontWeight={"medium"} fontSize={"16px"} color={"grey.1"}>
                R$ 00.000,00
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
            <Text color={"grey.2"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </Box>
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
                Thomas Schreiner
              </Text>
            </Flex>
            <Textarea
              placeholder={
                "Carro muito confortável, foi uma ótima experiência de compra..."
              }
              mb={"15px"}
              fontSize={"14px"}
              color={"grey.1"}
            />
            <Flex alignItems={"center"} gap={"8px"}>
              <Center
                as={"span"}
                h={"24px"}
                fontWeight={"medium"}
                fontSize={"12px"}
                color={"grey.3"}
                bgColor={"grey.7"}
                px={"12px"}
                borderRadius={"24px"}
              >
                Gostei muito!
              </Center>
              <Center
                as={"span"}
                h={"24px"}
                fontWeight={"medium"}
                fontSize={"12px"}
                color={"grey.3"}
                bgColor={"grey.7"}
                px={"12px"}
                borderRadius={"24px"}
              >
                Incrível
              </Center>
              <Center
                as={"span"}
                h={"24px"}
                fontWeight={"medium"}
                fontSize={"12px"}
                color={"grey.3"}
                bgColor={"grey.7"}
                px={"12px"}
                borderRadius={"24px"}
              >
                Recomendarei para meus amigos!
              </Center>
            </Flex>
          </Box>
        </Box>

        <Box as={"aside"}>
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
              {[1, 2, 3, 4].map((number) => (
                <Center
                  key={number}
                  as={"li"}
                  bgColor={"grey.7"}
                  borderRadius={"4px"}
                  h={{ base: "80px", lg: "108px" }}
                >
                  <Button
                    onClick={() => {
                      setModalVehicleImage(
                        "/imgs/EXTERIOR-frontSidePilotNear-1653845164710.png"
                      );
                      onOpen();
                    }}
                    variant={"unstyled"}
                    p={"4px"}
                    h={"100%"}
                    title="Exibir"
                  >
                    <Img
                      src={
                        "/imgs/EXTERIOR-frontSidePilotNear-1653845164710.png"
                      }
                      alt={`Image ${number}`}
                    />
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
              Thomas Schreiner
            </Text>
            <Text color={"grey.2"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </Text>
            <Button variant={"grey1"}>Ver todos anuncios</Button>
          </Center>
        </Box>
      </SimpleGrid>
      <Footer />
    </Box>
  );
};
