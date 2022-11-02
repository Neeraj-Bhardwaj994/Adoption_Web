import styled from "styled-components";

export const Wrap = styled.div`
  color: #fff;
`;

export const Section = styled.section`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Text = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #013870;

  @media (max-width: 768px) {
    font-size: 2.9em;
  }

  @media (max-width: 440px) {
    font-size: 2em;
  }
`;
