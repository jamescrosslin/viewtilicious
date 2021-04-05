import React from "react";
import { NavLink } from "react-router-dom";

function Nav(props) {
  const { prop } = props;
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/Cats">Cats</NavLink>
        </li>
        <li>
          <NavLink to="/Dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/Computers">Computers</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
