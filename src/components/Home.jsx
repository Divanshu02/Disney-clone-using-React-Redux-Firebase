import React, { useEffect, useState } from "react";
import styled from "styled-components";
import homeBg from "../images/home-background.png";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import DataFetchContextProvider from "../context/DataFetchContextProvider";

const Home = () => {

  return (
    <DataFetchContextProvider>
      <Container>
        <ImgSlider />
        <Viewers />
        <Recommends />
        <NewDisney />
        <Originals />
        <Trending />
      </Container>
    </DataFetchContextProvider>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 180px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url(${homeBg}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
