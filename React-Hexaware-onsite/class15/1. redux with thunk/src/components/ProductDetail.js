import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Product from "./Product";
import {
  addProduct,
  removeProduct,
} from "../redux-module/actions/product-action";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  const { id } = useParams();
  //const [product, setProduct] = useState({});
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id && id !== "") fetchData();
    return () => {
      dispatch(removeProduct());
    };
  }, [id]);

  const fetchData = () => {
    axios
      .get("http://apolis-grocery.herokuapp.com/api/products/" + id)
      .then((response) => {
        console.log(response.data.data);
        //setProduct(response.data.data);
        dispatch(addProduct(response.data.data));
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
