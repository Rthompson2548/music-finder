import React, { useState } from "react";

const Track = ({ trackInfo }) => {
    return (
        <div>
            <h1>Track info</h1>
            <p>{trackInfo.id}</p>
        </div>
    )
};

export default Track;