import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div class="card text-center">
      <div class="card-body bg-dark text-light py-4">
        <h5 class="card-title">Love Nature</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <NavLink to="/">
          <button class="btn btn-primary">Home Page</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
