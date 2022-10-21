import React, { useState, useEffect } from "react";
import axios from "axios";
import { Endpoints } from "../../api/Endpoints";
import Product from "./Product";
import { useParams } from 'react-router-dom';

const ProductList = () => {
  const {catId} = useParams()
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, [catId]);

  const fetchData = () => {
    axios
      .get(Endpoints.PRODUCT_BY_CAT_ID + "/" + catId)
      .then((response) => setProducts(response.data.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2 className="text-center">All Products</h2>
      <div class="row">
        {products.map((item) => (
          <Product key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
