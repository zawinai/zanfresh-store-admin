import React, { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";

export interface IUser {}

export interface IAuthUser {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ShopContext = createContext<IAuthUser>({
  loading: false,
  setLoading: () => {},
  user: null,
  setUser: () => {},
});

type prop = {
  children: ReactNode;
};

export const ShopContextProvider = ({ children }: prop) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  onAuthStateChanged(auth, (data) => {
    setLoading(false);
    if (data) {
      setUser(data);
    } else {
      setUser(null);
    }
  });

  return (
    <ShopContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </ShopContext.Provider>
  );
};
