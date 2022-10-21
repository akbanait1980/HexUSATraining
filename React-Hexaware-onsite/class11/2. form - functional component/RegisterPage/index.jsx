import React, { useState } from "react";

const RegisterPage = () => {
  const [user, setUser] = useState({
    firstName: "",
    email: "",
  });

  const onChangeHandler = (event) => {
    //setName(event.target.value);
    setUser({
        ...user,
        [event.target.name]: event.target.value
    })
  };

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(user)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="wrapper">
            <h2>Register</h2>
            <hr />
            <h1>
              {user.firstName}, {user.email}
            </h1>
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
