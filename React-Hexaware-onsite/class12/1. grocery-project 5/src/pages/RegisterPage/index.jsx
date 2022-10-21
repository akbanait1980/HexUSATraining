import React, { useState } from "react";
import axios from "axios";
import { Endpoints } from "../../api/Endpoints";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [responseMessage, setResponseMessage] = useState();
  const [errorMessage, setErrorMessage] = useState({
    firstNameError: "",
    emailError: "",
  });

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
    validate();
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (validate()) {
      axios
        .post(Endpoints.REGISTER_URL, user)
        .then(
          (response) => {
            console.log(response.data.data);
            setResponseMessage('registered successfully')
          },
          (error) => {
            console.log(error.response.data);
            setResponseMessage(error.response.data.message)
          }
        )
        .catch((error) => {
          
        });
    } else {
    }
  };

  const validate = () => {
    if (user.firstName == "") {
      setErrorMessage({
        ...errorMessage,
        firstNameError: "first name is reequired",
      });
      return false;
    } else {
      setErrorMessage({
        ...errorMessage,
        firstNameError: "",
      });
    }
    return true;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="wrapper">
            <h2>Register</h2>
            {responseMessage ? (
              <div class="alert alert-success" role="alert">
                {responseMessage}
              </div>
            ): (
              <div class="alert alert-danger" role="alert">
                {responseMessage}
              </div>
            )}
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
                <small className="text-danger">
                  {errorMessage.firstNameError}
                </small>
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
            <br />
            <p className="text-center">
                <Link to="/login">Already registered? click here</Link>
            </p>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};
export default RegisterPage;
