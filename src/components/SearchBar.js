import React, { useState } from "react";
import { useHistory } from "react-router";

function SearchBar({ makeQuery }) {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    const query = e.target[0].value;
    makeQuery(query);
    history.push(`/${query}`);

    e.currentTarget.reset();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for an image..."
        name="search"
        required
      ></input>
      <button type="submit" className="submit-button">
        {/* Need to add a magnifying glass buton here or figure out how to do svgs*/}
      </button>
    </form>
  );
}

export default SearchBar;
