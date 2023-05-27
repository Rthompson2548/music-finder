import React, { useState } from "react";
import "../ArtistProfile/ArtistProfile.css";
import PlayPauseButtons from "./PlayPauseButtons";

const ArtistTopTracks = ({
  artistTopTracks,
  audio,
  setAudio,
  trackID,
  setTrackID,
  trackInfo,
  setTrackInfo,
}) => {
  const [playing, setPlaying] = useState(false);

  const handlePlay = (track) => {
    setPlaying(true);
    if (audio) {
      audio.pause();
    }

    const newAudio = new Audio(track.preview_url);
    setAudio(newAudio);
    newAudio.play();
  };

  const handlePause = (track) => {
    setPlaying(false);
    if (audio && audio.src === track.preview_url) {
      audio.pause();
    }
  };

  function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedMinutes = String(minutes).padStart(1, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <ul>
      {artistTopTracks &&
        artistTopTracks.tracks.map((track) => (
          <li key={track.id} className="top-track">
            <div className="top-track_container">
              {track.album.images[2].url && (
                <img src={track.album.images[2].url} className="album-image" />
              )}
              <h3 className="track-title" onClick={() => setTrackID(track.id)}>{track.name}</h3>
              <p onClick={() => setTrackID(track.id)}>More info</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p className="track-time">{formatTime(track.duration_ms)}</p>
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
                <PlayPauseButtons
                  handlePlay={handlePlay}
                  handlePause={handlePause}
                  track={track}
                  playing={playing}
                  setPlaying={setPlaying}
                />
              )}
            </div>
          </li>
        ))}
    </ul>
  );
};

export default ArtistTopTracks;
