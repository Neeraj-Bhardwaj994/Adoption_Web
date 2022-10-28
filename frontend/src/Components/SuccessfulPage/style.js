import styled from "styled-components"

export const Wrap = styled.div`
    color: #fff;
`

export const Section = styled.section`
    margin: 5em 0;
`;


export const Uppertext = styled.h1`
  font-size: 4em;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3em;
  }

  @media (max-width: 440px) {
    font-size: 2em;
  }
`;

export const Lowertext = styled.h4`
  font-size: 2.5em;
  text-align: center;
  margin: 2em 0;

  color: #b2b2b2;

  @media (max-width: 768px) {
    font-size: 1.5em;
    margin: 2em 0;
  }

  @media (max-width: 440px) {
    font-size: 1em;
    margin: 2em 0;
  }
`;