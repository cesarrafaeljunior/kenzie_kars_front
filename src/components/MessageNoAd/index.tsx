import { iMessage } from "@/interfaces/components.interfaces";
import { Text } from "@chakra-ui/react";

export const MessageNoAd = ({ message }: iMessage) => {
  return (
    <Text as="h2" fontSize={"23px"} color={"grey.2"}>
      {message}
    </Text>
  );
};
