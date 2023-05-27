import React, { useState } from "react";
import "../Tracks/Track.css";

const Track = ({ trackInfo, setDisplayTrackInfo }) => {
  return (
    <div className="track-info">
      <h4
        onClick={() => setDisplayTrackInfo(false)}
        class="close-button"
        style={{ color: "#fff" }}
      >
        <i class="fa fa-window-close" aria-hidden="true"></i>
      </h4>
      <div>
        {trackInfo.album.images[2].url && (
          <img src={trackInfo.album.images[1].url} className="album-image" />
        )}
        <h2>{trackInfo.name}</h2>
        <h4 className="spotify-link">
          <a href={trackInfo.external_urls.spotify} target="_blank">
            View on Spotify
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Track;
