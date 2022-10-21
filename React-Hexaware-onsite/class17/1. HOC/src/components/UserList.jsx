import React, { useState, useEffect } from "react";
import HOC from "./HOC";
//import axios from "axios";

const UserList = ({ data }) => {
  // const [users, setUsers] = useState([]);
  // const [search, setSearch] = useState("");

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // const fetchUsers = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => setUsers(response.data))
  //     .catch((error) => console.log(error));
  // };

  // let filterUserList = users
  //   .filter(({ name }) => {
  //     return name.indexOf(search) >= 0;
  //   })
  //   .map((user) => {
  //     return (
  //       <div key={user.id}>
  //         <p>{user.name}</p>
  //       </div>
  //     );
  //   });

  // return (
  //   <div>
  //     <h1>User List</h1>
  //     <input
  //       type="text"
  //       value={search}
  //       onChange={(event) => setSearch(event.target.value)}
  //     />
  //     <div>{filterUserList}</div>
  //   </div>
  // );

  let renderList = data.map((user) => {
    return(
      <div key={ user.id }>
        <p>{ user.name }</p>
      </div>
    )
  })

  return(
    <div>
      { renderList }
    </div>
  )
};

//export default UserList;

const SearchUsers = HOC(UserList, 'users');
export default SearchUsers;