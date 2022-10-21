import React, { useState, useEffect } from "react";
//import axios from "axios";
import HOC from "./HOC";

const PostList = ({ data }) => {
  // const [posts, setPosts] = useState([]);
  // const [search, setSearch] = useState("");

  // useEffect(() => {
  //   fetchPosts();
  // });

  // const fetchPosts = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => setPosts(response.data))
  //     .catch((error) => console.log(error));
  // };

  // let filterPostList = posts
  //   .filter(({ title }) => {
  //     return title.indexOf(search) >= 0;
  //   })
  //   .map((post) => {
  //     return (
  //       <div key={post.id}>
  //         <p>{post.title}</p>
  //       </div>
  //     );
  //   });

  // return (
  //   <div>
  //     <h1>Posts List</h1>
  //     <input
  //       type="text"
  //       value={search}
  //       onChange={(event) => setSearch(event.target.value)}
  //     />
  //     <div>{filterPostList}</div>   
  //   </div>
  // );

  // after hoc
  let renderList = data.map((post) => {
    return(
      <div key={post.id }>
        <p>{ post.title }</p>
      </div>
    )
  })

  return(
    <div>
      { renderList }
    </div>
  )

};



//export default PostList;

const SearchPost = HOC(PostList, 'posts')
export default SearchPost;

