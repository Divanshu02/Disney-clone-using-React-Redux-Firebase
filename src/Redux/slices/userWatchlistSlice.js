import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  //   watchlistsData:,
  addedWatchlistsArr: [],
  removedWatchlistsArr: [],
};

const userWatchlistSlice = createSlice({
  name: "Watchlists",
  initialState,
  reducers: {
    TOGGLEMOVIESWATCHLIST: (state, action) => {
      state.value += 1;
      if (action.payload.original) {
        const isBookmarked = state.addedWatchlistsArr.some(
          (obj) => obj.id === action.payload.original.id
        );
        console.log("ISBOOKMARKED--", isBookmarked);
        if (isBookmarked) {
          const newWatchlists = state.addedWatchlistsArr.filter(
            (obj) => obj.id !== action.payload.original.id
          );
          state.addedWatchlistsArr = newWatchlists;
        } else {
          state.addedWatchlistsArr.push(action.payload.original);
        }
      } else if (action.payload.pop_movie) {
        const isBookmarked = state.addedWatchlistsArr.some(
          (obj) => obj.id === action.payload.pop_movie.id
        );
        console.log("ISBOOKMARKED--", isBookmarked);
        if (isBookmarked) {
          const newWatchlists = state.addedWatchlistsArr.filter(
            (obj) => obj.id !== action.payload.pop_movie.id
          );
          state.addedWatchlistsArr = newWatchlists;
        } else {
          state.addedWatchlistsArr.push(action.payload.pop_movie);
        }
      } else if (action.payload.top_rated_movie) {
        const isBookmarked = state.addedWatchlistsArr.some(
          (obj) => obj.id === action.payload.top_rated_movie.id
        );
        console.log("ISBOOKMARKED--", isBookmarked);
        if (isBookmarked) {
          const newWatchlists = state.addedWatchlistsArr.filter(
            (obj) => obj.id !== action.payload.top_rated_movie.id
          );
          state.addedWatchlistsArr = newWatchlists;
        } else {
          state.addedWatchlistsArr.push(action.payload.top_rated_movie);
        }
      } else if (action.payload.trending_movie) {
        const isBookmarked = state.addedWatchlistsArr.some(
          (obj) => obj.id === action.payload.trending_movie.id
        );
        console.log("ISBOOKMARKED--", isBookmarked);
        if (isBookmarked) {
          const newWatchlists = state.addedWatchlistsArr.filter(
            (obj) => obj.id !== action.payload.trending_movie.id
          );
          state.addedWatchlistsArr = newWatchlists;
        } else {
          state.addedWatchlistsArr.push(action.payload.trending_movie);
        }
      }
    },
    REMOVEMOVIESWATCHLIST: (state, action) => {
      state.value -= 1;
      state.toursData[action.payload.id - 1].flag = false;
      //   console.log(action.payload.likedArr)
      let unlikedElements = action.payload.newTours.filter((tour) => {
        return tour.id !== action.payload.id;
      });
      //   console.log(unlikedElements,'unliked')
      state.likedArr = [];
      state.likedArr.push(unlikedElements);
    },
    LEFTMOVIES: (state, action) => {
      state.toursData = action.payload;
    },
    FILLMOVIES: (state, action) => {
      state.toursData = action.payload;
    },
    DELETEMOVIEWATCHLIST: (state, action) => {
      // console.log(action.payload)
      const newTours = action.payload.tours.filter((tour) => {
        return tour.id !== action.payload.id;
      });
      //   console.log(newTours)
      state.toursData = newTours;
    },
  },
});

export const {
  TOGGLEMOVIESWATCHLIST,
  REMOVEMOVIESWATCHLIST,
  LEFTMOVIES,
  FILLMOVIES,
  DELETEMOVIEWATCHLIST,
} = userWatchlistSlice.actions;

export default userWatchlistSlice.reducer;
