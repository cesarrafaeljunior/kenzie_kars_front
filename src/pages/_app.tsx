import { AdvertProvider } from "@/contexts/advert.context";
import { UserProvider } from "@/contexts/user.context";
import { theme } from "@/styles/globals";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <AdvertProvider>
          <Component {...pageProps} />
        </AdvertProvider>
      </UserProvider>
    </ChakraProvider>
  );
}
