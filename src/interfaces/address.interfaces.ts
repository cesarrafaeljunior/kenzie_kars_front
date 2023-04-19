export interface iAddressRequest {
  cep: string;
  state: string;
  city: string;
  street: string;
  number?: string;
  complement?: string;
}
