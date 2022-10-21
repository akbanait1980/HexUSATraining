import React from "react";

import { useUserContext } from "../context/UserContext";

const Header = () => {
  const { user, logout } = useUserContext();
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Context API <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>

          <li>
            <h2>
              Weclome {user.name}
              {!user.isGuestUser && (
                <button className="btn btn-warning" onClick={logout}>
                  Logout
                </button>
              )}
            </h2>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;