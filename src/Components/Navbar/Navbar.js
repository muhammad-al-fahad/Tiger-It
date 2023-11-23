import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar bg-cust border">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand p-4 px-0">
            TigerIT
          </Link>
          <div class="d-flex ">
            <Link to="/signup/firstname">
              <button class="btn register-btn me-1 " type="submit">
                Register
              </button>
            </Link>
            <Link to="/login">
              <button class="btn login-btn " type="submit">
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
