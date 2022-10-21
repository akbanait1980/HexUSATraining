import React from "react";
import { useUserContext } from "../context/UserContext";
import classes from "./Header.module.css";

const Home = () => {
  const { user, logout } = useUserContext();

  return (
    <div className="row">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <h2 className={classes.myText}>You are logged in as {user.name}</h2>
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
      <div className="col-lg-4"></div>
    </div>
  );
};
export default Home;
