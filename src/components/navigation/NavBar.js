import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return(
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

    )
}
export default NavBar