import styled, { createGlobalStyle } from 'styled-components';
import BGimage from './img/background.jpg';

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    background-color: #030303;
    background-size: cover;

    color: #d6d3d3;
    padding: 0 20px;

    background-image: url(${BGimage});
    display: flex;
    justify-content: center;
    font-family: 'Nunito', sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .score {
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: 'Acme', sans-serif;
  }

  .start,
  .next {
    cursor: pointer;
    font-family: inherit;
    font-weight: 700;
    color: #fff;
    background-color: #1d4d8f;
    padding: 10px 20px;
    text-transform: uppercase;
    outline: none;
    border-radius: 5px;
    border: 1px solid #20222d;
  }
`;
