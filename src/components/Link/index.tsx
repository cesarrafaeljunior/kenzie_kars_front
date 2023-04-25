import { iLinkProps } from "@/interfaces/components.interfaces";
import { Link as ChakraLink, MenuItem } from "@chakra-ui/react";
import NextLink from "next/link";

export const Link = ({
  href,
  children,
  isMenuItem = false,
  ...args
}: iLinkProps) => {
  return (
    <NextLink href={href} style={{ width: "inherit" }}>
      {isMenuItem ? (
        <MenuItem>{children}</MenuItem>
      ) : (
        <ChakraLink as={"p"} {...args}>
          {children}
        </ChakraLink>
      )}
    </NextLink>
  );
};
