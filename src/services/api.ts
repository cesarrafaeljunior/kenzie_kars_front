import axios from "axios";

export const apiSearchCEP = async (cep: string) =>
  await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

export const api = axios.create({
  baseURL: "https://motors-shop-back-end.vercel.app",
  timeout: 5000,
});

export const apiKenzieKars = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
  timeout: 5000,
});
