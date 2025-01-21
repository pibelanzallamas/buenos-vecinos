import React from "react";
import Menu from "../assets/Menu.svg";
import Search from "../assets/Search.svg";

function Home() {
  return (
    <div className="content-page home-page">
      <section className="search">
        <h3>¿Qué está buscando?</h3>
        <div className="input-searcher">
          <figure>
            <img src={Menu} alt="menu icon" />
          </figure>
          <input placeholder="Bananas"></input>
          <figure>
            <img src={Search} alt="search icon" />
          </figure>
        </div>
      </section>
    </div>
  );
}

export default Home;
