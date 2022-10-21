import React, { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  };

  return(
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map((data) => (
          <li>{data.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Posts;
