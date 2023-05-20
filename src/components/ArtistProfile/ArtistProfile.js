import React, { useState } from "react";
import ArtistTopTracks from "./ArtistTopTracks";

const ArtistProfile = ({ artistData, artistProfileInfo, artistTopTracks }) => {
  const [audio, setAudio] = useState(null);
  
  if (!artistProfileInfo) {
    return <p>Loading artist details...</p>;
  }

  const keys = Object.keys(artistData);
  for (const key of keys) {
    const value = artistData[key];
  }
  
  return (
    <div>
      <h1>{artistData.name}</h1>
      <h2>#{artistData.popularity}</h2>
      <h2>Followers: {artistData.followers.total}</h2>
      <h3>Genres: {artistData.genres.join(" , ")}</h3>
      <img src={artistData.images[1].url} />
      <h2>Top tracks</h2>
      <ArtistTopTracks artistTopTracks={artistTopTracks} />
      </div>
  );
};

export default ArtistProfile;
