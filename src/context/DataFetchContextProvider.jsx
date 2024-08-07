import React, { useEffect, useState } from "react";
import DataFetchContext from "./DataFetchContext";

const DataFetchContextProvider = ({ children }) => {
  const popularMoviesUrl="https://api.themoviedb.org/3/movie/popular?api_key=90c1dcb9cc63b070b76bdf3e245e31c0";
  const trendingMoviesUrl="https://api.themoviedb.org/3/trending/movie/day?api_key=90c1dcb9cc63b070b76bdf3e245e31c0";
  const topRatedMoviesUrl="https://api.themoviedb.org/3/movie/top_rated?api_key=90c1dcb9cc63b070b76bdf3e245e31c0";
  const originalsUrl="https://api.themoviedb.org/3/tv/top_rated?api_key=90c1dcb9cc63b070b76bdf3e245e31c0";

  const [apiData, setApiData] = useState({
    popular_movies: [],
    trending_movies: [],
    top_rated_movies: [],
    originals: [],
  });

  // console.log("context", apiData);
  async function fetchData(url, type) {
    console.log("type::",type)
    const res = await fetch(url);
    const data = await res.json();
    setApiData((prev) => {
      return { ...prev, [type]: data };
    });
  }

  useEffect(() => {
    // calling api for Popular movies
    fetchData(
      popularMoviesUrl,
      "popular_movies"    
    );
    // calling api for Top-Rated movies
    fetchData(
      topRatedMoviesUrl,
      "top_rated_movies"
    );
    // calling api for Trending movies
    fetchData(
      trendingMoviesUrl,
      "trending_movies"
    );
    // calling api for Originals
    fetchData(
      originalsUrl,
      "originals"
    );
  }, []);
  return (
    <DataFetchContext.Provider value={apiData}>
      {children}
    </DataFetchContext.Provider>
  );
};

export default DataFetchContextProvider;
