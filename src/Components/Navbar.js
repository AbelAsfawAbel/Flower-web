import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
const classNameFunc = ({ isActive }) => (isActive ? "active_styles" : "");
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <NavLink to="/">
          <img src="../Image/flower.png" className="logo" alt="logo" />
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink to="/" activeClassName={classNameFunc} exact>
              <li class="nav-item nav-link">
                <a>Home</a>
              </li>
            </NavLink>

            <NavLink to="/about" activeClassName={classNameFunc} exact>
              <li class="nav-item nav-link">
                <a>About</a>
              </li>
            </NavLink>

            <NavLink to="/contact" activeClassName={classNameFunc} exact>
              <li class="nav-item nav-link">
                <a>Contact</a>
              </li>
            </NavLink>

            <NavLink to="/sevices" activeClassName={classNameFunc} exact>
              <li class="nav-item nav-link">
                <a>Services</a>{" "}
              </li>
            </NavLink>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
