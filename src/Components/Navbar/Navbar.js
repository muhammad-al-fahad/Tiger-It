import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav class="navbar bg-cust border">
        <div class="container-fluid">
          <a class="navbar-brand p-4 px-0">TigerIT</a>
          <div class="d-flex ">
            <button class="btn register-btn me-1 " type="submit">
              Register
            </button>
            <button class="btn login-btn " type="submit">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
