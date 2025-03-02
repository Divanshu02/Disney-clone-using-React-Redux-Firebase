import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from './slices/userSlice'
import rootReducer from "./rootReducer";


const store=configureStore({
    reducer:rootReducer
});

export default store;

