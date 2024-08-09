import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import disneylogo from "../images/logo.svg";
import homeIcon from "../images/home-icon.svg";
// import searchIcon from "../images/search-icon.svg";
// import watchlistIcon from "../images/watchlist-icon.svg";
import originalIcon from "../images/original-icon.svg";
import movieIcon from "../images/movie-icon.svg";
import seriesIcon from "../images/series-icon.svg";
import FirebaseContext from "../context/FirebaseContext";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

const Header = () => {
  const { SigninWithGoogle, SignoutUser } = useContext(FirebaseContext);
  const { name, photo } = useSelector((state) => state);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // console.log("VISIBILITY", isOptionsVisible);
  // console.log(SigninWithGoogle)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const options = [
    { value: "/home", label: "Home", icon: homeIcon },
    { value: "/originals", label: "Originals", icon: originalIcon },
    { value: "/movies", label: "Movies", icon: movieIcon },
    { value: "/series", label: "Series", icon: seriesIcon },
    { value: "/upcoming", label: "Upcoming", icon: movieIcon },
  ];
  const formatOptionLabel = ({ label, icon, value }) => (
    <div>
      <ListContainer>
        <NavLink to={value}>
          <img src={icon} alt="homeIcon" />
          <span>{label}</span>
        </NavLink>
      </ListContainer>
    </div>
  );

  return (
    <>
      <Nav>
        <div style={{ display: "flex", alignItems: "center" }}>
          <NavLink>
            <Logo>
              <img src={disneylogo} alt="disneyLogo" />
            </Logo>
          </NavLink>
          {/* Responsive */}
          {name && windowWidth <= 768 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "center",
                justifyContent: "space-between",
                alignSelf: "self-end",
                position: "fixed",
                top: "15px",
                left: "80px",
                width: "20%",
              }}
              className="dropdown"
            >
              {/* Item1 */}

              <label htmlFor="icons">
                <ListIcon
                  icon={faList}
                  size="3x"
                  onClick={() => {
                    setIsOptionsVisible((prev) => !prev);
                  }}
                />
              </label>
              {/* Item2 */}
              <Select
                className="basic-single"
                defaultValue={options[0]}
                isSearchable={false}
                name="color"
                options={options}
                formatOptionLabel={formatOptionLabel}
                styles={{
                  option: (provided, state) => ({
                    ...provided,
                    padding: 5,
                    backgroundColor: state.isSelected ? "lightblue" : "white",
                    ":hover": {
                      backgroundColor: "lightgray",
                    },
                  }),
                  control: (provided) => ({
                    ...provided,
                    // borderColor: "green",
                    width: isOptionsVisible ? "140px" : "0",
                    // display: isOptionsVisible ? "flex" : "none",
                    opacity: isOptionsVisible ? "1" : "0",
                    transition: isOptionsVisible
                      ? "width 0.4s ease-in, opacity 0.4s ease-in"
                      : "width 0.4s ease-out, opacity 0.4s ease-out",
                    // maxHeight:isOptionsVisible?"300px":"0px"
                  }),
                }}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        {/* w>768 */}
        {!name ? (
          <Login onClick={SigninWithGoogle}>LOGIN</Login>
        ) : (
          <>
            <Navmenu>
              <NavLink to="/home">
                <img src={homeIcon} alt="homeIcon" />
                <span>HOME</span>
              </NavLink>
              {/* <a href="/search">
                <img src={searchIcon} alt="searchIcon" />
                <span>SEARCH</span>
              </a>
              <a href="/watchlist">
                <img src={watchlistIcon} alt="watchlistIcon" />
                <span>WATCHLIST</span>
              </a> */}
              <NavLink to="/originals">
                <img src={originalIcon} alt="originalIcon" />
                <span>ORIGINALS</span>
              </NavLink>
              <NavLink to="/movies">
                <img src={movieIcon} alt="movieIcon" />
                <span>MOVIES</span>
              </NavLink>
              <NavLink to="/series">
                <img src={seriesIcon} alt="seriesIcon" />
                <span>SERIES</span>
              </NavLink>
              <NavLink to="/upcoming">
                <img src={movieIcon} alt="movieIcon" />
                <span>Upcoming</span>
              </NavLink>
            </Navmenu>
            <SignOut>
              <img
                className=" rounded-full"
                src={photo}
                style={{ borderRadius: "full", height: "100%" }}
                alt="userLogo"
              ></img>
              <DropDown>
                <span onClick={() => SignoutUser()}>SignOut</span>
              </DropDown>
            </SignOut>
          </>
        )}
      </Nav>
    </>
  );
};

const ListContainer = styled.div`
  a {
    display: flex;
    align-items: center;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
      background-color: rebeccapurple;
      border-radius: 5px;
      margin-right: 3px;
    }

    span {
      color: rgb(73, 62, 62);
      font-size: 15px;
      letter-spacing: 1.42px;
      line-height: 1.08px;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
    }
  }
`;
const ListIcon = styled(FontAwesomeIcon)`
  width: 20px;

  /* position: relative; */
  right: 30%;
  @media (max-width: 768px) {
    display: block;
  }
`;
const Nav = styled.nav`
  /* border: 2px solid white; */
  position: relative;
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
  margin-top: -3px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
  }

  @media (max-width: 500px) {
    width: 11vw;
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
  bottom: -5px;
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
      font-size: 15px;
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

  a.active span {
    font-weight: bold;
    color: #de6565;
  }
  a.active span:before {
    font-weight: bold;
    background-color: #954040;
  }

  @media (max-width: 768px) {
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

  span {
    &:hover {
      color: #755991;
    }
    &:active {
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

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
