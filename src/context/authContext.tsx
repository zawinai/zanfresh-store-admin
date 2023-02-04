import React, { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
import { IAuthUser } from "../types";

const AuthContext = createContext<IAuthUser>({
  loading: false,
  setLoading: () => {},
  user: null,
  setUser: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
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
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
