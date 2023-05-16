import React, { useState } from "react";

const SearchResults = ({ artistData }) => {
  return (
    <div>
      <div>{JSON.stringify(artistData)}</div>
      {/* <ul>{artistData.map((item, index) => <li key={index}>{item}</li>)}</ul> */}
    </div>
  );
};

export default SearchResults;
