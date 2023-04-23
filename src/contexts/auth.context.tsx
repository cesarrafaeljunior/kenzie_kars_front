import { iContextProps, iAuthContext } from "@/interfaces/context.interfaces";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import { createContext, useContext } from "react";

const AuthContext = createContext<iAuthContext>({} as iAuthContext);

export const AuthProvider = ({ children }: iContextProps) => {
  const router = useRouter();
  const logout = () => {
    destroyCookie(null, "ms.token");
    router.push("/login");
  };
  return (
    <AuthContext.Provider value={{ logout }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
