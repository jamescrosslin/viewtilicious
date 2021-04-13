import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ topics }) {
  return (
    <nav className="main-nav">
      <ul>
        {topics.map((topic, i) => (
          <li key={i}>
            <NavLink to={`/${topic}`}>{topic}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
