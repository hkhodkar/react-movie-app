import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import MovieListHeading from "./movie-list-heading/MovieListHeading";

import "./App.css";
import MovieList from "./movie-list/MovieList";
import SearchBox from "./search-box/SearchBox";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMoviesRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=66dd34f5`;
    const response = await fetch(url);
    const responseToJson = await response.json();

    if (responseToJson.Search) {
      debugger;
      setMovies(responseToJson.Search);
    }
  };

  useEffect(() => {
    getMoviesRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
