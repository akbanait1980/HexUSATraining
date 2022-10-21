import React, { useState, useEffect } from "react";
import axios from "axios";
import { Endpoints } from "../../api/Endpoints";
import { useParams } from 'react-router-dom';

const SubCategory = () => {
  const {catName, catId} = useParams()
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, [catId]);

  const fetchData = () => {
    axios
      .get(Endpoints.SUB_CATEGORY_BY_CAT_ID + "/" + catId)
      .then((response) => setSubCategories(response.data.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>{ catName }</h2>
      <ul class="list-group">
        {subCategories.map((item) => (
          <li class="list-group-item">{item.subName}</li>
        ))}
      </ul>
    </div>
  );
};
export default SubCategory;
