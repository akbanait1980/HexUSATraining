import React, { Component } from "react";

class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      email: "",
    };
  }

  //   onNameChangeHandler = (event) => {
  //     //console.log('changed')
  //     //console.log(event.target.value);
  //     this.setState({
  //       name: event.target.value,
  //     });
  //   };

  //   onEmailChangeHandler = (event) => {
  //     this.setState({
  //       email: event.target.value,
  //     });
  //   };

  onChangeHandler = (event) => {
    //console.log(event.target)
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="wrapper">
              <h2>Register</h2>
              <hr />
              <h1>
                {this.state.firstName}, {this.state.email}
              </h1>
              <form onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    id="t1"
                    name="firstName"
                    value={this.state.name}
                    onChange={this.onChangeHandler}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeHandler}
                    className="form-control"
                  />
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block" />
              </form>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    );
  }
}
export default RegisterPage;
