import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Sidebar from "./components/sidebar";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Sidebar />
      <div className={`max-w-[1200px] mx-auto md:ml-64`}>
        <Layout />
      </div>
    </>
  );
}

export default App;
