import React, { useState } from "react";
import axios from "axios";
import { Endpoints } from "../../api/Endpoints";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    firstNameError: "",
    emailError: "",
  });

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    //setName(event.target.value);
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
    validate();
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (validate()) {
      axios
        .post(Endpoints.LOGIN_URL, user)
        .then(
          (response) => {
            console.log(response.data.data);
            setResponseMessage("Login success, Thank you");
          },
          (error) => {
            console.log("error");
            setResponseMessage("Login failed, please try again");
          }
        )
        .catch((error) => console.log(error));
    } else {
    }
  };

  const validate = () => {
    return true;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="wrapper">
          
            <h2>Login</h2>
            {responseMessage && (
              <div class="alert alert-success" role="alert">
                {responseMessage}
              </div>
            )}
            <hr />
            <form onSubmit={onSubmitHandler}>
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
                value="Login"
                className="btn btn-primary btn-block"
              />
            </form>
            <br />
            <p className="text-center">
              <Link to="/register">New User? click here</Link>
            </p>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};
export default LoginPage;
