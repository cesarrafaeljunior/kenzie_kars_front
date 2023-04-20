import { iUser } from "./user.interfaces";

export interface iAdvertListByUser extends iUser {
  adverts: Omit<iAdvert, "user">[];
}

export interface iAdvert {
  id: string;
  title: string;
  mileage: number;
  price: string;
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
