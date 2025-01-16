import React from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "../assets/Menu.svg";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <h3 onClick={() => navigate("/")}>Buenos Vecinos</h3>
        </li>
        <li>
          <figure>
            <img src={MenuIcon} alt="hamburger menu icon"></img>
          </figure>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
