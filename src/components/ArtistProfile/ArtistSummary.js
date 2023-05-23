import React, { useState } from "react";
import ArtistTopTracks from "./ArtistTopTracks";
import "../ArtistProfile/ArtistProfile.css";

const ArtistSummary = ({ artistData }) => {
  return (
    <div className="artist-summary">
      
      <div>
        <h1>{artistData.name}</h1>
        <img src={artistData.images[1].url} className="circle-image" />
      </div>
      <div className="artist-summary-details">
        <h2>#{artistData.popularity}</h2>
        <h3>{artistData.followers.total} followers</h3>
        <h3>Genres</h3>
        <ul>
          {artistData.genres.map((genre) => (
            <li className="genre">{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArtistSummary;
