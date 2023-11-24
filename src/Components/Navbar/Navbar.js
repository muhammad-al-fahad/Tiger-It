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

          <div>
            <label for="inputState" class="form-label d-flex align-items-center">
              <img src="/assets/images/Map Point.svg" alt="" />
              <p className="mt-3 mx-2 text-muted">Delivery to</p>
            </label>
            <select id="inputState" class="form-select fw-bold">
              <option selected>60, shadab colony</option>
              <option>...</option>
            </select>
          </div>

          <form class="d-flex position-relative" role="search">
            <input class="form-control me-2" type="search" placeholder="What are you looking for" aria-label="Search" />
            <img src="/assets/images/Magnifer.svg" alt="" className="position-absolute"/>
          </form>

          <div className="d-flex">
            <img src="/assets/images/Categories.svg" alt="" />
            <select id="inputState" class="form-select fw-bold">
              <option selected>Categories</option>
              <option>...</option>
            </select>
          </div>

          <div class="d-flex">
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
