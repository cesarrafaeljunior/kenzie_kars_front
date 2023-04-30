import { iContextProps, iUserContext } from "@/interfaces/context.interfaces";
import { iUser, iUserRequest, iUserUpdate } from "@/interfaces/user.interfaces";
import { api } from "@/services/api";
import { destroyCookie, parseCookies } from "nookies";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./auth.context";
import { iAddressUpdate } from "@/interfaces/address.interfaces";
import { useToast } from "@chakra-ui/react";

const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iContextProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const { logout } = useAuthContext();
  const toast = useToast({
    position: "top",
    duration: 3000,
    isClosable: true,
  });

  useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = async () => {
    const cookies = parseCookies();
    const token = cookies["ms.token"];

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      await api
        .get<iUser>("/users/profile")
        .then(({ data }) => {
          setUser(data);
        })
        .catch((err) => {
          console.log(err);
          destroyCookie(null, "ms.token", { path: "/" });
        });
    }
  };

  const createUser = async (data: iUserRequest, onOpen: () => void) => {
    await api
      .post<iUser>("/users", data)
      .then((resp) => {
        onOpen();
      })
      .catch((err) => {
        console.log(err);
        toast({ status: "error", description: err.response.data.message });
      });
  };

  const updateUser = async (data: iUserUpdate, userId: string) => {
    await api
      .patch<iUser>(`/users/${userId}`, data)
      .then(({ data }) => {
        setUser(data);
        toast({ status: "success", title: "Usuário atualizado com sucesso!" });
      })
      .catch((err) => {
        console.log(err);
        toast({ status: "error", description: err.response.data.message });
      });
  };

  const softDeleteUser = async (userId: string) => {
    await api
      .delete(`/users/${userId}`)
      .then(({ data }) => {
        setUser(data);
        toast({ status: "success", title: "Conta deletada com sucesso!" });
        logout();
      })
      .catch((err) => {
        console.log(err);
        toast({ status: "error", description: err.response.data.message });
      });
  };

  const updateUserAddress = async (data: iAddressUpdate) => {
    await api
      .patch("/address")
      .then(() => {
        toast({ status: "success", title: "Endereço atualizado com sucesso!" });
      })
      .catch((err) => {
        console.log(err);
        toast({ status: "error", description: err.response.data.message });
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        getUserProfile,
        createUser,
        updateUser,
        softDeleteUser,
        updateUserAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
