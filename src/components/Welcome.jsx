import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="content-page welcome-page">
      <p>Bienvenido a Buenos Vecinos</p>
      <div className="buttons-welcome">
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Ingresar
        </button>
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          Registrarse
        </button>
      </div>
    </div>
  );
}

export default Welcome;
