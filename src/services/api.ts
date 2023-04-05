import axios from "axios";

export const searchCEP = (cep: string) => axios.get(`https://viacep.com.br/ws/${cep}/json/`);
