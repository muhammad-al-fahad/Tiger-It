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
<<<<<<< HEAD
            <Link to="/register">
=======
            <Link to="/signup/firstname">
>>>>>>> auth-by-zohaib
              <button class="btn register-btn me-1 " type="submit">
                Register
              </button>
            </Link>
            <Link to="/login">
<<<<<<< HEAD
              <button class="btn user-login-btn me-1 " type="submit">
=======
              <button class="btn login-btn " type="submit">
>>>>>>> auth-by-zohaib
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
