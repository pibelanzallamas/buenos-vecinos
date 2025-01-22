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
      <section className="product-list">
        {products.map((e) => (
          <ProductCard product={e} />
        ))}
      </section>
    </div>
  );
}

export default Home;
