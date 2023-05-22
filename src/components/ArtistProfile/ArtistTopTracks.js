import React, { useState } from "react";
import "../ArtistProfile/ArtistProfile.css";

const ArtistTopTracks = ({ artistTopTracks, audio, setAudio }) => {
  const handlePlay = (previewUrl) => {
    if (audio) {
      audio.pause();
    }

    const newAudio = new Audio(previewUrl);
    setAudio(newAudio);
    newAudio.play();
  };

  const handlePause = () => {
    if (audio) {
      audio.pause();
    }
  };

  return (
    <ul>
      {artistTopTracks &&
        artistTopTracks.tracks.map((track) => (
          <li key={track.id} className="top-track">
            <div className="top-track_container">
              <img src={track.album.images[2].url} />
              {/* To do: Display button that plays preview of song */}
              <h3
                onClick={() => handlePlay(track.preview_url)}
                disabled={track.preview_url === null}
              >
                {track.name}
              </h3>
            </div>
            <div>
              <button
                onClick={() => handlePlay(track.preview_url)}
                disabled={track.preview_url === null}
              >
                Play
              </button>
              <button
                onClick={handlePause}
                disabled={track.preview_url === null}
              >
                Pause
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default ArtistTopTracks;
