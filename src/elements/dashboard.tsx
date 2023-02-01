import React from "react";
import { ShopContext } from "../context/shopContext";

import { useContext } from "react";

const Dashboard = () => {
  const { user } = useContext(ShopContext);

  return (
    <div>
      <div>Dashboard</div>
    </div>
  );
};

export default Dashboard;
