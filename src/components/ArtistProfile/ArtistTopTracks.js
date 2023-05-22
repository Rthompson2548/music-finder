import React, { useState } from "react";

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
          <li key={track.id}>
            {/* To do: Display button that plays preview of song */}
            <h3>
              <button
                onClick={() => handlePlay(track.preview_url)}
                disabled={track.preview_url === null}
              >
                {track.name}
              </button>
              <button
                onClick={handlePause}
                disabled={track.preview_url === null}
              >
                Pause
              </button>
              <img src={track.album.images[2].url} />
            </h3>
          </li>
        ))}
    </ul>
  );
};

export default ArtistTopTracks;
