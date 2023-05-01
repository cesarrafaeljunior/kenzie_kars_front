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
import { useEffect } from "react";
import { GetServerSideProps } from "next";
import { api } from "@/services/api";
import { iAdvert } from "@/interfaces/advert.interfaces";
import { formatValues } from "@/utils/valuesFormat.util";
import { Link } from "@/components/Link";

interface iDetailHomeProps {
  advert: iAdvert;
}

export default ({ advert }: iDetailHomeProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setModalVehicleImage } = useAdvertContext();
  const { user } = useUserContext();

  if (!advert) return null;

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
            <Img src={advert.cover_image} alt={"Cover Image"} />
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
              {advert.model}
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
                {advert.year}
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
                {`${formatValues(advert.mileage, "KM")} KM`}
              </Text>
              <Spacer />
              <Text fontWeight={"medium"} fontSize={"16px"} color={"grey.1"}>
                {formatValues(advert.price, "BRL")}
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
            <Text color={"grey.2"}>{advert.description}</Text>
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
                {user?.name
                  ? `${user.name[0]}${
                      user.name.split(" ").length > 1
                        ? user.name.split(" ", 2)[1][0]
                        : ""
                    }`
                  : "U"}
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
              {advert.galery.map(({ id, image }, index) => (
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
              {`${advert.user.name[0]}${
                advert.user.name.split(" ").length > 1
                  ? advert.user.name.split(" ", 2)[1][0]
                  : ""
              }`}
            </Center>
            <Text fontWeight={"semibold"} fontSize={"20px"} color={"grey.1"}>
              {advert.user.name}
            </Text>
            <Text color={"grey.2"}>{advert.user.description}</Text>
            <Link
              href={`/profile/${advert.user.id}`}
              variant={"grey1"}
              whiteSpace={"nowrap"}
            >
              Ver todos anuncios
            </Link>
          </Center>
        </Box>
      </SimpleGrid>
      <Footer />
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await api
    .get<iAdvert>(`/advertised/${ctx.params!.id}`)
    .then(({ data }) => {
      return { props: { advert: data } };
    })
    .catch(() => {
      return { redirect: { destination: "/", permanent: false } };
    });
};
