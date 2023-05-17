import React, { useState } from "react";

const ArtistProfile = ({ artistData }) => {
  return (
    <div>
      <h1>Artist Profile</h1>
      <div>{JSON.stringify(artistData)}</div>
    </div>
  );
};

export default ArtistProfile;
