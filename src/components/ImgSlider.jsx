import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderBadging from "../images/slider-badging.jpg";
import sliderBadag from "../images/slider-badag.jpg";
import sliderScale from "../images/slider-scale.jpg";
import sliderScales from "../images/slider-scales.jpg";

const ImgSlider = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="">
          <img src={sliderBadging} alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="">
          <img src={sliderBadag} alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="">
          <img src={sliderScale} alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="">
          <img src={sliderScales} alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  /* border: 2px solid red; */
  margin-top: 20px;
  & > button {
    /* border: 2px solid blue; */
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  /* border: 2px solid red; */
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0/73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 200ms;
    }
  }
`;

export default ImgSlider;
