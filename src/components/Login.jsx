import React from "react";
import { useLocation } from "react-router-dom";

function Login() {
  return (
    <div className="content-page form-page">
      <h3>Iniciar Sesión</h3>
      <form className="user-form">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="name"></input>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password"></input>
      </form>
    </div>
  );
}

export default Login;
