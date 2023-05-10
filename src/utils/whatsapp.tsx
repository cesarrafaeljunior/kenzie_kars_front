import { WhatsAppButtonProps } from "@/interfaces/components.interfaces";
import { Button } from "@chakra-ui/react";
import React from "react";

const WhatsAppButton = ({ phoneNumber, modelName }: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Estou interessado no seu anúncio ${modelName}`
    );
    window.open(
      `https://api.whatsapp.com/send?phone=+55${phoneNumber}&text=${message}`
    );
  };
  return (
    <>
      <Button size={"sm"} onClick={handleWhatsAppClick}>
        Comprar
      </Button>
    </>
  );
};

export default WhatsAppButton;
