import { Dispatch, ReactNode, SetStateAction } from "react";
import { iLogin, iUser, iUserRequest } from "./user.interfaces";
import {
  iAdvertListByUser,
  iAdvertObject,
  iAdvertisedRequest,
} from "./advert.interfaces";

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
}

export interface iAuthContext {
  login: (data: iLogin) => Promise<void>;
  logout: () => void;
}
