import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <p>
        Bienvenido a Buenos Vecinos,<p></p> ¿es usted un cliente o un comercio?
      </p>
      <div className="buttons-welcome">
        <button
          onClick={() => {
            navigate("/login", { state: { cliente: true } });
          }}
        >
          Cliente
        </button>
        <button
          onClick={() => {
            navigate("/login", { state: { cliente: false } });
          }}
        >
          Comercio
        </button>
      </div>
    </div>
  );
}

export default Welcome;
