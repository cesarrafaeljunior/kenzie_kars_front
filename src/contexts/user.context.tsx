import { iContextProps, iUserContext } from "@/interfaces/context.interfaces";
import { iUser } from "@/interfaces/user.interfaces";
import { createContext, useContext, useState } from "react";

const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iContextProps) => {
  const [user, setUser] = useState<iUser | null>({
    id: "af8a1c69-424c-4769-8bec-01bcae520e1b",
    name: "Thomas",
    email: "thom@mail.com",
    cpf: "12345678910",
    phone_number: "54981215552",
    birthdate: "1999-11-27T02:00:00.000Z",
    description: "Digite aqui uma descrição.",
    is_seller: true,
    created_at: "2023-04-11T18:54:16.819Z",
    updated_at: "2023-04-11T20:11:58.604Z",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
