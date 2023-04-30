import { iAuthContext, iContextProps } from "@/interfaces/context.interfaces";
import { iLogin, iLoginResponse } from "@/interfaces/user.interfaces";
import { api } from "@/services/api";
import { useRouter } from "next/router";
import { setCookie, destroyCookie } from "nookies";
import { createContext, useContext } from "react";
import { useUserContext } from "./user.context";
import { useToast } from "@chakra-ui/react";

const AuthContext = createContext<iAuthContext>({} as iAuthContext);

export const AuthProvider = ({ children }: iContextProps) => {
  const router = useRouter();
  const { setUser, getUserProfile } = useUserContext();
  const toast = useToast({
    position: "top",
    duration: 3000,
    isClosable: true,
  });

  const login = async (data: iLogin) => {
    await api
      .post<iLoginResponse>("/login", data)
      .then(async (resp) => {
        toast({
          title: "Login realizado.",
          status: "success",
          description: "Logo você será redirecionado para o site.",
        });

        setCookie(null, "ms.token", resp.data.token, {
          maxAge: 60 * 60 * 7,
          path: "/",
        });
        await getUserProfile();
        router.push("/profile");
      })
      .catch((err) => {
        toast({
          title: "Erro ao fazer login",
          status: "error",
          description: err.message,
        });
      });
  };

  const logout = () => {
    destroyCookie(null, "ms.token", { path: "/" });
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
