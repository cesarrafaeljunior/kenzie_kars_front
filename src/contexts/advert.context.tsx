import { iAdvert } from "@/interfaces/advert.interfaces";
import { iAdvertContext, iContextProps } from "@/interfaces/context.interfaces";
import { api } from "@/services/api";
import { createContext, useContext, useEffect, useState } from "react";

const AdvertContext = createContext<iAdvertContext>({} as iAdvertContext);

export const AdvertProvider = ({ children }: iContextProps) => {
  const [modalVehicleImage, setModalVehicleImage] = useState<string>("");
  const [advertsList, setAdvertsList] = useState<iAdvert[]>([]);

  useEffect(() => {
    async function loadAdverts() {
      const { data } = await api.get("/advertised");
      console.log(data);
      setAdvertsList(data);
    }
    loadAdverts();
  }, []);
  return (
    <AdvertContext.Provider
      value={{ modalVehicleImage, setModalVehicleImage, advertsList }}
    >
      {children}
    </AdvertContext.Provider>
  );
};

export const useAdvertContext = () => useContext(AdvertContext);
