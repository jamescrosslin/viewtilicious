import React, { useState } from "react";

function SearchBar(props) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchText);
    //put callback to send state to App.js here
    e.currentTarget.reset();
  };

  const saveText = (e) => {
    const inputText = e.currentTarget.value;
    setSearchText(() => inputText);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for an image..."
        name="search"
        onChange={saveText}
        required
      ></input>
      <button type="submit" className="submit-button">
        {/* Need to add a magnifying glass buton here or figure out how to do svgs*/}
      </button>
    </form>
  );
}

export default SearchBar;
