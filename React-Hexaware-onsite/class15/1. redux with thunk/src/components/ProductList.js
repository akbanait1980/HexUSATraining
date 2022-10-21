import React, { useState, useEffect } from "react";

import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, fetchProducts } from "../redux-module/actions/product-action";

const ProductList = () => {
  //const [products, setProducts] = useState([]);
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  // const fetchData = () => {
  //   axios
  //     .get("http://apolis-grocery.herokuapp.com/api/products")
  //     .then((response) => {
  //       //setProducts(response.data.data);
  //       dispatch(setProducts(response.data.data));
  //     })
  //     .catch((error) => console.log(error));
  // };

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
