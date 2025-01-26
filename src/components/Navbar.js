import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  return (
    <div className="Navbar">
      <Link
        className="Navbar-link"
        to="/work"
        style={{
          backgroundColor: location.pathname === "/work" ? "#f9e864" : "white",
        }}
      >
        <div className="Navbar-text">Work</div>
      </Link>
      <Link
        className="Navbar-link"
        to="/skills"
        style={{
          backgroundColor:
            location.pathname === "/skills" ? "#f9e864" : "white",
        }}
      >
        <div className="Navbar-text">Skills</div>
      </Link>
      <Link className="Navbar-link-logo" to="/">
        <img className="Nav-logo" src="/logo.png" alt="meet-logo" />
      </Link>
      <Link
        className="Navbar-link"
        to="/about"
        style={{
          backgroundColor: location.pathname === "/about" ? "#f9e864" : "white",
        }}
      >
        <div className="Navbar-text">About</div>
      </Link>
      <Link
        className="Navbar-link"
        to="/connect"
        style={{
          backgroundColor:
            location.pathname === "/connect" ? "#f9e864" : "white",
        }}
      >
        <div className="Navbar-text">Connect</div>
      </Link>
    </div>
  );
}
