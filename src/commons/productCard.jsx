import React from "react";

function productCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-categoria">{product.categoria}</div>
      <div className="product-text">
        <p>{product.name}</p>
        <p>
          {product.comercio} ({product.duracion})
        </p>
      </div>
      <div className="product-image">
        <figure>
          <img src={product.image} alt={product.name} />
        </figure>
      </div>
    </div>
  );
}

export default productCard;
