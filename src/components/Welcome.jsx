import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div>
      <p>¿Es usted cliente o negocio?</p>
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
        Almacen
      </button>
    </div>
  );
}

export default Welcome;
