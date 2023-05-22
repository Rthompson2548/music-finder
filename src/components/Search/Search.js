import React, { useState } from "react";

const Search = ({ setSearchInput, handleSubmitSongSearch, setDisplaySearchResults }) => {
  return (
    <div>
      <form>
        <input
          placeholder="Enter artist name..."
          onChange={(e) => setSearchInput(e.target.value)}
          onClick={() => setDisplaySearchResults(true)}
        />
        <button type="submit" onClick={(event) => handleSubmitSongSearch(event)}>Search</button>
      </form>
    </div>
  );
};

export default Search;
