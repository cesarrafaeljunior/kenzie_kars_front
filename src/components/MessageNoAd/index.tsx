import { Text } from "@chakra-ui/react";

interface iMessage {
  message: string;
}

export const MessageNoAd = ({ message }: iMessage) => {
  return (
    <Text as="h2" fontSize={"23px"} color={"grey.2"}>
      {message}
    </Text>
  );
};
