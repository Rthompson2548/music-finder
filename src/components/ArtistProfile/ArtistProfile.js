import React, { useState } from "react";
import ArtistTopTracks from "./ArtistTopTracks";
import ArtistSummary from "./ArtistSummary";

const ArtistProfile = ({
  artistData,
  artistProfileInfo,
  artistTopTracks,
  audio,
  setAudio,
  trackID, 
  setTrackID,
  trackInfo, 
  setTrackInfo,
  displayTrackInfo, 
  setDisplayTrackInfo
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
        trackID={trackID}
        setTrackID={setTrackID}
        trackInfo={trackInfo}
        setTrackInfo={setTrackInfo}
        displayTrackInfo={displayTrackInfo}
        setDisplayTrackInfo={setDisplayTrackInfo}
      />
    </div>
  );
};

export default ArtistProfile;
