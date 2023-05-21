import React, { useState, useEffect, useDebugValue } from "react";
import "../../src/App.css";
import Search from "./Search/Search";
import ArtistProfile from "./ArtistProfile/ArtistProfile";

const CLIENT_ID = "03b53e31e7fd47998f5196660f2a8121";
const CLIENT_SECRET = "cb002e7d5245461a9add7e41b442d312";
const BASE_URL = "https://api.spotify.com";

// TO DO: create search results dropdown functionality

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [artistID, setArtistID] = useState(null);
  const [artistData, setArtistData] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [artistTopTracks, setArtistTopTracks] = useState(null);
  const [artistProfileInfo, setArtistProfileInfo] = useState([]);
  const [displayArtistData, setDisplayArtistData] = useState(false);

  const handleSubmitSongSearch = async (event) => {
    event.preventDefault();
    setDisplayArtistData(false);
    console.log("handleSubmitSongSearch...");
    await handleSearchArtist(searchInput);
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

  const getArtistByID = async (artistID) => {
    // Fetch data for artist by their ID
    await fetch(
      `${BASE_URL}/v1/artists/${artistID}`,
      artistParams
    )
      .then((result) => result.json())
      .then((data) => {
        console.log("artistData:");
        console.log(data);
        setArtistData(data);
      });
  };

  const getArtistTopTracks = async (artistID) => {
    // Gets top tracks from artist by ID
    fetch(
      `${BASE_URL}/v1/artists/${artistID}/top-tracks?country=US`,
      artistParams
    )
      .then((result) => result.json())
      .then((data) => {
        console.log("Top tracks:");
        console.log(data);
        setArtistTopTracks(data);
        console.log(artistTopTracks);
      });
  }

  // Function for handling when a user selects an artist from the search results dropdown
  const handleSearchResultClick = async (artistID) => {
    await getArtistByID(artistID);
  }

  const handleSearchArtist = async (artist) => {
    // Get request with artist name to get artist Spotify ID
    let getArtistID = await fetch(
      `${BASE_URL}/v1/search?q=${artist}&type=artist`,
      artistParams
    )
      .then((result) => result.json())
      .then((data) => {
        console.log("artist search results");
        let artists = data.artists.items;
        return data.artists.items[0].id;
      });

    await getArtistByID(getArtistID);
    await getArtistTopTracks(getArtistID);
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

  useEffect(() => {
    console.log(`searchInput was changed to ${searchInput}`);

    if (searchInput.length > 0) {
      // Fetch IDs of all users with provided name
      fetch(`${BASE_URL}/v1/search?q=${searchInput}&type=artist`, artistParams)
        .then((result) => result.json())
        .then((data) => {
          console.log("getting artist IDs...");
          setSearchResults(data.artists.items);
          console.log(searchResults);
          // return data.artists.items[0].id;
        });
    }
  }, [searchInput]);

  return (
    <div className="App">
      <Search
        setSearchInput={setSearchInput}
        handleSubmitSongSearch={handleSubmitSongSearch}
      />

      <ul>
        {searchResults &&
          searchResults.map((res) => (
            <li 
            key={res.id}
            onClick={() => handleSearchResultClick(res.id)}
            >
              {res.name}
            </li>
          ))}
      </ul>

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
