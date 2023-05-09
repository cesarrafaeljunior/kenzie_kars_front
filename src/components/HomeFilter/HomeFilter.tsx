import { useAdvertContext } from "@/contexts/advert.context";
import { iFilterList } from "@/interfaces/components.interfaces";
import { Box, Button, Heading } from "@chakra-ui/react";
import { BetweenFilter } from "./BetweenFilter";

export const HomeFilters = () => {
  const { advertsList, loadAdverts, setFilterParams, submitAdvertFilter } =
    useAdvertContext();

  const filterObj: iFilterList = {
    Marca: { name: "brand", values: [] },
    Modelo: { name: "model", values: [] },
    Combustível: { name: "fuel", values: [] },
    Cor: { name: "color", values: [] },
    Ano: { name: "year", values: [] },
  };

  advertsList?.unpaginatedResults.forEach((advert) => {
    filterObj.Marca.values.push(advert.brand);
    filterObj.Modelo.values.push(advert.model);
    filterObj.Combustível.values.push(advert.fuel);
    filterObj.Cor.values.push(advert.color);
    filterObj.Ano.values.push(advert.year + "");
  });

  Object.keys(filterObj).map(
    (key) =>
      (filterObj[key].values = filterObj[key].values.reduce(
        (acc: string[], curr: string) => {
          if (!acc.includes(curr)) {
            acc.push(curr);
          }
          return acc;
        },
        []
      ))
  );

  const resetFilter = () => {
    setFilterParams({});
    loadAdverts();
  };

  return (
    <>
      {Object.keys(filterObj).map((filterHeader) =>
        filterObj[filterHeader].values.length == 0 ? null : (
          <Box
            key={filterHeader}
            gap={"3px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            display={"flex"}
          >
            <Heading marginBottom={"10px"} fontSize={"28px"}>
              {filterHeader}
            </Heading>
            {filterObj[filterHeader].values.map((item) => (
              <Button
                key={item}
                fontSize={"20px"}
                display={"box"}
                textAlign={"left"}
                width={"min-content"}
                padding={"0"}
                height={"min-content"}
                color={"grey.3"}
                variant={""}
                onClick={(e) => {
                  const target = e.target as HTMLButtonElement;
                  submitAdvertFilter(
                    filterObj[filterHeader].name,
                    target.innerText
                  );
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        )
      )}
      <BetweenFilter headingName={"KM"} requestName={"mileage"} />
      <BetweenFilter headingName={"Preço"} requestName={"price"} />
      <Button marginBottom={"20px"} variant={"brand1"} onClick={resetFilter}>
        Limpar filtros
      </Button>
    </>
  );
};
