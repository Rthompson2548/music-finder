import React, { useState } from "react";

const SearchResults = ({ artistData }) => {
  return (
    <div>
      <div>{JSON.stringify(artistData)}</div>
    </div>
  );
};

export default SearchResults;
