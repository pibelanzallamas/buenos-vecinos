import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log("hoooa");
  }

  return (
    <div className="content-page login-page register-page">
      <section>
        <h3>Registrarse</h3>
      </section>
      <section>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input">
            <label htmlFor="email">Nombre y Apellido:</label>
            <input type="email" name="email" id="name" required></input>
          </div>
          <div className="input">
            <label htmlFor="password">Email:</label>
            <input
              type="password"
              name="password"
              id="password"
              required
            ></input>
          </div>
          <div className="input">
            <label htmlFor="email">País:</label>
            <input type="email" name="email" id="name" required></input>
          </div>
          <div className="input">
            <label htmlFor="password">Provincia:</label>
            <input
              type="password"
              name="password"
              id="password"
              required
            ></input>
          </div>
          <div className="input">
            <label htmlFor="email">Ciudad:</label>
            <input type="email" name="email" id="name" required></input>
          </div>
          <div className="input">
            <label htmlFor="password">Barrio/Districto:</label>
            <input
              type="password"
              name="password"
              id="password"
              required
            ></input>
          </div>
          <div className="input">
            <label htmlFor="email">Contraseña:</label>
            <input type="email" name="email" id="name" required></input>
          </div>
          <div className="input">
            <label htmlFor="password">Repetir Contraseña:</label>
            <input
              type="password"
              name="password"
              id="password"
              required
            ></input>
          </div>
          <div className="input">
            <label htmlFor="password">Numero:</label>
            <input
              type="password"
              name="password"
              id="password"
              required
            ></input>
          </div>
          <div className="input">
            <label htmlFor="password">Elegir rol:</label>
            <input
              type="password"
              name="password"
              id="password"
              required
            ></input>
          </div>
          <div className="input">
            <label htmlFor="password">Nombre del Negocio:</label>
            <input
              type="password"
              name="password"
              id="password"
              required
            ></input>
          </div>
          <div className="input">
            <label htmlFor="password">Tipo de Negocio:</label>
            <input
              type="password"
              name="password"
              id="password"
              required
            ></input>
          </div>

          <div className="input">
            <label>
              <input type="checkbox"></input>
              ¿Deséa recibir notificaciones?
            </label>
          </div>

          <button type="submit">Entrar</button>
        </form>
      </section>
      <section>
        <p>
          <a href="#" onClick={() => navigate("/login")}>
            ¿Ya tiene cuenta?
          </a>
        </p>
      </section>
    </div>
  );
}

export default Register;
