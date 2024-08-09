import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import img from "../images/3d-render-thumb-up-sign-isolated-hand-gesture.jpg";
import { ThreeCircles } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
  const [movieDetails, setMovieDetails] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log("detail", data);
        setMovieDetails(data);
      });
  }, []);

  return (
    <>
      {movieDetails ? (
        <div>
          {movieDetails.backdrop_path ? (
            <Background>
              <img
                src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
                alt=""
              />
            </Background>
          ) : (
            ""
          )}
          <Content>
            <div>
              <FontAwesomeIcon
                icon={faArrowLeft}
                size="2x"
                style={{ position: "absolute", top: "-80%", cursor: "pointer" }}
                onClick={() => navigate(-1)}
              />
            </div>

            <h2>{movieDetails.original_title}</h2>
            <p>
              {movieDetails.overview && movieDetails.overview.slice(0, 200)}
            </p>
            <p>{movieDetails.tagline}</p>
            <div>
              <img
                src={img}
                alt=""
                width={40}
                style={{ borderRadius: "20px" }}
              />
              {/* <p>{movieDetails.popularity}</p> */}
            </div>
          </Content>
        </div>
      ) : (
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#7a867a"
          ariaLabel="three-circles-loading"
          wrapperStyle={{ position: "absolute", left: "50%", top: "40%" }}
          wrapperClass=""
        />
      )}
    </>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  filter: brightness(50%);

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: auto;
    object-fit: cover;
    transform: translate(-50%, -40%);
  }

  @media (max-width: 768px) {
    width: 100%;

    img {
      width: auto;
      height: auto;
    }
  }

  @media (max-width: 480px) {
    width: 100%;

    img {
      width: 100%;
      height: auto; /* Adjust height to be proportional to width */
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  width: 50%;
  min-height: 300px;

  h2 {
    font-size: 3.5vw;
    filter: brightness(90%);
    font-family: "Raleway", sans-serif;
  }
  p:nth-of-type(1) {
    font-family: "Gupter", serif;
    font-weight: 400;
    font-style: normal;
    width: 70%;
    font-size: 1.2vw;
    color: #d5d3d3;
    @media (max-width: 768px) {
      font-size: 3vw;
    }
  }
  p:nth-of-type(2) {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    color: #ec8383;
    font-size: 1.4vw;
  }

  div {
    display: flex;
    gap: 5px;
  }
`;

export default Detail;
