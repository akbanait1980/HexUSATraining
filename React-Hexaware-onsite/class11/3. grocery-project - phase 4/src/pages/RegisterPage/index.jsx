import React, { useState } from "react";
import axios from "axios";
import { Endpoints } from "../../api/Endpoints";

const RegisterPage = () => {
  const [user, setUser] = useState({
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    //setName(event.target.value);
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(user);
    axios
      .post(Endpoints.REGISTER_URL, user)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="wrapper">
            <h2>Register</h2>
            <hr />
            <form onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  value={user.firstName}
                  name="firstName"
                  onChange={onChangeHandler}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  value={user.email}
                  onChange={onChangeHandler}
                  name="email"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Mobile</label>
                <input
                  type="text"
                  value={user.mobile}
                  onChange={onChangeHandler}
                  name="mobile"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type="text"
                  value={user.password}
                  onChange={onChangeHandler}
                  name="password"
                  className="form-control"
                />
              </div>
              <input
                type="submit"
                value="Register"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};
export default RegisterPage;
