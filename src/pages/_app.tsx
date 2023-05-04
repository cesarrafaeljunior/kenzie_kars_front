import { AdvertProvider } from "@/contexts/advert.context";
import { AuthProvider } from "@/contexts/auth.context";
import { UserProvider } from "@/contexts/user.context";
import { theme } from "@/styles/globals";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/lexend/700.css";
import "@fontsource/lexend/600.css";
import "@fontsource/lexend/500.css";
import { CommentProvider } from "@/contexts/comments.context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CommentProvider>
        <UserProvider>
          <AuthProvider>
            <AdvertProvider>
              <Component {...pageProps} />
            </AdvertProvider>
          </AuthProvider>
        </UserProvider>
      </CommentProvider>
    </ChakraProvider>
  );
}
