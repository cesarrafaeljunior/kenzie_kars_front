import { Dispatch, ReactNode, SetStateAction } from "react";
import { iLogin, iUser, iUserRequest, iUserUpdate } from "./user.interfaces";
import { iAdvert, iAdvertListByUser } from "./advert.interfaces";
import { iAddressUpdate } from "./address.interfaces";

export interface iContextProps {
  children: ReactNode;
}

export interface iAdvertContext {
  modalVehicleImage: string;
  setModalVehicleImage: Dispatch<SetStateAction<string>>;
  advertsList: iAdvert[]
  getAdvertiseListByUserId: (userId: string) => Promise<void>;
  advertiseListByUser: iAdvertListByUser | null;
}

export interface iUserContext {
  user: iUser | null;
  setUser: Dispatch<SetStateAction<iUser | null>>;
  getUserProfile: () => Promise<void>;
  createUser: (data: iUserRequest, onOpen: () => void) => Promise<void>;
  updateUser: (data: iUserUpdate, userId: string) => Promise<void>
  softDeleteUser: (userId: string) => Promise<void>
  updateUserAddress: (data: iAddressUpdate) => Promise<void>
}

export interface iAuthContext {
  login: (data: iLogin) => Promise<void>;
  logout: () => void;
}
