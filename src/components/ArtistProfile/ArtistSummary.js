import React, { useState } from "react";
import ArtistTopTracks from "./ArtistTopTracks";
import "../ArtistProfile/ArtistProfile.css";

const ArtistSummary = ({ artistData }) => {
  return (
    <div>
      <h2>#{artistData.popularity}</h2>
      <h2>Followers: {artistData.followers.total}</h2>
      <h3>Genres</h3>
      <ul>
        {artistData.genres.map((genre) => (
          <li className="genre">{genre}</li>
        ))}
      </ul>
      <img src={artistData.images[1].url} />
    </div>
  );
};

export default ArtistSummary;
