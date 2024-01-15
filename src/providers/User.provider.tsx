import { ReactNode, createContext, useContext, useState } from "react";
import { IUser } from "../interfaces/IUser";

type UserContextProviderProps = {
  user: IUser;
  setUser: (user: IUser) => void;
};

export const UserContext = createContext<UserContextProviderProps>({
  user: {
    id: undefined,
    name: undefined,
    surname: undefined,
    email: undefined,
    avatar: undefined,
    password: undefined,
    type: 3,
  },
  setUser: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(UserContext);

interface IUserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser>({
    id: undefined,
    name: undefined,
    surname: undefined,
    email: undefined,
    avatar: undefined,
    password: undefined,
    type: 3,
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
