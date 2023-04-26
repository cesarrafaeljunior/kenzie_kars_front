import { useAdvertContext } from "@/contexts/advert.context";
import { iFilterList } from "@/interfaces/components.interfaces";
import { Box, Button, Heading } from "@chakra-ui/react";

export const HomeFilter = () => {
  const { advertsList, loadAdverts, filterParams, setFilterParams } =
    useAdvertContext();

  const filterObj: iFilterList = {
    Marca: { name: "brand", values: [] },
    Modelo: { name: "model", values: [] },
    Combustível: { name: "fuel", values: [] },
    Cor: { name: "color", values: [] },
    Ano: { name: "year", values: [] },
  };

  advertsList.forEach((advert) => {
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

  const submitFilter = (target: HTMLButtonElement, filter: string) => {
    setFilterParams((oldFilterParams) => {
      oldFilterParams[filter] = target.innerText;
      loadAdverts(oldFilterParams);
      return oldFilterParams;
    });
  };

  const resetFilter = () => {
    setFilterParams({});
    loadAdverts();
  };

  return (
    <>
      {Object.keys(filterObj).map((filterHeader) => (
        <Box
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
              onClick={(e) =>
                submitFilter(
                  e.target as HTMLButtonElement,
                  filterObj[filterHeader].name
                )
              }
            >
              {item}
            </Button>
          ))}
        </Box>
      ))}
      <Button marginBottom={"20px"} variant={"brand1"} onClick={resetFilter}>
        Limpar filtros
      </Button>
    </>
  );
};
