import { ReactNode, Dispatch, SetStateAction } from "react";
import { iAddressUpdate } from "./address.interfaces";
import {
  iAdvertisedRequest,
  iAdvertListByUser,
  iAdvert,
  iAdvertObject,
  iAdvertisedUpdate,
} from "./advert.interfaces";
import { iUser, iUserRequest, iLogin, iUserUpdate } from "./user.interfaces";
import { iFilterParams, onOpen } from "./components.interfaces";
import { iComment, iCommentRequest } from "./comment.interface";

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
  loadAdverts: (filterParams?: iFilterParams) => Promise<void>;
  filterParams: iFilterParams;
  setFilterParams: Dispatch<SetStateAction<iFilterParams>>;
  submitAdvertFilter: (key: string, value: string) => void;
  updateAdv: (
    data: iAdvertisedUpdate,
    onOpen: () => void,
    advertId: string
  ) => Promise<void>;
  deleteAdv: (
    advertId: string,
    onOpen: () => void,
    userId: string
  ) => Promise<void>;
  setAdvertPatchDeleteId: Dispatch<SetStateAction<string>>;
  advertPatchDeleteId: string;
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

export interface iCommentContext {
  textAreaField: string;
  setTextAreaField: Dispatch<string>;
  checkUserIsLogged: (data: onOpen) => void;
  createComment: (data: iCommentRequest) => void;
  currentComments: iComment[];
  setCurrentComments: Dispatch<iComment[]>;
}
