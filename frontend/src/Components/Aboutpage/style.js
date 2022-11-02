import styled from "styled-components";

export const Wrap = styled.div``;

export const LeftText = styled.h2`
  color: #03175c;
  font-size: 4em;
  font-weight: bold;
  text-align: center;

  @media (max-width: 440px) {
    font-size: 3em;
    text-align: center;
  }
`;

export const HighlightText = styled.h2`
  color: #fbaf41;
  font-size: 2em;
  opacity: 0.8;
  text-align: center;

  @media (max-width: 440px) {
    font-size: 2em;
    text-align: center;
  }
`;

export const ThirdSection = styled.div`
  display: flex;
  flex: 1;
  margin: 1em 0;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const LeftDiv = styled.div`
  width: 40%;
  background-image: url("Sabar_Logo_img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 30em;

  @media (max-width: 500px) {
    height: 25em;
    background-size: 30em 30em;
    background-position: center;
  }

  @media (min-width: 1800px) {
    height: 45em;
    background-size: 45em 45em;
    background-position: center;
  }

  @media (max-width: 1000px) {
    width: 100%;
    background-size: 30em 30em;
  }
`;

export const RightDiv = styled.div`
  background-color: #f2f2f2;
  height: 30em;
  width: 60%;
  @media (max-width: 500px) {
    height: 25em;
    background-size: 30em 30em;
    background-position: center;
  }

  @media (min-width: 1800px) {
    height: 45em;
    background-size: 45em 45em;
    background-position: center;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
  position: relative;
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-self: center;
  height: 40em;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const SecSection = styled.div`
  margin: 0em 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const Anchor = styled.a`
  text-decoration: none;
  font-size: 1em;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`;

export const Copyrighttext = styled.h6`
  text-align: center;
  color: #594545;
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: 2.5em;
`;

export const Para = styled.p`
  text-align: center;
  font-size: 1em;
`;
