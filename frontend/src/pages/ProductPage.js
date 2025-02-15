import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <h1>Available Products</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - ₹{product.price} (Min: {product.minQuantity})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;

