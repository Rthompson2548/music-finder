import React, { useState } from "react";

const PlayPauseButtons = ({ handlePause, handlePlay, track, playing, setPlaying }) => {
  return (
    <div>
        <i
          onClick={() => handlePlay(track)}
          disabled={track.preview_url === null}
          class="fa fa-play-circle"
          aria-hidden="true"
          style={{ color: "#1DB954" }}
        ></i>

        <i
          onClick={() => handlePause(track)}
          disabled={track.preview_url === null}
          class="fa fa-pause-circle"
          aria-hidden="true"
          style={{ color: "#D3D3D3" }}
        ></i>
    </div>
  );
};

export default PlayPauseButtons;
