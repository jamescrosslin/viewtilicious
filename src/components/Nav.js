import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav({ topics }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleTopicChange = (topics) => {};

  return isEditing ? (
    <form>
      <ul>
        {topics.map((topic, i) => (
          <li key={i}>
            <input defaultValue={topic} />
          </li>
        ))}
      </ul>
      <button
        onClick={() => setIsEditing((editing) => !editing)}
        style={{
          position: "absolute",
          top: "5px",
          right: "5px",
          backgroundColor: "#438bbd",
          color: "white",
          borderRadius: "5px",
        }}
      >
        Done
      </button>
    </form>
  ) : (
    <nav
      className="main-nav"
      style={{ outline: "1px solid black", position: "relative" }}
    >
      <ul>
        {topics.map((topic, i) => (
          <li key={i}>
            <NavLink to={`/${topic}`}>{topic}</NavLink>
          </li>
        ))}
      </ul>
      <span
        onClick={() => setIsEditing((editing) => !editing)}
        className="hides"
        style={{
          position: "absolute",
          top: "5px",
          right: "5px",
          opacity: 0.4,
        }}
      >
        &#x270D;
      </span>
    </nav>
  );
}

export default Nav;

{
  /* */
}
