import React, { useState } from "react";
import "./Search.css";

const Search = ({
  searchInput,
  setSearchInput,
  handleSubmitSongSearch,
  setDisplaySearchResults,
}) => {
  return (
    <div className="search">
      <form>
        <div>
          <input
            placeholder="Enter artist name..."
            onChange={(e) => setSearchInput(e.target.value)}
            // onClick={() => setDisplaySearchResults(true)}
            value={searchInput}
          />
          <button
            className="search-button"
            type="submit"
            onClick={(event) => handleSubmitSongSearch(event)}
          >
            <i
              class="fa fa-search"
              aria-hidden="true"
              type="submit"
              onClick={(event) => handleSubmitSongSearch(event)}
            ></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
