import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.scss";

const Product = ({ id, src, name, price, brand, description }) => {
  return (
      <div className={styles.product__wrapper}>
        <img src={src} />
        <div className={styles.product__description}>
          <h6>{name}</h6>
          <strong>${price}</strong>
          <span>{brand}</span>
          <p>{description}</p>
          <button>
            <Link to={`/product/${id}`}>View details</Link>
          </button>
        </div>
      </div>
  );
};

export default Product;
