import React from "react";
import { Link } from "react-router-dom";
import isra from "../../isra.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="container">
      <Link className="tab" to="/home">
        HOME
      </Link>
      <Link className="tab" to="/contact">
        CONTACT
      </Link>
      <Link className="tab" to="/">
        <img className="israNav" src={isra} alt="isra-icon" />
      </Link>
      <Link className="tab" to="blog">
        BLOG
      </Link>
      <Link className="tab" to="family">
        FAMILY
      </Link>
    </div>
  );
}
