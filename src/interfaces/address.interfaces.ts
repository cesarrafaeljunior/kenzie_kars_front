export interface iAddressRequest {
  cep: string;
  state: string;
  city: string;
  street: string;
  number?: string;
  complement?: string;
}
export interface iAddressUpdate {
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: string;
  complement?: string;
}

export interface iAddress extends iAddressRequest {
  id: string;
}

export interface iAddressResponse {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
}
