import styled from "styled-components";

export const Wrap = styled.div`
color: #594545;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.3em 0;
  font-size: 1.2em;
`;

export const Logo = styled.a``;

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

export const Img = styled.img`
  height: 5em;
  object-fit: cover;
  border-radius: 50%;
  
`;