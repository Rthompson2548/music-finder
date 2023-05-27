import React, { useState } from "react";

const Track = ({ trackInfo, setDisplayTrackInfo }) => {
  return (
    <div>
      <h1>Track info</h1>
      <p>{trackInfo.id}</p>
      <button onClick={() => setDisplayTrackInfo(false)}>
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

export default Track;
