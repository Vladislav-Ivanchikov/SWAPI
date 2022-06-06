import {createGlobalStyle} from "styled-components";

export const AppStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Exo 2', sans-serif;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url("/47415_star-wars-space-backgrounds_1920x1080_h.jpg");
    background-size: cover;
  }
`

