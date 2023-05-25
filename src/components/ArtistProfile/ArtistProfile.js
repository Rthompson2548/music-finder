import React, { useState } from "react";
import ArtistTopTracks from "./ArtistTopTracks";
import ArtistSummary from "./ArtistSummary";

const ArtistProfile = ({
  artistData,
  artistProfileInfo,
  artistTopTracks,
  audio,
  setAudio,
}) => {

  if (!artistProfileInfo) {
    return <p>Loading artist details...</p>;
  }

  const keys = Object.keys(artistData);
  for (const key of keys) {
    const value = artistData[key];
  }

  return (
    <div> 
      <ArtistSummary artistData={artistData} />
      <ArtistTopTracks
        artistTopTracks={artistTopTracks}
        audio={audio}
        setAudio={setAudio}
      />
    </div>
  );
};

export default ArtistProfile;
