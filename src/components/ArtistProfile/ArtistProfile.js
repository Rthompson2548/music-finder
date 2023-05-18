import React, { useState } from "react";

const ArtistProfile = ({ artistData, artistProfileInfo }) => {

  if (!artistData) {
    return <p>Loading artist details...</p>
  }

  const keys = Object.keys(artistData);
  for (const key of keys) {
    const value = artistData[key];
  }

  return (
    <div>
      <h1>{artistData.name}</h1>
      {/* <h2>Name:{artistProfileInfo[1].name}</h2> */}
      <h2>#{artistData.popularity}</h2>
      <h2>Followers: {artistData.followers.total}</h2>
      <h2>Genre: {artistData.genres.join(" , ")}</h2>
      <img src={artistData.images[1].url} />  
      <p>{JSON.stringify(artistProfileInfo[1])}</p>
      
    </div>
  );
};

export default ArtistProfile;
