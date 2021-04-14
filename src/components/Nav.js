import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ topics }) {
  /**
   * @function makeNavs
   * @param {Array} values topics for navigation
   * @returns {Array} list items with dynamic NavLinks
   */
  function makeNavs(values) {
    return values.map((topic, i) => (
      <li key={i}>
        {/* dynamically create destinations and text */}
        <NavLink to={`/${topic}`}>{topic}</NavLink>
      </li>
    ));
  }

  return (
    <nav className="main-nav">
      <ul>
        {
          // created list items will populate this space
          makeNavs(topics)
        }
      </ul>
    </nav>
  );
}

export default Nav;
