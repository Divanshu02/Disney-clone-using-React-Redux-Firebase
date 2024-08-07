import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NoPage from "./components/NoPage";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Home from "./components/Home";
import Login from "./components/Login";
import Detail from "./components/Detail";
import Originals from "./components/Originals";
import Trending from "./components/Trending";
import NewDisney from "./components/NewDisney";
import Recommends from "./components/Recommends";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<NoPage />}></Route>
      <Route path="/" element={<App />}>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/originals" element={<Originals/>}/>
        <Route path="/movies" element={<Trending/>}/>
        <Route path="/series" element={<NewDisney/>}/>
        <Route path="/upcoming" element={<Recommends/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Route>
    </> 
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
);
