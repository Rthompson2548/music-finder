import React, { useState } from "react";
import ArtistTopTracks from "./ArtistTopTracks";

const ArtistSummary = ({ artistData }) => {

  return (
    <div>
      <h1>{artistData.name}</h1>
      <h2>#{artistData.popularity}</h2>
      <h2>Followers: {artistData.followers.total}</h2>
      <h3>Genres: {artistData.genres.join(" , ")}</h3>
      <img src={artistData.images[1].url} />
      <h2>Top tracks</h2>
    </div>
  );
};

export default ArtistSummary;
