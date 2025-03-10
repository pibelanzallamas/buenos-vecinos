import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="home" element={<Home />}></Route>
    </Routes>
  );
}

export default AppRoutes;
