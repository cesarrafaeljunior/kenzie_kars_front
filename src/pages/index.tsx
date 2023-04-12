import { Box, Center, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { Breadcrumb, Image, Img, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  // const advertsData = [
  //   {
  //     image:
  //       "https://autoentusiastas.com.br/ae/wp-content/uploads/2019/03/Marea-3.jpg",
  //     carName: "Marea Weekend Turbo",
  //     description:
  //       "lorem ipusn domdaddbasd dbasojdbn bdias bdiasdb klncim odijad oijas",
  //     adverter: {
  //       profileImage:
  //         "https://elements-video-cover-images-0.imgix.net/files/245057943/preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=da883a13a8656e741737f2a2780dcf21",
  //       adverterName: "Seu Luiz",
  //     },
  //     milleage: "100000km",
  //     year: "2005",
  //     price: "R$ 15.000,00",
  //   },
  //   {
  //     image:
  //       "https://autoentusiastas.com.br/ae/wp-content/uploads/2019/03/Marea-3.jpg",
  //     carName: "Marea Weekend Turbo",
  //     description:
  //       "lorem ipusn domdaddbasd dbasojdbn bdias bdiasdb klncim odijad oijas",
  //     adverter: {
  //       profileImage:
  //         "https://elements-video-cover-images-0.imgix.net/files/245057943/preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=da883a13a8656e741737f2a2780dcf21",
  //       adverterName: "Seu Luiz",
  //     },
  //     milleage: "100000km",
  //     year: "2005",
  //     price: "R$ 15.000,00",
  //   },
  //   {
  //     image:
  //       "https://autoentusiastas.com.br/ae/wp-content/uploads/2019/03/Marea-3.jpg",
  //     carName: "Marea Weekend Turbo",
  //     description:
  //       "lorem ipusn domdaddbasd dbasojdbn bdias bdiasdb klncim odijad oijas",
  //     adverter: {
  //       profileImage:
  //         "https://elements-video-cover-images-0.imgix.net/files/245057943/preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=da883a13a8656e741737f2a2780dcf21",
  //       adverterName: "Seu Luiz",
  //     },
  //     milleage: "100000km",
  //     year: "2005",
  //     price: "R$ 15.000,00",
  //   },
  //   {
  //     image:
  //       "https://autoentusiastas.com.br/ae/wp-content/uploads/2019/03/Marea-3.jpg",
  //     carName: "Marea Weekend Turbo",
  //     description:
  //       "lorem ipusn domdaddbasd dbasojdbn bdias bdiasdb klncim odijad oijas",
  //     adverter: {
  //       profileImage:
  //         "https://elements-video-cover-images-0.imgix.net/files/245057943/preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=da883a13a8656e741737f2a2780dcf21",
  //       adverterName: "Seu Luiz",
  //     },
  //     milleage: "100000km",
  //     year: "2005",
  //     price: "R$ 15.000,00",
  //   },
  //   {
  //     image:
  //       "https://autoentusiastas.com.br/ae/wp-content/uploads/2019/03/Marea-3.jpg",
  //     carName: "Marea Weekend Turbo",
  //     description:
  //       "lorem ipusn domdaddbasd dbasojdbn bdias bdiasdb klncim odijad oijas",
  //     adverter: {
  //       profileImage:
  //         "https://elements-video-cover-images-0.imgix.net/files/245057943/preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=da883a13a8656e741737f2a2780dcf21",
  //       adverterName: "Seu Luiz",
  //     },
  //     milleage: "100000km",
  //     year: "2005",
  //     price: "R$ 15.000,00",
  //   },
  //   {
  //     image:
  //       "https://autoentusiastas.com.br/ae/wp-content/uploads/2019/03/Marea-3.jpg",
  //     carName: "Marea Weekend Turbo",
  //     description:
  //       "lorem ipusn domdaddbasd dbasojdbn bdias bdiasdb klncim odijad oijas",
  //     adverter: {
  //       profileImage:
  //         "https://elements-video-cover-images-0.imgix.net/files/245057943/preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=da883a13a8656e741737f2a2780dcf21",
  //       adverterName: "Seu Luiz",
  //     },
  //     milleage: "100000km",
  //     year: "2005",
  //     price: "R$ 15.000,00",
  //   },
  // ];

  return (
    <>
      <Head>
        <Breadcrumb>
          <Image src="Motors shop.png"></Image>
          <Box gap={"2px"} display={"flex"}></Box>
        </Breadcrumb>
      </Head>
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
        >
          <Heading fontWeight={"semibold"} as={"h1"}>
            Motors Shop
          </Heading>
          <Text fontWeight={"semibold"} fontSize={"large"}>
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
    </>
  );
}
