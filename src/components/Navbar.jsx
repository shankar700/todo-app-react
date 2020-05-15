import React from "react";
import { NavLink } from "react-router-dom";
import "../Main.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">Taskit!!</NavLink>

      <NavLink to="/dashboard">Dashboard</NavLink>

      <NavLink to="/History">History</NavLink>
    </div>
  );
}
