import { iAdvertContext, iContextProps } from "@/interfaces/context.interfaces";
import { createContext, useContext, useState } from "react";

const AdvertContext = createContext<iAdvertContext>({} as iAdvertContext);

export const AdvertProvider = ({ children }: iContextProps) => {
  const [modalVehicleImage, setModalVehicleImage] = useState("");

  return (
    <AdvertContext.Provider value={{ modalVehicleImage, setModalVehicleImage }}>
      {children}
    </AdvertContext.Provider>
  );
};

export const useAdvertContext = () => useContext(AdvertContext);
