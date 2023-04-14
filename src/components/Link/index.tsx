import { iLinkProps } from "@/interfaces/components.interfaces";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

export const Link = ({ href, children, ...args }: iLinkProps) => {
  return (
    <NextLink href={href}>
      <ChakraLink as={"p"} {...args}>
        {children}
      </ChakraLink>
    </NextLink>
  );
};
