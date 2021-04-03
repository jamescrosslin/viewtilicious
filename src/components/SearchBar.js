import React, { useState } from "react";

function SearchBar(props) {
  const [searchText, setSearch] = useState("");
  const { prop } = props;
  return (
    <form className="search-form" onSubmit={}>
      <input
        type="search"
        placeholder="Search for an image..."
        name="search"
        onChange={() => {}}
      ></input>
      <button type="submit">
        {/* Need to add a magnifying glass buton here or figure out how to do svgs*/}
      </button>
    </form>
  );
}

export default SearchBar;
