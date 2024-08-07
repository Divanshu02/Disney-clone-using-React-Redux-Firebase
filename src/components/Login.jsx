import React from "react";
import styled from "styled-components";
import loginBackgroundImg from "../images/login-background.jpg";
import ctaLogo1Img from "../images/cta-logo-one.svg";
import ctaLogo2Img from "../images/cta-logo-two.png";

const Login = () => {
  return (
    <>
      <Container>
        <Content>
          <CTA>
            <CTALogo src={ctaLogo1Img}></CTALogo>
            <SignUp>Get All There</SignUp>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              maiores repudiandae aspernatur culpa reprehenderit, adipisci nemo
              quis eligendi delectus vero vitae nesciunt quae perferendis,
              suscipit libero eum sequi, temporibus consequatur.
            </Description>
            <CTALogo src={ctaLogo2Img}></CTALogo>
          </CTA>
          <BgImage />
        </Content>
      </Container>
    </>
  );
};

const Container = styled.section`
  border: 2px solid blue;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  text-align: center;
`;

const Content = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  background-image: url(${loginBackgroundImg});
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
`;

const CTA = styled.div`
  /* border: 2px solid green;
  margin-bottom: 2vw;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-inline: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%; */
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogo = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

export default Login;
