import { iInput } from "@/interfaces/components.interfaces";
import { WarningIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Flex,
  Input,
  Text,
  Box,
  Tooltip,
} from "@chakra-ui/react";

export const InputReadyOnlyField = ({
  label,
  type,
  placeholder,
  register,
  borderColor,
  errors,
}: iInput) => {
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
          <Input
            type={type}
            isReadOnly={true}
            placeholder={placeholder}
            w="100%"
            height="48px"
            color={"grey.0"}
            cursor="default"
            _placeholder={{ color: "grey.1" }}
            border="solid 1px transparent"
            borderColor={"grey.7"}
            _focus={{ border: "solid 1.5px brand.2" }}
            variant={{ outline: "none" }}
            fontFamily="Inter, sans-serif"
            {...register}
          />
        </Flex>
      </FormLabel>
    </FormControl>
  );
};
