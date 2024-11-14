import React from "react";
import { useNavigate } from "react-router-dom";

function FirstPage() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Es un cliente o un almacen?</p>
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

export default FirstPage;
