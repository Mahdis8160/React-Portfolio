import React from "react";

import "./header.css";


import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h3>Mahdis Miller</h3>
      <ul>
        <li>
          <Link to="/about-me">About me</Link>
        </li>
        <li>
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact-me">Contact me</Link>
        </li>
        <li>
          <Link to='resume'>Resume</Link>
        </li>
      </ul>
    </div>
  );
}
export default Header;
