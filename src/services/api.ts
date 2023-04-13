import axios from "axios";

export const searchCEP = async (cep: string) =>
  await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
