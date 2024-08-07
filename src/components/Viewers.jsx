import React from "react";
import styled from "styled-components";
import disneyViewers from "../images/viewers-disney.png";
import pixarViewers from "../images/viewers-pixar.png";
import marvelViewers from "../images/viewers-marvel.png";
import starWarsViewers from "../images/viewers-starwars.png";
import nationalViewers from "../images/viewers-national.png";
import video1 from "../videos/disney-video.mp4";
import video2 from "../videos/pixar-video.mp4";
import video3 from "../videos/marvel-video.mp4";
import video4 from "../videos/star-wars-video.mp4";
import video5 from "../videos/national-geographic-video.mp4";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src={disneyViewers} alt="" />
        <video src={video1} autoPlay loop muted />
      </Wrap>
      <Wrap>
        <img src={pixarViewers} alt="" />
        <video src={video2} autoPlay loop muted />
      </Wrap>
      <Wrap>
        <img src={marvelViewers} alt="" />
        <video src={video3} autoPlay loop muted />
      </Wrap>
      <Wrap>
        <img src={starWarsViewers} alt="" />
        <video src={video4} autoPlay loop muted />
      </Wrap>
      <Wrap>
        <img src={nationalViewers} alt="" />
        <video src={video5} autoPlay loop muted />
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  /* border: 2px solid red; */
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 30px 0px 26px;
  display: flex;
  justify-content: space-between;
  gap: 25px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Wrap = styled.div`
  /* padding-top: 56.25%; */
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 1);
  border: 3px solid rgba(249, 249, 249, 0.1);
  width: 70%;
  img {
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
  }

  video {
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: video;
    transition-duration: 0.8s;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0/73%) 0px 16px 10px -10px;

    video {
      opacity: 1;
    }
  }
`;
export default Viewers;
