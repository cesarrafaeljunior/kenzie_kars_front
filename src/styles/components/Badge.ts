import { defineStyleConfig, ComponentStyleConfig } from "@chakra-ui/react";

export const BadgeStyle: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "medium",
    fontSize: "14px",
    lineHeight: "24px",
    padding: "0 8px",
    borderRadius: "0",
    textTransform: "unset",
    fontFamily: "Inter, sans-serif",
  },
  variants: {
    disabled: {
      bg: "#ADB5BD",
      color: "#FFFFFF",
    },
    brand1: {
      bg: "#4529E6",
      color: "#FFFFFF",
    },
    goodBargain: {
      bg: "#349974",
      color: "#FFFFFF",
      borderRadius: "2px",
      padding: "4px",
    },
  },
};

export const Badge = defineStyleConfig(BadgeStyle);
