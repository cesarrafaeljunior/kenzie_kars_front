import { Dispatch, ReactNode, SetStateAction } from "react";
import { iUser } from "./user.interfaces";
import { iAdvert } from "./advert.interfaces";

export interface iContextProps {
  children: ReactNode;
}

export interface iAdvertContext {
  modalVehicleImage: string;
  setModalVehicleImage: Dispatch<SetStateAction<string>>;
  advertsList: iAdvert[]
}

export interface iUserContext {
  user: iUser | null;
  setUser: Dispatch<SetStateAction<iUser | null>>;
}
