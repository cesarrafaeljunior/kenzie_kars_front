import { iAdvertListByUser } from "@/interfaces/advert.interfaces";
import { iAdvertContext, iContextProps } from "@/interfaces/context.interfaces";
import { api } from "@/services/api";
import { createContext, useContext, useState } from "react";

const AdvertContext = createContext<iAdvertContext>({} as iAdvertContext);

export const AdvertProvider = ({ children }: iContextProps) => {
  const [modalVehicleImage, setModalVehicleImage] = useState<string>("");
  const [advertiseListByUser, setAdvertiseListByUser] =
    useState<iAdvertListByUser | null>(null);

  const getAdvertiseListByUserId = async (userId: string) => {
    await api
      .get<iAdvertListByUser>(`/advertised/users/${userId}`)
      .then(({ data }) => {
        setAdvertiseListByUser(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <AdvertContext.Provider
      value={{
        modalVehicleImage,
        setModalVehicleImage,
        getAdvertiseListByUserId,
        advertiseListByUser,
      }}
    >
      {children}
    </AdvertContext.Provider>
  );
};

export const useAdvertContext = () => useContext(AdvertContext);
