import React, { useState } from "react";

const ArtistTopTracks = ({ artistTopTracks }) => {
  const [audio, setAudio] = useState(null);

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
              <button onClick={() => handlePlay(track.preview_url)}>
                {track.name}
              </button>
              <button onClick={handlePause}>Pause</button>
            </h3>
          </li>
        ))}
    </ul>
  );
};

export default ArtistTopTracks;
