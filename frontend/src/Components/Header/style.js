import styled from "styled-components";

export const Wrap = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  margin: 1em 0;
  font-size: 1.2em;
`;

export const Logo = styled.div``;

export const Navbar = styled.div`
  display: flex;
`;

export const Navitems = styled.div`
  margin: 0 2.5em;
  color: #ffffff !important;
  @media (max-width: 768px) {
    display: none;
  }

  &:hover{
    text-decoration: underline;
  }
`;

export const Ham = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;
