import { ReactNode, Dispatch, SetStateAction } from "react";
import {
  iAdvertisedRequest,
  iAdvertListByUser,
  iAdvertObject,
} from "./advert.interfaces";
import { iUser, iUserRequest, iUserUpdate, iLogin } from "./user.interfaces";

export interface iContextProps {
  children: ReactNode;
}

export interface iAdvertContext {
  modalVehicleImage: string;
  createAdv: (data: iAdvertisedRequest) => Promise<void>;
  setModalVehicleImage: Dispatch<SetStateAction<string>>;
  getAdvertiseListByUserId: (userId: string) => Promise<void>;
  advertiseListByUser: iAdvertListByUser | null;
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
  updateUser: (data: iUserUpdate, userId: string) => Promise<void>;
  softDeleteUser: (userId: string) => Promise<void>;
}

export interface iAuthContext {
  login: (data: iLogin) => Promise<void>;
  logout: () => void;
}
