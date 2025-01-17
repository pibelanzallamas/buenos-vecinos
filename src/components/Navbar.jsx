import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "../assets/Menu.svg";
import X from "../assets/X.svg";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <nav>
      <ul>
        <li>
          <h3 onClick={() => navigate("/")}>Buenos Vecinos</h3>
        </li>
        <li>
          {menu ? (
            <figure onClick={() => handleMenu()}>
              <img src={X} alt="x menu icon"></img>
            </figure>
          ) : (
            <figure onClick={() => handleMenu()}>
              <img src={MenuIcon} alt="hamburger menu icon"></img>
            </figure>
          )}
        </li>
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
