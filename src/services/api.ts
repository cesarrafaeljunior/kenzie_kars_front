import axios from "axios";

export const apiSearchCEP = async (cep: string) =>
  await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

export const api = axios.create({
  baseURL: "http://localhost:8000",
});
