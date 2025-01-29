import React, { useState } from "react";
import Menu from "../assets/Menu.svg";
import Search from "../assets/Search.svg";
import ProductCard from "../commons/ProductCard.jsx";
import { products } from "../utils/products.js";

function Home() {
  const [menu, setMenu] = useState(false);

  function handleSearch() {}

  return (
    <div className="content-page home-page">
      <section className="search">
        <h3>¿Qué está buscando?</h3>
        <div className="input-searcher">
          <figure onClick={() => setMenu(!menu)}>
            <img src={Menu} alt="menu icon" />
          </figure>
          <input placeholder="Bananas"></input>
          <figure onClick={() => handleSearch()}>
            <img src={Search} alt="search icon" />
          </figure>
        </div>
      </section>

      <div className="one-home-section">
        <h3>Las Últimas Ofertas</h3>
        <div className="product-list">
          {products.map((e) => (
            <ProductCard product={e} />
          ))}
        </div>
      </div>

      <div className="one-home-section">
        <h3>Lo Mejor en Carnes</h3>
        <div className="product-list">
          {products
            .filter((e) => e.categoria == "C")
            .map((e) => (
              <ProductCard product={e} />
            ))}
        </div>
      </div>

      <div className="one-home-section">
        <h3>Lo Mejor en Frutas y Verduras</h3>
        <div className="product-list">
          {products
            .filter((e) => e.categoria == "FyV")
            .map((e) => (
              <ProductCard product={e} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
