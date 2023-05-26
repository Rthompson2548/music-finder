import React, { useState } from "react";

const Track = ({ trackInfo, setDisplayTrackInfo }) => {
    return (
        <div>
            <h1>Track info</h1>
            <p>{trackInfo.id}</p>
            <button onClick={() => setDisplayTrackInfo(false)}>X</button>
        </div>
    )
};

export default Track;