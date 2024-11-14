import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import FirstPage from "./FirstPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />}></Route>
      <Route path="login" element={<Login />}></Route>
    </Routes>
  );
}

export default AppRoutes;
