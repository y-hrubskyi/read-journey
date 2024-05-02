import { createGlobalStyle } from "styled-components";
import "modern-normalize";

import GilroyMediumWOFF2 from "@/assets/fonts/Gilroy-Medium.woff2";
import GilroyBoldWOFF2 from "@/assets/fonts/Gilroy-Bold.woff2";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Gilroy";
    src: local("Gilroy"),
      url(${GilroyMediumWOFF2}) format("woff2");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Gilroy";
    src: local("Gilroy"),
      url(${GilroyBoldWOFF2}) format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: 'Gilroy', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  
  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }`;
