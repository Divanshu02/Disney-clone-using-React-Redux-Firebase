import React, { useEffect, useState } from "react";
import DataFetchContext from "./DataFetchContext";

const DataFetchContextProvider = ({ children }) => {

    
  const popularMoviesUrl =
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;
  const trendingMoviesUrl =
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`;
  const topRatedMoviesUrl =
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`;
  const originalsUrl =
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`;

  
  const [apiData, setApiData] = useState({
    popular_movies: null,
    trending_movies: [],
    top_rated_movies: [],
    originals: [],
    loader: true,
  });

  // console.log("context", apiData);
  async function fetchData(url, type) {
    setApiData((prev) => {
      return { ...prev, loader: true };
    });
    // console.log("type::",type)
    const res = await fetch(url);
    const data = await res.json();
    setApiData((prev) => {
      return { ...prev, [type]: data };
    });
    setApiData((prev) => {
      return { ...prev, loader: false };
    });
  }

  useEffect(() => {
    // calling api for Popular movies
    fetchData(popularMoviesUrl, "popular_movies");
    // calling api for Top-Rated movies
    fetchData(topRatedMoviesUrl, "top_rated_movies");
    // calling api for Trending movies
    fetchData(trendingMoviesUrl, "trending_movies");
    // calling api for Originals
    fetchData(originalsUrl, "originals");
  }, []);
  return (
    <DataFetchContext.Provider value={apiData}>
      {children}
    </DataFetchContext.Provider>
  );
};

export default DataFetchContextProvider;
