import { Dispatch, ReactNode, SetStateAction } from "react";
import { iLogin, iUser, iUserRequest } from "./user.interfaces";
import { iAdvertListByUser } from "./advert.interfaces";

export interface iContextProps {
  children: ReactNode;
}

export interface iAdvertContext {
  modalVehicleImage: string;
  setModalVehicleImage: Dispatch<SetStateAction<string>>;
  advertsList: iAdvert[];
  getAdvertiseListByUserId: (userId: string) => Promise<void>;
  advertiseListByUser: iAdvertListByUser | null;
  brandsList: string[];
  brandSelect: string;
  setBrandSelect: Dispatch<SetStateAction<string>>;
  modelList: iAdvertObject[];
  setModelList: Dispatch<SetStateAction<[]>>;
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
  price: number;
  description: string;
  cover_image: string;
  location: string;
  is_avaliable: boolean;
}

export interface iUserContext {
  user: iUser | null;
  setUser: Dispatch<SetStateAction<iUser | null>>;
  getUserProfile: () => Promise<void>;
  createUser: (data: iUserRequest, onOpen: () => void) => Promise<void>;
}

export interface iAuthContext {
  login: (data: iLogin) => Promise<void>;
  logout: () => void;
}
