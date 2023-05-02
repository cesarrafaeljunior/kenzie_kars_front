import { useAdvertContext } from "@/contexts/advert.context";
import { iBetweenFilter } from "@/interfaces/components.interfaces";
import { formatToNumber, formatValues } from "@/utils/valuesFormat.util";
import { Box, Heading, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const BetweenFilter = ({ headingName, requestName }: iBetweenFilter) => {
  const { filterParams, submitAdvertFilter } = useAdvertContext();
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  const minValueName = `min_${requestName}`;
  const maxValueName = `max_${requestName}`;

  useEffect(() => {
    if (Object.keys(filterParams).length == 0) {
      setMinValue("");
      setMaxValue("");
    }
  }, [filterParams]);

  return (
    <Box>
      <Heading marginBottom={"10px"} fontSize={"28px"}>
        {headingName}
      </Heading>
      <Box marginBottom={"20px"} gap={"10px"} display={"flex"}>
        <Input
          borderRadius={"0px"}
          width={"120px"}
          padding={"0"}
          textAlign={"center"}
          backgroundColor={"grey.5"}
          type="text"
          placeholder="Mínimo"
          maxLength={13}
          value={minValue}
          onChange={(e) => {
            setMinValue(e.target.value && formatValues(e.target.value, "KM"));
            submitAdvertFilter(
              minValueName,
              e.target.value && formatToNumber(e.target.value).toString()
            );
          }}
        />
        <Input
          borderRadius={"0px"}
          width={"120px"}
          padding={"0"}
          textAlign={"center"}
          backgroundColor={"grey.5"}
          type="text"
          placeholder="Máximo"
          maxLength={13}
          value={maxValue}
          onChange={(e) => {
            setMaxValue(e.target.value && formatValues(e.target.value, "KM"));
            submitAdvertFilter(
              maxValueName,
              e.target.value && formatToNumber(e.target.value).toString()
            );
          }}
        />
      </Box>
    </Box>
  );
};
