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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<NoPage />}></Route>
      <Route path="/" element={<App />}>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
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
