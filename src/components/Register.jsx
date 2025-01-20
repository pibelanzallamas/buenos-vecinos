import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hoooa");
  };

  return (
    <div className="content-page login-page register-page">
      <section>
        <h3>Registrarse</h3>
      </section>
      <section>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input">
            <label htmlFor="name">Nombre y Apellido</label>
            <input
              type="text"
              name="name"
              id="name"
              maxLength={45}
              minLength={5}
              required
            ></input>
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              maxLength={30}
              minLength={5}
              required
            ></input>
          </div>
          <div className="input">
            <label htmlFor="country">País</label>
            <input
              type="text"
              name="country"
              id="country"
              maxLength={25}
              minLength={3}
              required
            ></input>
          </div>
          <div className="input">
            <label htmlFor="providence">Provincia</label>
            <input
              type="text"
              name="providence"
              id="providence"
              maxLength={25}
              minLength={3}
              required
            ></input>
          </div>
          <div className="input">
            <label htmlFor="city">Ciudad</label>
            <input
              type="text"
              name="city"
              id="city"
              maxLength={25}
              minLength={3}
              required
            ></input>
          </div>
          <div className="input">
            <label htmlFor="district">Barrio/Districto</label>
            <input
              type="text"
              name="district"
              id="district"
              maxLength={25}
              minLength={3}
              required
            ></input>
          </div>
          <div className="input">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              maxLength={30}
              minLength={8}
              required
            ></input>
          </div>
          <div className="input">
            <label htmlFor="repeat-password">Repetir Contraseña</label>
            <input
              type="password"
              name="password"
              id="repeat-password"
              maxLength={30}
              minLength={8}
              required
            ></input>
          </div>
          <div className="input">
            <label htmlFor="number">Numero</label>
            <input
              type="number"
              name="number"
              id="number"
              max={9999999999999}
              maxLength={20}
              min={111111}
            ></input>
          </div>
          <div className="input">
            <label htmlFor="rol">Elegir rol</label>
            <select name="rol" id="rol" defaultValue={"client"} required>
              <option value={"client"}>Cliente</option>
              <option value={"commerce"}>Comercio</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="commerce-name">Nombre del Negocio</label>
            <input
              type="text"
              name="commerce-name"
              id="commerce-name"
              maxLength={25}
              minLength={3}
              required
            ></input>
          </div>
          <div className="input">
            <label htmlFor="commerce-type">Rubro de Comercio</label>
            <select
              name="commerce-type"
              id="rcommerce-type"
              defaultValue={"almacen"}
              required
            >
              <option value={"alamcen"}>Almacén</option>
              <option value={"carniceria"}>Carnicería</option>
              <option value={"verduleria"}>Verduleríá</option>
              <option value={"dietetica"}>Dietética</option>
              <option value={"kiosko"}>Kiosco</option>
              <option value={"granja"}>Granja</option>
            </select>
          </div>

          <div></div>

          <div>
            <label className="checkbox">
              <input type="checkbox"></input>
              ¿Deséa recibir notificaciones?
            </label>
          </div>

          <div></div>
          <div></div>
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
