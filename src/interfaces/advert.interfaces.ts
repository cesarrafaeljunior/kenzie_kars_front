import { iUser } from "./user.interfaces";

export interface iAdvertListByUser extends iUser {
  adverts: Omit<iAdvert, "user">[];
}

export interface iAdvert {
  id: string;
  title: string;
  brand: string;
  fuel: string;
  color: string;
  mileage: number;
  price: number;
  year: number;
  model: string;
  description: string;
  cover_image: string;
  location: string;
  created_at: string;
  updated_at: string;
  is_avaliable: boolean;
  galery: iSellerGalery[];
  user: iUser;
}

export interface iSellerGalery {
  id: number;
  image: string;
}

export interface iAdvertObject {
  brand: string;
  fuel: number;
  id: string;
  name: string;
  value: number;
  year: string;
}

export interface iAdvertisedRequest {
  title: string;
  brand: string;
  model: string;
  fuel: string;
  color: string;
  year: string;
  mileage: number;
  fipe_price: number;
  price: number;
  description: string;
  cover_image: string;
  location: string;
  is_avaliable: boolean;
}
