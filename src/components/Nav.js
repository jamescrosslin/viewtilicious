import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

function Nav({ topics, changeTopics }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputs, setInputs] = useState(topics);
  const history = useHistory();

  async function handleTopicChange(e) {
    e.preventDefault();

    const newTopics = [...inputs].map((topic) =>
      topic.split(/[^\w\d]/).join("+")
    );
    await changeTopics(newTopics);
    history.push("/");
    setIsEditing((editing) => !editing);
  }

  // need to make it so that app.js knows to hold off rendering a new path until new value is fetched. need some top level loading? maybe find what I need to wait for in my code

  return isEditing ? (
    <form
      className="main-nav"
      style={{ outline: "1px solid black", position: "relative" }}
      onSubmit={handleTopicChange}
    >
      <ul>
        {topics.map((topic, i) => (
          <li key={i}>
            <input
              name={topic}
              defaultValue={topic}
              onChange={(e) =>
                setInputs((inputs) => {
                  inputs[i] = e.target.value;
                  return inputs;
                })
              }
            />
          </li>
        ))}
      </ul>
      <button
        onClick={handleTopicChange}
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
