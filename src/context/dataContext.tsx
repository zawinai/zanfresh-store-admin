import React, { createContext, useContext, useState } from "react";
import { widgets, pieChartData, barChartData } from "../initialStates/data";

export const initialStates = {
  widgets: widgets,

  pieChartData: pieChartData,
  barChartData: barChartData,
};

const DataContext = createContext(initialStates);

export const DataContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  // temporarily i use any for now..
  const [widgets, setWidgets] = useState<any>([]);
  const [pieChartData, setPieChartData] = useState<any>(null);
  const [barChartData, setBarChartData] = useState<any>(null);

  return (
    <DataContext.Provider value={{ widgets, pieChartData, barChartData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
