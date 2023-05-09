import { defineStyleConfig, ComponentStyleConfig } from "@chakra-ui/react";

export const ButtonStyle: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "semibold",
    borderRadius: "4px",
    borderWidth: "2px",
    borderColor: " transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    fontFamily: "Inter, sans-serif",
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
    grey1: {
      borderColor: "#0B0D0D",
      bg: "#0B0D0D",
      color: "#ffffff",
      _hover: { bg: "#212529", borderColor: "#212529" },
    },
    negative: {
      borderColor: "#DEE2E6",
      bg: "#DEE2E6",
      color: "#495057",
      _hover: { bg: "#CED4DA", borderColor: "#CED4DA" },
    },
    disabled: {
      borderColor: "#CED4DA",
      bg: "#CED4DA",
      color: "#FFFFFF",
      cursor: "no-drop",
    },
    brand1: {
      borderColor: "#4529E6",
      bg: "#4529E6",
      color: "#FFFFFF",
      _hover: { bg: "#5126EA", borderColor: "#5126EA" },
    },
    brandOpacity: {
      borderColor: "#EDEAFD",
      bg: "#EDEAFD",
      color: "#4529E6",
      _hover: { bg: "#B0A6F0", borderColor: "#B0A6F0" },
    },
    light: {
      borderColor: "#FDFDFD",
      bg: "#FDFDFD",
      color: "#212529",
    },
    outlineLight: {
      borderColor: "#FDFDFD",
      bg: "#FDFDFD",
      color: "#FDFDFD",
      _hover: { color: "#212529" },
    },
    outline: {
      borderColor: "#0B0D0D",
      bg: "#FDFDFD",
      color: "#0B0D0D",
      _hover: { bg: "#212529", borderColor: "#212529", color: "#FDFDFD" },
    },
    outline2: {
      borderColor: "#ADB5BD",
      bg: "#FDFDFD",
      color: "#0B0D0D",
      _hover: { bg: "#212529", borderColor: "#212529", color: "#FDFDFD" },
      _focus: { bg: "#4529E6", borderColor: "#4529E6", color: "#ffff" },
    },
    outlineBrand: {
      borderColor: "#4529E6",
      bg: "#FDFDFD",
      color: "#4529E6",
      _hover: { bg: "#EDEAFD", borderColor: "#4529E6" },
    },
    alert: {
      borderColor: "#FFE5E5",
      bg: "#FFE5E5",
      color: "#CD2B31",
      _hover: { bg: "#FDD8D8", borderColor: "#FDD8D8" },
    },
    sucess: {
      borderColor: "#DDF3E4",
      bg: "#DDF3E4",
      color: "#18794E",
      _hover: { bg: "#CCEBD7", borderColor: "#CCEBD7" },
    },
    brandDisable: {
      borderColor: "#B0A6F0",
      bg: "#B0A6F0",
      color: "#ffffff",
    },
    pageDefault: {
      borderRadius: 0,
      fontSize: "20px",
      borderColor: "#ADB5BD",
      bg: "transparent",
      color: "#ADB5BD",
      _hover: { bg: "#DEE2E6", color: "#4529E6" },
    },
    pageSelected: {
      borderRadius: 0,
      fontSize: "20px",
      borderColor: "#ADB5BD",
      bg: "transparent",
      color: "#4529E6",
      _hover: { bg: "#DEE2E6" },
    },
  },
  defaultProps: {
    size: "md",
    variant: "brand1",
  },
};

export const Button = defineStyleConfig(ButtonStyle);
