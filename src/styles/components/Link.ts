import { defineStyleConfig, ComponentStyleConfig } from "@chakra-ui/react";

export const LinkStyle: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "semibold",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    fontFamily: "Inter, sans-serif",
    border: "2px solid",
  },
  sizes: {
    sm: {
      fontSize: "14px",
      h: "38px",
      px: "20px",
      py: "12px",
    },
    md: {
      fontSize: "16px",
      h: "48px",
      px: "28px",
      py: "12px",
    },
  },
  variants: {
    linkDefault: {
      borderColor: "#ffffff",
      bg: "#ffffff",
      color: "#0B0D0D",
      _hover: { bg: "#F1F3F5", borderColor: "#F1F3F5", textDecoration: "none" },
    },
    grey1: {
      borderColor: "#0B0D0D",
      bg: "#0B0D0D",
      color: "#ffffff",
      _hover: { bg: "#212529", borderColor: "#212529" },
    },
    outline2: {
      borderColor: "#ADB5BD",
      bg: "#FDFDFD",
      color: "#0B0D0D",
      _hover: {
        bg: "#212529",
        borderColor: "#212529",
        color: "#FDFDFD",
        textDecoration: "none",
      },
    },
    brand1: {
      borderColor: "#4529E6",
      bg: "#4529E6",
      color: "#FFFFFF",
      _hover: { bg: "#5126EA", borderColor: "#5126EA" },
    },
  },
  defaultProps: {
    size: "md",
    variant: "linkDefault",
  },
};

export const Link = defineStyleConfig(LinkStyle);
