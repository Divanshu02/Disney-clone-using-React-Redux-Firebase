import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import DataFetchContext from "../context/DataFetchContext";
import { ThreeCircles } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLEMOVIESWATCHLIST } from "../Redux/slices/userWatchlistSlice";
import { BsBookmarkStar } from "react-icons/bs";
import { BsBookmarkStarFill } from "react-icons/bs";

const Trending = () => {
  const dispatch = useDispatch();
  const data = useContext(DataFetchContext);
  const location = useLocation();
  const { pathname } = location;
  // console.log("data", data);
  let { trending_movies, loader } = data;
  const addedWatchlists = useSelector(
    (state) => state.userWatchlistSliceReducer.addedWatchlistsArr
  );
  const isBookmarked = (card) => addedWatchlists.some((b) => b.id === card.id);

  // console.log("recommends::",popular_movies.results)
  return (
    <>
      {loader ? (
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#acb8ac"
          ariaLabel="three-circles-loading"
          wrapperStyle={{ position: "absolute", left: "50%" }}
          wrapperClass=""
        />
      ) : (
        <>
          {pathname === "/movies" ? (
            ""
          ) : (
            <h3 style={{ fontSize: "2em" }}>Trending</h3>
          )}

          <Wrapper>
            {trending_movies.results &&
              trending_movies.results
                .slice(
                  pathname === "/movies" ? 1 : 8,
                  pathname === "/movies" ? 30 : 16
                )
                .map((trending_movie, key) => {
                  return (
                    <Content key={trending_movie.id}>
                      <button
                        style={{
                          color: "white",
                          fontSize: "25px",
                          cursor: "pointer",
                          position: "absolute",
                          // right: "0px",
                          top: "11rem",
                          right: "0px",
                          borderRadius: "5px",
                        }}
                        onClick={() =>
                          dispatch(TOGGLEMOVIESWATCHLIST({ trending_movie }))
                        }
                      >
                        {isBookmarked(trending_movie) ? (
                          <BsBookmarkStarFill />
                        ) : (
                          <BsBookmarkStar />
                        )}
                      </button>
                      <NavLink to={`/detail/${trending_movie.id}`}>
                        <img
                          src={`https://image.tmdb.org/t/p/original${trending_movie.backdrop_path}`}
                        ></img>
                      </NavLink>
                    </Content>
                  );
                })}
          </Wrapper>
        </>
      )}
    </>
  );
};

const Wrapper = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: space-evenly;
  margin-top: 7px;
  padding: 30px 0px 26px;
  flex-wrap: wrap;
  gap: 25px;
  align-items: center;

  @media (max-width: 768px) {
    /* gap: 10px; */
    /* align-items: center; */
    justify-content: center;
  }
`;
const Content = styled.div`
  /* min-width: 20vw;
  min-height: 40vh; */
  width: 310px;
  height: 200px;
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 1);
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  &:hover {
    transform: scale(1.05);
    border: 4px solid rgba(249, 249, 249, 0.8);
    transition-duration: 200ms;
  }
`;

export default Trending;
