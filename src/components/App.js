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
  const [artistID, setArtistID] = useState("");
  const [displayArtistData, setDisplayArtistData] = useState(false);

  const handleSubmitSongSearch = (event) => {
    event.preventDefault();
    setDisplayArtistData(false);
    console.log("handleSubmitSongSearch...");
    handleSearchArtist();
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
    // // Get request using search to get the artist ID
    

    // Get request with artist name to get artist Spotify ID
    let getArtistID = await fetch(
      `${BASE_URL}/v1/search?q=${searchInput}&type=artist`,
      artistParams
    )
      .then((result) => result.json())
      .then((data) => {
        setArtistID(data.artists.items[0].id);
        return data.artists.items[0].id;
      });

      let getArtistInfo = await fetch(
        `${BASE_URL}/v1/artists/${getArtistID}`,
        artistParams
      )
        .then((result) => result.json())
        .then((data) => {
          setArtistData(data);
          console.log(artistData);
          // Display artist data once all data has been fetched
          setDisplayArtistData(true);
        })
       

    // Gets top tracks from artist by ID
    let getArtistsTopTracks = await fetch(
      `${BASE_URL}/v1/artists/${getArtistID}/top-tracks?country=US`,
      artistParams
    )
      .then((results) => results.json())
      .then((data) => {
        // console.log(data)
      });

    // Gets 20 related artists
    let getArtistRelatedArtists = await fetch(
      `${BASE_URL}/v1/artists/${getArtistID}/related-artists`,
      artistParams
    )
      .then((result) => result.json())
      .then((data) => {
        // console.log(data.artists);
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

  // // Get request with artist ID grab all data for artist
  useEffect(() => {
    fetch(`${BASE_URL}/v1/artists/${artistID}`, artistParams)
      .then((response) => response.json())
      .then((data) => {
        setArtistData(data);
        console.log(artistData);
      });
  }, [artistID]);

  return (
    <div className="App">
      <h1>App</h1>
      <Search
        setSearchInput={setSearchInput}
        handleSubmitSongSearch={handleSubmitSongSearch}
      />
 
      {displayArtistData === true && <ArtistProfile artistData={artistData} />}
    </div>
  );
};

export default App;
