import { AdvertProvider } from "@/contexts/advert.context";
import { theme } from "@/styles/globals";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AdvertProvider>
        <Component {...pageProps} />
      </AdvertProvider>
    </ChakraProvider>
  );
}
