import { useAdvertContext } from "@/contexts/advert.context";
import { iBetweenFilter } from "@/interfaces/components.interfaces";
import { Box, Heading, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const BetweenFilter = ({ headingName, requestName }: iBetweenFilter) => {
  const { filterParams, setFilterParams, submitAdvertFilter } =
    useAdvertContext();
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
          type="number"
          placeholder="Mínimo"
          value={minValue}
          onChange={(e) => {
            setMinValue(e.target.value);
            submitAdvertFilter(minValueName, e.target.value);
          }}
        />
        <Input
          borderRadius={"0px"}
          width={"120px"}
          padding={"0"}
          textAlign={"center"}
          backgroundColor={"grey.5"}
          type="number"
          placeholder="Máximo"
          value={maxValue}
          onChange={(e) => {
            setMaxValue(e.target.value);
            submitAdvertFilter(maxValueName, e.target.value);
          }}
        />
      </Box>
    </Box>
  );
};
