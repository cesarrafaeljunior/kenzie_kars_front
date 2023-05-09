import { useAdvertContext } from "@/contexts/advert.context";
import { Box, Button } from "@chakra-ui/react";

interface iPaginationNumbers {
  first: string | null;
  previous: string | null;
  next: string | null;
  last: string | null;
  callbackToChangePage: (key: string, value: string) => void;
}

export const PaginationNumbers = ({
  first,
  previous,
  next,
  last,
  callbackToChangePage,
}: iPaginationNumbers) => {
  const extractPageNumber = (url: string | null) => {
    return url ? Number(url.split("page=", 2)[1]) : null;
  };

  const pages: string[] = [];

  const fillPages = () => {
    const firstPage = extractPageNumber(first);
    pages[1] = firstPage ? "pageDefault" : "pageSelected";
    const previousPage = extractPageNumber(previous);
    if (previousPage) {
      pages[previousPage] = "pageDefault";
      pages[previousPage + 1] = "pageSelected";
    }
    const lastPage = extractPageNumber(last);
    if (lastPage) {
      pages[lastPage] = "pageDefault";
    }
    const nextPage = extractPageNumber(next);
    if (nextPage) {
      pages[nextPage] = "pageDefault";
    }
  };
  fillPages();

  const handleClick = (page: number) => {
    callbackToChangePage("page", page.toString());
  };

  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      fontWeight={"bold"}
      my={"80px"}
    >
      <Box display={"flex"} flexWrap={"wrap"}>
        {pages.map((theme, index) => (
          <Button
            key={index}
            variant={theme}
            onClick={() => theme == "pageDefault" && handleClick(index)}
          >
            {index}
          </Button>
        ))}
        {next && (
          <Button
            variant={"pageDefault"}
            onClick={() => handleClick(extractPageNumber(next)!)}
          >
            Seguinte {">"}
          </Button>
        )}
      </Box>
    </Box>
  );
};
