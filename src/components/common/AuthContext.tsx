import React, { ReactNode, useContext, useState } from "react";

interface ProviderProps {
  isLoggin: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = React.createContext<ProviderProps>({} as ProviderProps);
interface Props {
  children: ReactNode;
}

export default AuthContext;
export const AuthContextProvider = ({ children }: Props) => {
  const [isLoggin, setIsLogin] = useState(false);
  const login = (username: string, password: string) => {
    setIsLogin(true);
  };
  const logout = () => {
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => {
  return useContext(AuthContext);
};
