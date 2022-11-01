import styled from "styled-components";

export const Wrap = styled.div``;

export const MainSection = styled.div`
  // background-image: linear-gradient(to right, #FBAF41, #FBAF41);
  background-color: #d9f8c4;
  width: 100%;
  height: 15em;
  opacity: 1;
  margin: 0 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h1`
  text-align: center;
  font-size: 4em;
  color: rgb(3, 23, 92);

  @media (max-width: 768px) {
    font-size: 3em;
  }
`;



export const ThirdSection = styled.div`
  display: flex;
  flex: 1;
  margin: 0.3em 0;
`;

export const LeftDiv = styled.div`
  width: 50%;
  background-image: url("ContactUs.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 40em;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightDiv = styled.div`
  background-color: #F2F2F2;
  height: 40em;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    height: 30em;
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

export const ButtonWrap = styled.div`
  display: flex;
  margin: 1em 0;
  justify-content: center;
  align-items: center;
`;

export const SomeText = styled.h2`
  text-align: center;
  font-size: 3em;
  margin: 1em 0;
`;

export const Copyrighttext = styled.h6`

text-align: center; 
 color: #594545;`;
