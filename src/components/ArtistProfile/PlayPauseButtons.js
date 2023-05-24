import React, { useState } from "react";

const PlayPauseButtons = ({ handlePause, handlePlay, track, playing, setPlaying }) => {
  return (
    <div>
      {!playing && (
        <i
          onClick={() => handlePlay(track.preview_url)}
          disabled={track.preview_url === null}
          class="fa fa-play-circle"
          aria-hidden="true"
          style={{ color: "#1DB954" }}
        ></i>
      )}

      {playing && (
        <i
          onClick={handlePause}
          disabled={track.preview_url === null}
          class="fa fa-pause-circle"
          aria-hidden="true"
          style={{ color: "#D3D3D3" }}
        ></i>
      )}
    </div>
  );
};

export default PlayPauseButtons;
