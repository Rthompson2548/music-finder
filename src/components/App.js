import React, { useState, useEffect } from "react";
import "../../src/App.css";
import Search from "./Search/Search";
import ArtistProfile from "./ArtistProfile/ArtistProfile";

const CLIENT_ID = "03b53e31e7fd47998f5196660f2a8121";
const CLIENT_SECRET = "cb002e7d5245461a9add7e41b442d312";
const BASE_URL = "https://api.spotify.com";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [artistData, setArtistData] = useState(null);
  const [artistTopTracks, setArtistTopTracks] = useState(null);
  const [artistProfileInfo, setArtistProfileInfo] = useState([]);
  const [displayArtistData, setDisplayArtistData] = useState(false);

  const handleSubmitSongSearch = async (event) => {
    event.preventDefault();
    setDisplayArtistData(false);
    console.log("handleSubmitSongSearch...");
    await handleSearchArtist();
    // Display artist data once all data has been fetched
    setDisplayArtistData(true);
  };

  let artistParams = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const handleSearchArtist = async () => {
    console.log(`Searching for ${searchInput}...`);

    // Get request with artist name to get artist Spotify ID
    let getArtistID = await fetch(
      `${BASE_URL}/v1/search?q=${searchInput}&type=artist`,
      artistParams
    )
      .then((result) => result.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    // Fetch data for artist by their ID
    let getArtistInfo = await fetch(
      `${BASE_URL}/v1/artists/${getArtistID}`,
      artistParams
    )
      .then((result) => result.json())
      .then((data) => {
        console.log("artistData:");
        console.log(data);
        setArtistData(data);
      });

    // Gets top tracks from artist by ID
    fetch(
      `${BASE_URL}/v1/artists/${getArtistID}/top-tracks?country=US`,
      artistParams
    )
      .then((result) => result.json())
      .then((data) => {
        console.log("Top tracks:");
        console.log(data);
        setArtistTopTracks(data);
        console.log(`artistTopTracks: ${artistTopTracks}`)
      });
  };

  useEffect(() => {
    let authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParams)
      .then((result) => result.json())
      .then((data) => {
        // console.log(data);
        setAccessToken(data["access_token"]);
      });
  }, []);

  return (
    <div className="App">
      <Search
        setSearchInput={setSearchInput}
        handleSubmitSongSearch={handleSubmitSongSearch}
      />

      {displayArtistData === true && (
        <ArtistProfile
          artistData={artistData}
          artistProfileInfo={artistProfileInfo}
          artistTopTracks={artistTopTracks}
        />
      )}
    </div>
  );
};

export default App;
