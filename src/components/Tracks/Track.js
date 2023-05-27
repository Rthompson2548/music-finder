import React, { useState } from "react";

const Track = ({ trackInfo, setDisplayTrackInfo }) => {
  return (
    <div>
      <i
        onClick={() => setDisplayTrackInfo(false)}
        class="fa-xmark"
        style={{ color: "#fff" }}
      >
        X
      </i>
      <div>
        {trackInfo.album.images[2].url && (
          <img src={trackInfo.album.images[1].url} className="album-image" />
        )}
        <h2>{trackInfo.name}</h2>
        <h3>
          <a
            href={trackInfo.external_urls.spotify}
            target="_blank"
            style={{ color: "#1DB954" }}
          >
            View on Spotify
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Track;
