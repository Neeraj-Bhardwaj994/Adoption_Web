import styled from "styled-components";

export const Wrap = styled.div`
  transition: all 0.25s ease-in-out;
  &:hover {
    transform: scale(1.04);
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  font-size: 1em;
  margin: 0 1em;

  &:hover {
    text-decoration: underline;
  }
`;
