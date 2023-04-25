import { iAddressRequest } from "./address.interfaces";

export interface iUserRequest {
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  birthdate: Date;
  description: string;
  password: string;
  is_seller: boolean;
  address: iAddressRequest;
  confirm_password: string;
}
export interface iUserUpdate {
  name?: string;
  email?: string;
  cpf?: string;
  phone_number?: string;
  birthdate?: Date;
  description?: string;
  password?: string;

}

export interface iUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  birthdate: string;
  description: string;
  is_seller: boolean;
  created_at: string;
  updated_at: string;
}

export interface iLogin {
  email: string;
  password: string;
}

export interface iLoginResponse {
  token: string;
}

export type tUserRecoverEmail = {
  email: string;
};

export type tUserRecoverPassword = {
  password: string;
  confirm_password: string;
};
