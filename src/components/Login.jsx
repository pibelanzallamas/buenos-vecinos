import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hoooa");
    navigate("/home");
  };

  return (
    <div className="content-page login-page">
      <h3>Iniciar Sesión</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="name" required></input>
        </div>
        <div className="input">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" required></input>
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p>
        <a href="#" onClick={() => navigate("/register")}>
          ¿Necesíta registrarse?
        </a>
      </p>
    </div>
  );
}

export default Login;
