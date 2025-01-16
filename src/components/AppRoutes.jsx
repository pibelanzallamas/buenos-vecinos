import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />}></Route>
      <Route path="login" element={<Login />}></Route>
    </Routes>
  );
}

export default AppRoutes;
