import { ReactNode, Dispatch, SetStateAction } from "react";
import { iAddressUpdate } from "./address.interfaces";
import {
  iAdvertisedRequest,
  iAdvertListByUser,
  iAdvert,
  iAdvertObject,
} from "./advert.interfaces";
import { iUser, iUserRequest, iLogin, iUserUpdate } from "./user.interfaces";

export interface iContextProps {
  children: ReactNode;
}

export interface iAdvertContext {
  modalVehicleImage: string;
  createAdv: (data: iAdvertisedRequest, onOpen: () => void) => Promise<void>;
  setModalVehicleImage: Dispatch<SetStateAction<string>>;
  getAdvertiseListByUserId: (userId: string) => Promise<void>;
  advertiseListByUser: iAdvertListByUser | null;
  advertsList: iAdvert[];
  brandsList: string[];
  brandSelect: string;
  setBrandSelect: Dispatch<SetStateAction<string>>;
  modelList: iAdvertObject[];
  setModelList: Dispatch<SetStateAction<[]>>;
}

export interface iUserContext {
  user: iUser | null;
  setUser: Dispatch<SetStateAction<iUser | null>>;
  getUserProfile: () => Promise<void>;
  createUser: (data: iUserRequest, onOpen: () => void) => Promise<void>;
  softDeleteUser: (userId: string) => Promise<void>;
  updateUserAddress: (data: iAddressUpdate) => Promise<void>;
  updateUser: (data: iUserUpdate, userId: string) => Promise<void>;
}

export interface iAuthContext {
  login: (data: iLogin) => Promise<void>;
  logout: () => void;
}
