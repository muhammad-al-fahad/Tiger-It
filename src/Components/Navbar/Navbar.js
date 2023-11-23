import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar bg-cust border">
        <div class="container-fluid">
          <a class="navbar-brand p-4 px-0">TigerIT</a>
          <div class="d-flex ">
            <Link to="/register">
              <button class="btn register-btn me-1 " type="submit">
                Register
              </button>
            </Link>
            <Link to="/login">
              <button class="btn user-login-btn me-1 " type="submit">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
