import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Product from "./Product";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = () => {
    axios
      .get("http://apolis-grocery.herokuapp.com/api/products/" + id)
      .then((response) => {
        setProduct(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1 className="text-center">Product Detail</h1>
      <Product data={product} />
    </div>
  );
};
export default ProductDetail;
