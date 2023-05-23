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
              <img src={track.album.images[2].url} className="album-image" />
              {/* To do: Display button that plays preview of song */}
              <h3
                onClick={() => handlePlay(track.preview_url)}
                disabled={track.preview_url === null}
              >
                {track.name}
              </h3>
            </div>
            <div>
              {track.preview_url === null ? (
                <div>
                  {/* <p>Preview unavailable</p> */}
                  <i
                    class="fa fa-ban"
                    aria-hidden="true"
                    style={{ color: "#D3D3D3" }}
                  ></i>
                </div>
              ) : (
                <div>
                  <i
                    onClick={() => handlePlay(track.preview_url)}
                    disabled={track.preview_url === null}
                    class="fa fa-play-circle"
                    aria-hidden="true"
                    style={{ color: "#1DB954" }}
                  ></i>

                  <i
                    onClick={handlePause}
                    disabled={track.preview_url === null}
                    class="fa fa-pause-circle"
                    aria-hidden="true"
                    style={{ color: "#D3D3D3" }}
                  ></i>
                </div>
              )}
            </div>
          </li>
        ))}
    </ul>
  );
};

export default ArtistTopTracks;
