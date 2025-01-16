import React from "react";
import { useLocation } from "react-router-dom";

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("hoooa");
  }

  function handleClick() {
    console.log("click");
  }

  return (
    <div className="content-page form-page">
      <h3>Iniciar Sesión</h3>
      <form onSubmit={(e) => handleSubmit(e)} className="user-form">
        <div className="input">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="name" required></input>
        </div>
        <div className="input">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" name="password" id="password" required></input>
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p>
        <a href="#" onClick={() => handleClick()}>
          ¿Necesíta registrarse?
        </a>
      </p>
    </div>
  );
}

export default Login;
