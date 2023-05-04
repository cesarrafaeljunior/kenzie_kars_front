export const formatToNumber = (value: string) =>
  Number(
    value
      .replace(/[^0-9,]/g, "")
      .replaceAll(".", "")
      .replace(",", ".")
  );

export const formatValues = (value: number | string, to: "BRL" | "KM") => {
  if (typeof value == "string") {
    value = formatToNumber(value);
  }

  const formatter = {
    BRL: value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
    KM: value.toLocaleString("pt-BR"),
  };
  return formatter[to];
};
