import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const { login } = useUserContext();

  const onChangeHandler = (event) => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    })

  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(userData)
    login(userData.username)
  }

  return (
    <div className="row">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <div className="wrapper">
          <h2>login</h2>
          <hr />
          <form onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="">Username</label>
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <input type="submit" value="Login" className="btn btn-primary" />
          </form>
        </div>
      </div>
      <div className="col-lg-4"></div>
    </div>
  );
};
export default Login;