import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #000000;
  height: 6rem;
  width: 100%;
`;

export const Logo = styled.img`
  width: 5rem;
`;

export const LinksDiv = styled.div`
  display: flex;
  width: 50rem;
  height: 6rem;
  align-items: center;
  justify-content: space-around;
  a {
    font-size: 2rem;
    font-weight: 700;
    text-decoration: none;
    transition: font-size .15s ease-in;
    :hover {
      font-size: 2.2rem
    }
  }
`;

