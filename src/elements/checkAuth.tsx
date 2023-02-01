import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Navigate, Outlet } from "react-router-dom";

const CheckAuth = ({ children }: { children: React.ReactNode }) => {
  const { user } = useContext(ShopContext);

  if (user == null) {
    return <Navigate to='/' />;
  } else {
    return <Outlet />;
  }
};

export default CheckAuth;
