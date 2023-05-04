import { iTextArea } from "@/interfaces/components.interfaces";
import { WarningIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Flex,
  Textarea,
  Text,
  Box,
  Tooltip,
} from "@chakra-ui/react";

export const TextAreaField = ({
  label,
  placeholder,
  register,
  borderColor,
  errors,
}: iTextArea) => {
  return (
    <FormControl>
      <FormLabel
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={"8px"}
      >
        <Flex>
          <Box>
            <Text
              fontFamily="Inter, sans-serif"
              fontSize="14px"
              fontWeight="600"
              color="#212529"
            >
              {label}
            </Text>
          </Box>
          <Box>
            <>
              {errors ? (
                <Tooltip
                  label={errors}
                  hasArrow
                  shouldWrapChildren
                  placement="right"
                  color="grey.whiteFixed"
                  bgColor="feedback.alert1"
                  border="1px solid"
                  borderRadius={"md"}
                  fontSize={"14px"}
                  p={2}
                >
                  <WarningIcon
                    boxSize={"1rem"}
                    color={"feedback.alert1"}
                    m={1}
                  />
                </Tooltip>
              ) : (
                <></>
              )}
            </>
          </Box>
        </Flex>
        <Flex flexDirection={"column"}>
          <Textarea
            placeholder={placeholder}
            {...register}
            w="100%"
            height="48px"
            color="#868E96"
            border="solid 1px transparent"
            borderColor={borderColor}
            _focus={{ border: "solid 1.5px #5126EA" }}
            _hover={{ bg: "#F1F3F5" }}
            variant={{ outline: "none" }}
            fontFamily="Inter, sans-serif"
            resize="none"
          />
        </Flex>
      </FormLabel>
    </FormControl>
  );
};
