import { iContextProps, iAuthContext } from "@/interfaces/context.interfaces";
import { useRouter } from "next/router";
import { destroyCookie, setCookie } from "nookies";
import { createContext, useContext } from "react";
import { useUserContext } from "./user.context";
import { iLogin, iLoginResponse } from "@/interfaces/user.interfaces";
import { api } from "@/services/api";
import { toast } from "react-toastify";

const AuthContext = createContext<iAuthContext>({} as iAuthContext);

export const AuthProvider = ({ children }: iContextProps) => {
  const router = useRouter();
  const { setUser, getUserProfile } = useUserContext();

  const login = async (data: iLogin) => {
    await api
      .post<iLoginResponse>("/login", data)
      .then(async (resp) => {
        toast.success("login realizado");

        setCookie(null, "ms.token", resp.data.token, {
          maxAge: 60 * 60 * 7,
          path: "/",
        });
        await getUserProfile();
        router.push("/profile");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const logout = () => {
    destroyCookie(null, "ms.token");
    setUser(null);
    router.push("/login");
  };
  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
