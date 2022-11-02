import styled from "styled-components";

export const Wrap = styled.div`
  color: #000;
`;

export const MainSection = styled.div`
  background-color: #fbaf41;
  height: 10em;
  opacity: 0.85;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h1`
  text-align: center;
  font-size: 4em;

  @media (max-width: 768px) {
    font-size: 3em;
  }
`;

export const SecSection = styled.div`
align-items: center;
justify-content: center;
`;

export const UppertextSec = styled.h1`
  text-decoration: underline;
  margin: 0.7em 0;
  color: #03175c;
  font-size: 2em;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 440px) {
    font-size: 1.5em;
  }
`;

export const Search = styled.div``;

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const Copyrighttext = styled.h6`
  text-align: center;
  margin: 3em 0;
  color: #594545;
`;

export const Anchor = styled.a`
  text-decoration: none;
  font-size: 1em;
  margin: 0 1em;

  &:hover {
    text-decoration: underline;
  }
`;

export const QueryText = styled.h5`
    margin: 0.5em 0.5em;
`;
