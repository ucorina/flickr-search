import React, { useState } from "react";

const SearchBox = ({ onSearch, errorMessage, isLoading }) => {
  const [searchText, setSearchText] = useState("");
  const handleChange = event => {
    setSearchText(event.target.value);
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!searchText.trim()) {
          return;
        }
        onSearch(searchText);
        setSearchText("");
      }}
    >
      <input type="text" value={searchText} onChange={handleChange} />
      <button type="submit">Search</button>
      {isLoading && <div>Loading ...</div>}
      {errorMessage && (
        <div>Oops, there was an error searching: ${errorMessage}</div>
      )}
    </form>
  );
};

export default SearchBox;
