import { FaDonate } from "react-icons/fa";
import styled from "styled-components";
import background from "../../assets/background.jpg";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const Main = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  width: 100%;
  height: 85vh;
`;

export const TextDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Text = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(43, 43, 43, 0.6);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.67);
  backdrop-filter: blur(13.5px);
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  h1 {
    font-size: 10rem;
    padding-top: 4rem;
    word-break: break-word;
    text-align: center;
    @media screen and (max-width: 530px) {
      font-size: 8rem;
    }
  }
  h4 {
    font-size: 2rem;
    word-break: break-word;
    font-weight: 300;
    text-align: center;
    padding: 0 4rem;
    @media screen and (max-width: 530px) {
      font-size: 1.8rem;
      padding: 0 3rem;
    }
  }
`;

export const InfoProductDiv = styled.div`
  width: 100%;
  height: 12rem;
  background-color: blue;
  display: flex;
  justify-content: center;
  background: #171717;
  border-radius: 0 0 15% 15%;
  @media screen and (max-width: 580px) {
    height: 14rem;
  }
`;

export const ProductTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  padding-top: 1rem;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductTextTitle = styled.h1`
  font-size: 2.5rem;
  width: 100%;
  word-break: break-word;
  text-align: center;
  @media screen and (max-width: 580px) {
    font-size: 2rem;
  }
`;

export const Icon = styled(FaDonate)`
  font-size: 4rem;
  width: 100%;
`;

export const ProductTextSubTitle = styled.h4`
  font-size: 1.8rem;
  width: 100%;
  word-break: break-word;
  text-align: center;
  @media screen and (max-width: 580px) {
    font-size: 1.4rem;
  }
`;

export const ProductDiv = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: auto;
  background: #171717;
  padding: 0 2rem;
  a {
    text-decoration: none;
  }
`;

export const Product = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background-color: black;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.67);
  transition: all 0.3s ease-in;
  margin: 2rem 0;
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
  :hover {
    background-color: #e3b41a;
    a {
      color: black;
    }
  }
  img {
    width: 30rem;
    border-radius: 1.5rem 0 0 1.5rem;
    @media screen and (max-width: 900px) {
      width: 20rem;
    }
    @media screen and (max-width: 640px) {
      width: 100%;
      border-radius: 1.5rem 1.5rem 0 0;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    padding: 0 1.5rem;
    h1 {
      font-size: 3rem;
      word-break: break-word;
      @media screen and (max-width: 900px) {
        font-size: 2rem;
      }
    }
    span {
      font-size: 2.5rem;
      font-weight: 700;
      text-decoration: underline;
      font-weight: 300;
      word-break: break-word;
      @media screen and (max-width: 900px) {
        font-size: 1.5rem;
      }
    }
    h2 {
      font-size: 2rem;
      word-break: break-word;
      font-weight: 300;
      @media screen and (max-width: 900px) {
        font-size: 1rem;
      }
    }
    h4 {
      font-size: 1.5rem;
      height: auto;
      font-style: italic;
      font-weight: 300;
      @media screen and (max-width: 900px) {
        font-size: 1rem;
      }
      a {
        color: #e3b41a;
        transition: all 0.3s ease-in;
      }
    }
  }
`;
