import React, { useState } from "react";

const SearchResults = ({ artistData }) => {
  const keys = Object.keys(artistData);
  for (const key of keys) {
    const value = artistData[key];
  }

  return (
    <div>
      <h1>{artistData.name}</h1>
      <h2>#{artistData.popularity}</h2>
      {/* <h2>Followers: {artistData.followers.total}</h2> */}
      <img src={artistData.images[0].url} />
    </div>
  );
};

export default SearchResults;
