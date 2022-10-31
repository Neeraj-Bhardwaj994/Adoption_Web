import styled from "styled-components";

export const Wrap = styled.div``;

export const MainSection = styled.div`
  background-image: linear-gradient(to right, #013870, #594545);
  width: 100%;
  height: 15em;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h1`
  text-align: center;
  font-size: 4em;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 3em;
  }
`;

export const SecSection = styled.div`
  margin: 1em 0;
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


export const ThirdSection = styled.div`
  display: flex;
  flex: 1;
`;

export const LeftDiv = styled.div``;

export const RightDiv = styled.div``;