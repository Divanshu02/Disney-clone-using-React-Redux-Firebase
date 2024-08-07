import React, { useContext } from "react";
import styled from "styled-components";
import disneylogo from "../images/logo.svg";
import homeIcon from "../images/home-icon.svg";
import searchIcon from "../images/search-icon.svg";
import watchlistIcon from "../images/watchlist-icon.svg";
import originalIcon from "../images/original-icon.svg";
import movieIcon from "../images/movie-icon.svg";
import seriesIcon from "../images/series-icon.svg";
import FirebaseContext from "../context/FirebaseContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { SigninWithGoogle,SignoutUser } =
    useContext(FirebaseContext);
  const { name, photo } = useSelector((state) => state);
  // console.log(SigninWithGoogle)



  return (
    <div>
      <Nav>
        <Link>
          <Logo to="/">
            <img src={disneylogo} alt="disneyLogo" />
          </Logo>
        </Link>
        {!name ? (
          <Login onClick={SigninWithGoogle}>LOGIN</Login>
        ) : (
          <>
            <Navmenu>
              <Link to="/home">
                <img src={homeIcon} alt="homeIcon" />
                <span>HOME</span>
              </Link>
              <a href="/search">
                <img src={searchIcon} alt="searchIcon" />
                <span>SEARCH</span>
              </a>
              <a href="/watchlist">
                <img src={watchlistIcon} alt="watchlistIcon" />
                <span>WATCHLIST</span>
              </a>
              <a href="/originals">
                <img src={originalIcon} alt="originalIcon" />
                <span>ORIGINALS</span>
              </a>
              <a href="/movies">
                <img src={movieIcon} alt="movieIcon" />
                <span>MOVIES</span>
              </a>
              <a href="/series">
                <img src={seriesIcon} alt="seriesIcon" />
                <span>SERIES</span>
              </a>
            </Navmenu>
            <SignOut>
              <img
                className=" rounded-full"
                src={photo}
                style={{ borderRadius: "full", height: "100%" }}
                alt="userLogo"
              ></img>
              <DropDown>
                <span onClick={()=>SignoutUser()}>SignOut</span>
              </DropDown>
            </SignOut>
          </>
        )}
      </Nav>
    </div>
  );
};

const Nav = styled.nav`
  /* border: 2px solid white; */
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.div`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
  }
`;

const Navmenu = styled.div`
  /* border: 2px solid green; */
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0px 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08px;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        content: "";
        background-color: white;
        position: absolute;
        height: 3px;
        bottom: -12px;
        transform-origin: left;
        width: 100%;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      
      span:before {
        transform: scaleX(1);
      }
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const Login = styled.a`
  border: 1px dotted white;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  border-radius: 5px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border-color: transparent;
  }
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;

  span{
    &:hover{
      color: #755991;
    }
    &:active{
      color: #71489a;
    }
  }

`;

const SignOut = styled.div`
cursor: pointer;
position: relative;
height: 48px;
width: 48px;
display: flex;
align-items: center;
justify-content: center;

img{
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
&:hover{
  ${DropDown}{
    opacity: 1;
    transition-duration: 1s;
  }

}
`;

export default Header;
