import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./Search/Search";
import SearchResults from "./SearchResults/SearchResults";

const CLIENT_ID = "03b53e31e7fd47998f5196660f2a8121";
const CLIENT_SECRET = "cb002e7d5245461a9add7e41b442d312";
const BASE_URL = "https://api.spotify.com";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [artistData, setArtistData] = useState([]);

  const handleSubmitSongSearch = (event) => {
    event.preventDefault();
    console.log("handleSubmitSongSearch...");
    handleSearchSong();
  };

  const handleSearchSong = async () => {
    console.log(`Searching for ${searchInput}...`);
    // Get request using search to get the artist ID
    let artistParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    // Get request with artist name to get artist Spotify ID
    let artistID = await fetch(
      `${BASE_URL}/v1/search?q=${searchInput}&type=artist`,
      artistParams
    )
      .then((result) => result.json())
      .then((data) => {
        // console.log(data.artists.items[0].id)
        return data.artists.items[0].id;
      });

    // Get request with Artist ID grab all data for artist
    let getArtistData = await fetch(
      `${BASE_URL}/v1/artists/${artistID}`,
      artistParams
    )
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setArtistData({ data });
      });

    let getArtistsTopTracks = await fetch(
      `${BASE_URL}/v1/artists/${artistID}/top-tracks?country=US`,
      artistParams
    )
    .then((results) => results.json())
    .then((data) => console.log(data));
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
        console.log(data);
        setAccessToken(data["access_token"]);
      });
  }, []);

  return (
    <div className="App">
      <h1>App</h1>
      <Search
        setSearchInput={setSearchInput}
        handleSubmitSongSearch={handleSubmitSongSearch}
      />
      <SearchResults artistData={artistData} />
    </div>
  );
};

export default App;
