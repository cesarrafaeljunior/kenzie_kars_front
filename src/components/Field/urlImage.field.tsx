import { iUrlImageField } from "@/interfaces/components.interfaces";
import { DeleteIcon, WarningIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Flex,
  Input,
  Box,
  Tooltip,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";

export const UrlImageField = ({
  label,
  index,
  register,
  errors,
  handleRemoveImage,
}: iUrlImageField) => {
  return (
    <FormControl key={index}>
      <Flex>
        <FormLabel fontFamily={"body"} fontWeight={"bold"} fontSize={"14px"}>
          {label}
        </FormLabel>
        <Box>
          {errors && (
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
              <WarningIcon boxSize={"1rem"} color={"feedback.alert1"} m={1} />
            </Tooltip>
          )}
        </Box>
      </Flex>
      <InputGroup>
        <Input
          borderColor={errors ? "feedback.alert1" : "#E9ECEF"}
          placeholder="http://site.com/imagem.jpg"
          {...register}
        />
        <InputRightElement>
          <IconButton
            h={"88%"}
            color="grey.3"
            variant="outline"
            size="sm"
            aria-label="delete"
            icon={<DeleteIcon />}
            onClick={() => handleRemoveImage(index)}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};
