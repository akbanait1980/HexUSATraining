import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://apolis-grocery.herokuapp.com/api/products")
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1 className="text-center">All Products</h1>
      <div class="row">
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
