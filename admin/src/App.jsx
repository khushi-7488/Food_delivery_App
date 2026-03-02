import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/sideBar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Order";
import { ToastContainer } from "react-toastify";

const App = () => {
  const url = "http://localhost:4000";
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <ToastContainer />
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
