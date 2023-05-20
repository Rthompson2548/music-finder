import React, { useState } from "react";

const ArtistProfile = ({ artistData, artistProfileInfo, artistTopTracks }) => {
  const [audio, setAudio] = useState(null);
  
  if (!artistProfileInfo) {
    return <p>Loading artist details...</p>;
  }

  const keys = Object.keys(artistData);
  for (const key of keys) {
    const value = artistData[key];
  }

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
    <div>
      <h1>{artistData.name}</h1>
      <h2>#{artistData.popularity}</h2>
      <h2>Followers: {artistData.followers.total}</h2>
      <h3>Genres: {artistData.genres.join(" , ")}</h3>
      <img src={artistData.images[1].url} />
      <h2>Top tracks</h2>
      <ul>
        {artistTopTracks &&
          artistTopTracks.tracks.map((track) => (
            <li key={track.id}>
              {/* To do: Display button that plays preview of song */}
              {/* <a href={track.preview_url}>{track.name}</a> */}
              <h3>
                <button 
                onClick={() => handlePlay(track.preview_url)}
                >
                  {track.name}
                </button>
                <button onClick={handlePause}>Pause</button>
              </h3>
              <p>{track.album.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ArtistProfile;
