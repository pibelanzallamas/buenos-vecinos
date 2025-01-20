import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "../assets/Menu.svg";
import X from "../assets/X.svg";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <h3 onClick={() => navigate("/")}>Buenos Vecinos</h3>
        </li>

        <li>
          {menu ? (
            <figure onClick={() => setMenu(!menu)}>
              <img src={X} alt="x menu icon"></img>
            </figure>
          ) : (
            <figure onClick={() => setMenu(!menu)}>
              <img src={MenuIcon} alt="hamburger menu icon"></img>
            </figure>
          )}
        </li>
        {/* <a href="#" className="desk-nav-items">
          Inicio
        </a>
        <a href="#" className="desk-nav-items">
          Mapa
        </a>
        <a href="#" className="desk-nav-items">
          Fecha Límite
        </a> */}
      </ul>
      {menu && (
        <ul className="mobile-menu">
          <a href="#">Inicio</a>
          <a href="#">Mapa</a>
          <a href="#">Fecha Límite</a>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
