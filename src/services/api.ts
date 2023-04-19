import axios from "axios";

export const apiSearchCEP = async (cep: string) =>
  await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

export const api = axios.create({
  baseURL: "https://localhost:3001",
  timeout: 5000,
});
