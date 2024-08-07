import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from './slices/userSlice'

const store=configureStore({
    reducer:userSliceReducer
});

export default store;

