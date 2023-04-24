import { iContextProps, iUserContext } from "@/interfaces/context.interfaces";
import { iUser } from "@/interfaces/user.interfaces";
import { api } from "@/services/api";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iContextProps) => {
  const [user, setUser] = useState<iUser | null>(null);

  useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODIwMTM1NjEsImV4cCI6MTY4MjA0MjM2MSwic3ViIjoiYWY4YTFjNjktNDI0Yy00NzY5LThiZWMtMDFiY2FlNTIwZTFiIn0.u6s241uWDO3e3ETcxa-C7ETryeGdpM6evtaJAlYNUrU";

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      await api
        .get<iUser>("/users/profile")
        .then(({ data }) => {
          setUser(data);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, getUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
