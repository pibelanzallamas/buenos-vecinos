import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="left-side-card">
        <div className="product-categoria">{product.categoria}</div>
        <div className="product-text">
          <p>
            <b>{product.name}</b>
          </p>
          <p>
            {product.comercio} ({product.duracion})
          </p>
        </div>
      </div>
      <figure className="product-image">
        <img src={product.image} alt={product.name} />
      </figure>
    </div>
  );
}

export default ProductCard;
