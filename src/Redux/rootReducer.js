import { combineReducers } from "@reduxjs/toolkit";
import userSlice from './slices/userSlice'
import userWatchlistSlice from './slices/userWatchlistSlice'

const rootReducer=combineReducers({
    userSliceReducer:userSlice,
    userWatchlistSliceReducer:userWatchlistSlice
})

export default rootReducer