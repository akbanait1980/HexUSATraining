import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

class ComponentF extends Component {
  render() {
    return (
      <div>
        <h1>Component F</h1>
        <UserConsumer>
          {(username) => {
            return <h1>Hello, {username}</h1>;
          }}
        </UserConsumer>
      </div>
    );
  }
}
export default ComponentF;
