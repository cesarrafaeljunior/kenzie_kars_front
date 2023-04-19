import axios from "axios";

export const searchCEP = async (cep: string) =>
  await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

const api = axios.create({
  baseURL: "https://localhost:3000",
  timeout: 5000
})

export default api