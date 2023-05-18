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
      {/* <p>{JSON.stringify(artistProfileInfo[1])}</p> */}
      <h1>{artistData.name}</h1>
      <h2>#{artistData.popularity}</h2>
      <h2>Followers: {artistData.followers.total}</h2>
      <h2>Genre: {artistData.genres.join(" , ")}</h2>
      <img src={artistData.images[2].url} />  
    <ul>
      { 
        keys.forEach((key) => <li key={key}>{artistData[key]}</li>)
      }
    </ul>
    </div>
  );
};

export default ArtistProfile;
