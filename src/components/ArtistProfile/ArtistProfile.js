import React, { useState } from "react";

const ArtistProfile = ({ artistData, artistProfileInfo, artistTopTracks }) => {
  if (!artistProfileInfo) {
    return <p>Loading artist details...</p>;
  }

  const keys = Object.keys(artistData);
  for (const key of keys) {
    const value = artistData[key];
  }

  const handleLogTracks = () => {
    console.log(artistTopTracks);
    console.log(artistTopTracks.tracks);
    artistTopTracks.tracks.map((track) => console.log(track.name));
  }

  return (
    <div>
      <h1>{artistData.name}</h1>
      <h2>#{artistData.popularity}</h2>
      <h2>Followers: {artistData.followers.total}</h2>
      <h2>Genre: {artistData.genres.join(" , ")}</h2>
      <img src={artistData.images[1].url} />
      <ul>
        {
          artistTopTracks.tracks.map((track) =>(
            <li>
              <div key={track.id}>{track.name}</div>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default ArtistProfile;
