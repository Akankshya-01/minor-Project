import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <header>
      <h3>Consulto</h3>
      <nav>
        <a href="/#">Home</a>
        <a href="/#">About us</a>
        <a href="/#">For Lawyers</a>
        <button className="login-btn">Login</button>
      </nav>
    </header>
  );
}
