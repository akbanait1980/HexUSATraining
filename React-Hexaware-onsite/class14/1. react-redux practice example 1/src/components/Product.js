import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { productName, image, _id } = props.data;
  return (
    <div class="col-sm-3">
      <div class="card">
        <img
          src={"http://rjtmobile.com/grocery/images/" + image}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{productName}</h5>
          <Link to={ '/detail/'+ _id } class="btn btn-primary btn-block">
            Select
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Product;
